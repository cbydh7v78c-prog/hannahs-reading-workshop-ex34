/* 通过 GitHub REST API 直接提交文件树（不走 git 传输层）
   用法：GH_TOKEN=xxx node tools/deploy-api.mjs [repo]
*/
import fs from 'node:fs';
import path from 'node:path';

const TOKEN = process.env.GH_TOKEN;
if (!TOKEN) { console.error('缺少 GH_TOKEN'); process.exit(1); }
const REPO = process.argv[2] || 'hannahs-reading-workshop-ex34';
const ROOT = path.resolve(import.meta.dirname, '..');
const API = 'https://api.github.com';

const H = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'hannahs-reading-workshop-deploy',
  'Content-Type': 'application/json',
};

async function api(method, url, body) {
  const res = await fetch(API + url, { method, headers: H, body: body ? JSON.stringify(body) : undefined });
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = { raw: text.slice(0, 300) }; }
  return { status: res.status, data };
}

const SKIP = new Set(['.git', 'node_modules', '.DS_Store']);
function walk(dir, base = '') {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(ent.name)) continue;
    const rel = base ? base + '/' + ent.name : ent.name;
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(abs, rel));
    else out.push({ rel, abs });
  }
  return out;
}

const files = walk(ROOT);
const tree = files.map((f) => ({
  path: f.rel.split(path.sep).join('/'),
  mode: '100644',
  type: 'blob',
  content: fs.readFileSync(f.abs, 'utf8'),
}));
console.log(`[1] 收集文件 ${tree.length} 个`);

const me = await api('GET', '/user');
const owner = me.data.login;

/* 仓库不存在则先创建 */
let repo = await api('GET', `/repos/${owner}/${REPO}`);
if (repo.status === 404) {
  const cr = await api('POST', '/user/repos', {
    name: REPO,
    description: "Hannah's Reading Workshop — Cambridge IGCSE ESL Reading Exercise 3 (Note-taking) & Exercise 4 (Multiple Choice)",
    homepage: `https://${owner.toLowerCase()}.github.io/${REPO}/`,
    private: false,
    has_issues: true,
    has_wiki: false,
    auto_init: false,
  });
  if (cr.status !== 201) {
    console.error('  ✗ 创建仓库失败', cr.status, JSON.stringify(cr.data).slice(0, 300));
    process.exit(1);
  }
  console.log('[0] ✓ 已创建公开仓库 ' + cr.data.full_name);
} else console.log('[0] ✓ 仓库已存在');

/* 空仓库需要先用 Contents API 建立初始提交 */
let head = await api('GET', `/repos/${owner}/${REPO}/git/ref/heads/main`);
if (head.status === 404 || head.status === 409) {
  const init = await api('PUT', `/repos/${owner}/${REPO}/contents/.nojekyll`, {
    message: 'chore: init repository',
    content: '',
  });
  if (init.status !== 201) {
    console.error('  ✗ 初始化仓库失败', init.status, JSON.stringify(init.data).slice(0, 300));
    process.exit(1);
  }
  console.log('  ✓ 已创建初始提交');
  head = await api('GET', `/repos/${owner}/${REPO}/git/ref/heads/main`);
}

const t = await api('POST', `/repos/${owner}/${REPO}/git/trees`, { tree });
if (t.status !== 201) { console.error('  ✗ 创建 tree 失败', t.status, JSON.stringify(t.data).slice(0, 400)); process.exit(1); }
console.log(`  ✓ tree ${t.data.sha.slice(0, 8)}`);

let parents = [];
if (head.status === 200) parents = [head.data.object.sha];

const c = await api('POST', `/repos/${owner}/${REPO}/git/commits`, {
  message: "feat: Hannah's Reading Workshop — Exercise 3 & 4 — 19 篇 / 124 分",
  tree: t.data.sha,
  parents,
});
if (c.status !== 201) { console.error('  ✗ 创建 commit 失败', c.status, JSON.stringify(c.data).slice(0, 400)); process.exit(1); }
console.log(`[2] ✓ commit ${c.data.sha.slice(0, 8)}`);

if (parents.length) {
  const up = await api('PATCH', `/repos/${owner}/${REPO}/git/refs/heads/main`, { sha: c.data.sha, force: true });
  console.log(up.status === 200 ? '  ✓ 已更新 main' : `  ✗ 更新失败 ${up.status} ${JSON.stringify(up.data).slice(0, 200)}`);
} else {
  const mk = await api('POST', `/repos/${owner}/${REPO}/git/refs`, { ref: 'refs/heads/main', sha: c.data.sha });
  console.log(mk.status === 201 ? '  ✓ 已创建 main' : `  ✗ 建分支失败 ${mk.status} ${JSON.stringify(mk.data).slice(0, 200)}`);
}

/* Pages */
let pages = await api('GET', `/repos/${owner}/${REPO}/pages`);
if (pages.status === 404) {
  const cr = await api('POST', `/repos/${owner}/${REPO}/pages`, { source: { branch: 'main', path: '/' } });
  console.log(cr.status === 201 ? '[3] ✓ 已开启 Pages（main / root）' : `[3] ✗ 开启失败 ${cr.status} ${JSON.stringify(cr.data).slice(0, 300)}`);
} else {
  console.log('[3] Pages 已存在：' + (pages.data.html_url || ''));
}

const site = `https://${owner.toLowerCase()}.github.io/${REPO}/`;
console.log('[4] 等待构建：' + site);
let built = false;
for (let i = 0; i < 50; i++) {
  await new Promise((r) => setTimeout(r, 6000));
  const st = await api('GET', `/repos/${owner}/${REPO}/pages`);
  const s = st.data && st.data.status;
  process.stdout.write(`   ${i * 6 + 6}s status=${s || st.status}\n`);
  if (s === 'built') { built = true; break; }
  if (s === 'errored') break;
}
console.log(built ? '  ✓ 构建完成' : '  ! 尚未 built，继续验证');

for (let i = 0; i < 12; i++) {
  try {
    const r = await fetch(site, { headers: { 'User-Agent': 'check' } });
    const html = await r.text();
    const ok = r.status === 200 && html.includes("Hannah's Reading Workshop");
    console.log(`[5] 第 ${i + 1} 次：HTTP ${r.status} 标题匹配=${ok} 长度=${html.length}`);
    if (ok) {
      for (const p of ['assets/style.css', 'assets/app.js', 'ex3/index.html', 'ex4/index.html', 'data/ex3/p10.js', 'data/ex4/p09.js']) {
        const rr = await fetch(site + p, { headers: { 'User-Agent': 'check' } });
        console.log(`   ${p} -> ${rr.status}`);
      }
      console.log('\n=== 发布成功 ===\n' + site);
      process.exit(0);
    }
  } catch (e) {
    console.log(`[5] 第 ${i + 1} 次：${e.message}`);
  }
  await new Promise((r) => setTimeout(r, 10000));
}
console.log('\n=== 已提交，线上尚未生效 ===\n' + site);
