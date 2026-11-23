# Hannah's Reading Workshop · Exercise 3 & Exercise 4

剑桥 IGCSE ESL **0511 Paper 1 Reading** 真题精讲（Exercise 3 Note-taking / Exercise 4 Multiple Choice）。
左栏原文可独立滚动，答案句按题目逐条上色高亮；右栏题目与试卷同序，配套 **B2–C1 词汇（IPA + 在线发音）** 与 **长难句拆解**。

线上地址：**https://cbydh7v78c-prog.github.io/hannahs-reading-workshop-ex34/**

## 内容

| 入口 | 题型 | 篇目 | 分值 | 页码 |
|---|---|---|---|---|
| `ex3/` | Note-taking（Q8/Q9 两条标题下写短笔记） | 10 | 70 | 49–67 |
| `ex4/` | Multiple Choice（Q10–Q15 三选一） | 9 | 54 | 69–93 |

另有两个姊妹站点：[Exercise 1](https://cbydh7v78c-prog.github.io/hannahs-reading-workshop/)（Note completion 11 篇 / 143 分）、[Exercise 2](https://cbydh7v78c-prog.github.io/hannahs-reading-workshop-ex2/)（Matching 13 篇 / 130 分）。

## 功能

- **原文分句渲染**：每句 `<span class="sent" data-sid>`，可逐句点击。
- **逐条证据高亮**：笔记题每条可接受答案各有独立颜色与徽标（`8a`、`8b`、`9a`…），同一句承载多个答案时用斜纹双色徽章。
- **双向联动**：点右侧题号 → 左侧对应句加深、其余压暗；点左侧高亮 → 右侧跳到那道题。
- **笔记题判分**：按"内容词命中率"近似匹配（阈值 0.6），并给出官方全部可接受答案；`marks` 封顶（如"任答 4 条"多写不加分）。
- **词汇面板**：IPA 音标 + 一键朗读（Web Speech API，`en-GB` 优先）+ 英文释义 + 中文 + 搭配 + 原文例句。
- **定位聚光**：点单词、点例句、点长难句的「定位原文」，都会在左栏用黄色 highlighter 把目标词/句标出来并滚动到位（`mark.spot` / `.sent.is-loc`）。

## 目录

```
index.html            总览页
ex3/index.html        Exercise 3 入口
ex4/index.html        Exercise 4 入口
assets/style.css      全站样式
assets/app.js         统一渲染器（note / mcq 两种题型）
data/ex3/p01..p10.js  10 篇笔记题数据
data/ex4/p01..p09.js  9 篇选择题数据
tools/check.mjs       数据校验
tools/source-ex3.txt  原文基准文本（Ex3）
tools/source-ex4.txt  原文基准文本（Ex4）
tools/deploy-api.mjs  GitHub Pages 一键发布
```

## 数据格式

```js
window.PASSAGES.push({
  id:'e3p01', no:1, page:49, paper:'0511/11/M/J/24', topic:'…',
  title:'…', standfirst:'…', intro:'…',
  paras:['段1','段2'],
  questions:[
    // 笔记题
    { no:'8', type:'note', marks:4, slots:4, heading:'…', example:'…',
      items:[{ t:'官方答案', alt:['同义说法'], key:'原文逐字证据片段' }], why:'…' },
    // 选择题
    { no:'10', type:'mcq', marks:1, stem:'…', opts:['A 文字','B 文字','C 文字'],
      ans:'B', key:'…', para:'…', why:'…', trap:'…' }
  ],
  vocab:[{ w, ipa, pos, lvl, def, cn, col, q }],
  syntax:[{ q, tags, main, parts:[{r,t}], cn, note }]
});
```

## 校验

```bash
node tools/check.mjs            # 全部
node tools/check.mjs 2 5 --ex3  # 指定区间
```

检查项：段落文字与试卷原文的 4-gram 覆盖率 ≥ 0.92（防改写/漏句）、题目数与总分、每条 `key` 唯一且在单句内、词汇 IPA 格式与例句可定位、长难句成分完整性。

## 发布

本机到 `github.com:443` 不通（直连超时、代理 CONNECT 502），因此不走 `git push`，改用 GitHub Git Data API 提交整棵树：

```bash
GH_TOKEN=ghp_xxx node tools/deploy-api.mjs
```

脚本会：建仓库（若不存在）→ 空库先用 Contents API 建初始提交 → 建 tree → commit → 更新 main → 开启 Pages（main / root）→ 轮询构建 → 验证首页与关键资源返回 200。

## 说明

- 笔记题为"任答 N 条"评分，站内判分为关键词近似匹配，仅作练习自查；官方可接受答案全部列在「可接受答案」区。
- `source-ex*.txt` 由试卷 PDF 文本层提取，含弯引号与 en dash，`paras` 必须与之一致。
