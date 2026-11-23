/* 数据校验：node tools/check.mjs [起] [止] [--ex3|--ex4]
   - 结构完整性（段落/题目/词汇/长难句）
   - 证据片段必须唯一出现且落在同一句内
   - 词汇必须有 IPA、例句必须能在原文中找到
   - 段落文字与试卷原文逐词一致（4-gram 覆盖率 ≥ 0.92）
*/
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(import.meta.dirname, '..');
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const only = process.argv.find((a) => a === '--ex3' || a === '--ex4');
const from = +(args[0] || 1);
const to = +(args[1] || (only === '--ex4' ? 9 : only === '--ex3' ? 10 : 13));

const N = (s) => String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/###/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
const SQ = (s) => N(s).replace(/\s+/g, '');

const ABBR = /(?:\b(?:a\.m|p\.m|mr|mrs|ms|dr|prof|no|st|e\.g|i\.e|etc|vs|fig|[A-Z])\.)$/;
function splitSentences(text) {
  const used = /[.!?][\u201D\u2019"']?\s+(?=[A-Z0-9\u201C\u2018"'(£])/g;
  let parts = [], last = 0, m;
  while ((m = used.exec(text)) !== null) { parts.push({ t: text.slice(last, m.index + m[0].trim().length) }); last = m.index + m[0].length; }
  parts.push({ t: text.slice(last) });
  const merged = [];
  for (const p of parts) {
    if (merged.length && ABBR.test(merged[merged.length - 1].t.trim())) merged[merged.length - 1].t += ' ' + p.t;
    else merged.push({ t: p.t });
  }
  return merged.map((x) => x.t.trim()).filter(Boolean);
}

function shingles(text, n = 4) {
  const w = N(text).replace(/[^a-z0-9'\- ]/g, ' ').split(/\s+/).filter(Boolean);
  const out = new Set();
  for (let i = 0; i + n <= w.length; i++) out.add(w.slice(i, i + n).join(' '));
  return out;
}

function loadGroup(dir) {
  const g = { name: path.basename(dir), passages: [], errors: [] };
  const files = fs.readdirSync(dir).filter((f) => /^p\d+\.js$/.test(f)).sort();
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  for (const f of files) {
    try { vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), sandbox, { filename: f }); }
    catch (e) { g.errors.push(`${f} 语法错误: ${e.message}`); }
  }
  g.passages = (sandbox.window.PASSAGES || []).sort((a, b) => a.no - b.no);
  return g;
}

/* Exercise 4 官方答案（按篇序号，Q10–Q15 或 Q1–Q6） */
const ANS4 = {
  1: 'BCCBAB', 2: 'CABBCB', 3: 'CABABA', 4: 'ACBCBA', 5: 'CABCAB',
  6: 'ABAACC', 7: 'ACABBC', 8: 'CBABCA', 9: 'CBBACB'
};

const GROUPS = [];
for (const ex of [3, 4]) {
  if (only === '--ex3' && ex !== 3) continue;
  if (only === '--ex4' && ex !== 4) continue;
  GROUPS.push({ ex, dir: path.join(ROOT, 'data', 'ex' + ex) });
}

let total = { pass: 0, q: 0, marks: 0, vocab: 0, syntax: 0 };
let fail = 0;

for (const { ex, dir } of GROUPS) {
  if (!fs.existsSync(dir)) { console.log(`! 缺少目录 ${dir}`); continue; }
  const src = fs.readFileSync(path.join(ROOT, 'tools', `source-ex${ex}.txt`), 'utf8');
  const srcN = N(src);
  const srcAll = shingles(src, 4);
  const srcSq = SQ(src);
  const g = loadGroup(dir);
  if (g.errors.length) { g.errors.forEach((e) => console.log('✗ ' + e)); fail += g.errors.length; }

  for (const p of g.passages) {
    if (p.no < from || p.no > to) continue;
    const err = [];
    const tag = `${g.name}/p${String(p.no).padStart(2, '0')} ${p.title || '?'}`;

    for (const k of ['id', 'no', 'page', 'paper', 'topic', 'title', 'intro']) if (!p[k]) err.push(`缺少 ${k}`);
    if (!Array.isArray(p.paras) || !p.paras.length) err.push('paras 为空');
    else {
      p.paras.forEach((t, i) => {
        if (typeof t !== 'string' || t.trim().length < 40) err.push(`第 ${i + 1} 段过短`);
        const sh = shingles(t);
        let hit = 0; sh.forEach((s) => { if (srcAll.has(s)) hit++; });
        const cov = sh.size ? hit / sh.size : 1;
        if (cov < 0.92) err.push(`第 ${i + 1} 段与原文不一致（覆盖率 ${(cov * 100).toFixed(1)}%）`);
      });
    }

    const article = (p.paras || []).join('\n');
    const articleN = N(article);
    const sents = (p.paras || []).flatMap((t) => splitSentences(t));

    const qs = p.questions || [];
    if (!srcN.includes(N(p.intro || ''))) err.push('intro 与试卷原文不一致');
    const want = ex === 3 ? 2 : 6;
    if (qs.length !== want) err.push(`题目数应为 ${want}，实际 ${qs.length}`);

    let marks = 0;
    qs.forEach((q) => {
      marks += q.marks || 0;
      if (!q.no) err.push('题目缺少 no');
      if (q.type === 'note') {
        if (!q.heading || q.heading.length < 6) err.push(`Q${q.no} 缺少 heading`);
        else if (!srcN.includes(N(q.heading))) err.push(`Q${q.no} heading 与试卷原文不一致`);
        if (!q.why || q.why.length < 20) err.push(`Q${q.no} 的 why 过短`);
        const slots = q.slots || q.marks;
        if (slots !== q.marks) err.push(`Q${q.no} slots(${slots}) ≠ marks(${q.marks})`);
        if (!Array.isArray(q.items) || q.items.length < q.marks) err.push(`Q${q.no} 可接受答案少于 ${q.marks} 条`);
        (q.items || []).forEach((it, i) => {
          if (!it.t || it.t.length < 3) err.push(`Q${q.no} 第 ${i + 1} 条缺少 t`);
          if (!it.key) { err.push(`Q${q.no} 第 ${i + 1} 条缺少 key`); return; }
          const nk = N(it.key);
          if (!articleN.includes(nk)) err.push(`Q${q.no} 第 ${i + 1} 条 key 不在原文：${it.key}`);
          else {
            const count = articleN.split(nk).length - 1;
            if (count > 1) err.push(`Q${q.no} 第 ${i + 1} 条 key 出现 ${count} 次，需加长为唯一片段：${it.key}`);
            if (!sents.some((s) => N(s).includes(nk))) err.push(`Q${q.no} 第 ${i + 1} 条 key 跨句：${it.key}`);
          }
        });
      } else {
        if (!q.stem || q.stem.length < 10) err.push(`Q${q.no} 缺少 stem`);
        if (!Array.isArray(q.opts) || q.opts.length !== 3) err.push(`Q${q.no} 选项应为 3 个`);
        if (!['A', 'B', 'C'].includes(q.ans)) err.push(`Q${q.no} ans 非法：${q.ans}`);
        const expect = (ANS4[p.no] || '')[ex === 4 ? qs.indexOf(q) : -1];
        if (expect && q.ans !== expect) err.push(`Q${q.no} 答案应为 ${expect}，数据里是 ${q.ans}`);
        if (!srcN.includes(N(q.stem))) err.push(`Q${q.no} 题干与试卷原文不一致`);
        (q.opts || []).forEach((o, oi) => { if (!srcN.includes(N(o))) err.push(`Q${q.no} 选项 ${'ABC'[oi]} 与试卷原文不一致`); });
        for (const k of ['key', 'why', 'para', 'trap']) if (!q[k] || String(q[k]).length < 8) err.push(`Q${q.no} 缺少 ${k}`);
        if (q.key) {
          const nk = N(q.key);
          if (!articleN.includes(nk)) err.push(`Q${q.no} key 不在原文：${q.key}`);
          else {
            const count = articleN.split(nk).length - 1;
            if (count > 1) err.push(`Q${q.no} key 出现 ${count} 次，需加长为唯一片段`);
            if (!sents.some((s) => N(s).includes(nk))) err.push(`Q${q.no} key 跨句`);
          }
        }
      }
    });

    const expMarks = ex === 3 ? 7 : 6;
    if (marks !== expMarks) err.push(`总分应为 ${expMarks}，实际 ${marks}`);

    const V = p.vocab || [];
    if (V.length < 14) err.push(`词汇仅 ${V.length} 条（建议 16）`);
    V.forEach((v, i) => {
      const who = `词汇#${i + 1} ${v.w || '?'}`;
      for (const k of ['w', 'ipa', 'pos', 'lvl', 'def', 'cn', 'col', 'q']) if (!v[k]) err.push(`${who} 缺少 ${k}`);
      if (v.ipa && !/^\/.+\/$/.test(v.ipa)) err.push(`${who} IPA 格式应为 /.../：${v.ipa}`);
      if (v.lvl && !['B2', 'C1'].includes(v.lvl)) err.push(`${who} lvl 应为 B2/C1：${v.lvl}`);
      if (v.q && !articleN.includes(N(v.q))) err.push(`${who} 例句片段不在原文：${v.q}`);
    });

    const S = p.syntax || [];
    if (S.length < 5) err.push(`长难句仅 ${S.length} 条（建议 6）`);
    S.forEach((s, i) => {
      const who = `长难句#${i + 1}`;
      for (const k of ['q', 'main', 'cn', 'note']) if (!s[k]) err.push(`${who} 缺少 ${k}`);
      if (!Array.isArray(s.parts) || s.parts.length < 3) err.push(`${who} parts 少于 3 项`);
      if (s.q && !articleN.includes(N(s.q))) err.push(`${who} 引用片段不在原文`);
      if (!Array.isArray(s.tags) || !s.tags.length) err.push(`${who} 缺少 tags`);
    });

    if (err.length) {
      fail++;
      console.log(`✗ ${tag}`);
      err.slice(0, 14).forEach((e) => console.log('   - ' + e));
      if (err.length > 14) console.log(`   … 另有 ${err.length - 14} 项`);
    } else {
      total.pass++;
      total.q += qs.length;
      total.marks += marks;
      total.vocab += V.length;
      total.syntax += S.length;
      console.log(`✓ ${tag}　${qs.length} 题 / ${marks} 分 / ${V.length} 词 / ${S.length} 句`);
    }
  }
}

console.log('\n合计 ' + total.pass + ' 篇 / ' + total.q + ' 题 / ' + total.marks + ' 分 / ' +
  total.vocab + ' 词汇 / ' + total.syntax + ' 长难句 → ' + (fail ? `${fail} 处未通过` : '全部通过'));
process.exit(fail ? 1 : 0);
