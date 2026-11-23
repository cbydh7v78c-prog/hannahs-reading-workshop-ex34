/* ============================================================
   Hannah's Reading Workshop · Exercise 3 (Note-taking) / 4 (Multiple Choice)
   1) 原文分句 + 逐条答案高亮   2) 笔记题/选择题渲染与判分
   3) 双向联动   4) B2–C1 词汇（IPA + 在线发音）   5) 点击定位原文
   ============================================================ */
(function () {
  'use strict';

  var EX = window.EX || { no: 3, label: 'Exercise 3 · Note-taking' };
  var PALETTE = [
    '#FFD666', '#7BD88F', '#6FB6F2', '#FF9BB0', '#C79BF0',
    '#FFB566', '#71D6C7', '#A8B6F5', '#D9C48A'
  ];
  var PASSAGES = (window.PASSAGES || []).slice().sort(function (a, b) { return a.no - b.no; });

  (function mergeExtra() {
    var ex = window.EXTRA || {};
    PASSAGES.forEach(function (p) {
      var e = ex[p.id];
      if (!e) return;
      if (e.vocab && e.vocab.length) p.vocab = (p.vocab || []).concat(e.vocab);
      if (e.syntax && e.syntax.length) p.syntax = (p.syntax || []).concat(e.syntax);
    });
  })();

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- 1. 工具 ---------- */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function hex2rgb(h) {
    h = String(h).replace('#', '');
    return [parseInt(h.substr(0, 2), 16), parseInt(h.substr(2, 2), 16), parseInt(h.substr(4, 2), 16)];
  }
  function rgba(h, a) { var c = hex2rgb(h); return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }
  function norm(s) {
    return String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"')
      .replace(/\s+/g, ' ').trim().toLowerCase();
  }
  function align(s) {
    return String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
  }

  /* ---------- 2. 分句 ---------- */
  var ABBR = /(?:\b(?:a\.m|p\.m|mr|mrs|ms|dr|prof|no|st|e\.g|i\.e|etc|vs|fig|[A-Z])\.)$/;

  function splitSentences(text) {
    var used = /[.!?][\u201D\u2019"']?\s+(?=[A-Z0-9\u201C\u2018"'(£])/g;
    var parts = [], last = 0, m;
    while ((m = used.exec(text)) !== null) {
      parts.push({ t: text.slice(last, m.index + m[0].trim().length) });
      last = m.index + m[0].length;
    }
    parts.push({ t: text.slice(last) });

    var merged = [];
    for (var k = 0; k < parts.length; k++) {
      var p = parts[k];
      if (merged.length && ABBR.test(merged[merged.length - 1].t.trim())) merged[merged.length - 1].t += ' ' + p.t;
      else merged.push({ t: p.t });
    }
    return merged.map(function (x) { return x.t.trim(); }).filter(function (t) { return t.length; });
  }

  /* ---------- 3. 索引与标记 ---------- */
  function buildIndex(p) {
    var sents = [];
    p.paras.forEach(function (txt, pi) {
      splitSentences(txt).forEach(function (t, si) {
        sents.push({
          sid: 'p' + pi + 's' + si,
          pi: pi + 1,
          no: si + 1,
          text: t,
          search: norm(t),
          marks: []
        });
      });
    });

    var ci = 0, bad = [];
    p.questions.forEach(function (q) {
      q._marks = [];
      q._c = PALETTE[ci % PALETTE.length];
      if (q.type === 'note') {
        (q.items || []).forEach(function (it, ii) {
          var color = PALETTE[ci++ % PALETTE.length];
          it._c = color;
          it._badge = q.no + 'abcdefgh'[ii];
          addMark(q, it.key, it._badge, color, it);
        });
      } else {
        ci++;
        addMark(q, q.key, q.no, q._c, q);
      }
    });

    function addMark(q, key, badge, color, owner) {
      var list = Array.isArray(key) ? key : (key ? [key] : []);
      var hit = null;
      for (var i = 0; i < list.length && !hit; i++) {
        var nk = norm(list[i]);
        for (var j = 0; j < sents.length; j++) {
          if (sents[j].search.indexOf(nk) >= 0) {
            hit = { sid: sents[j].sid, sent: sents[j].text, phrase: list[i], pi: sents[j].pi, no: sents[j].no };
            break;
          }
        }
        if (!hit) bad.push((q.no || '?') + ' → ' + list[i]);
      }
      if (!list.length) bad.push((q.no || '?') + ' → 缺少 key');
      if (hit) {
        var mk = { q: q.no, badge: badge, c: color, phrase: hit.phrase, sid: hit.sid, sent: hit.sent, pi: hit.pi, no: hit.no };
        q._marks.push(mk);
        var s = sents.filter(function (x) { return x.sid === hit.sid; })[0];
        if (s) s.marks.push(mk);
        if (!owner._hit) owner._hit = mk;
      }
    }

    p._sents = sents;
    p._bad = bad;

    function posOf(qq) {
      var nk = norm(qq || '');
      for (var i = 0; i < sents.length; i++) if (sents[i].search.indexOf(nk) >= 0) return i;
      return 9999;
    }
    if (p.vocab) p.vocab.sort(function (a, b) { return posOf(a.q) - posOf(b.q); });
    if (p.syntax) p.syntax.sort(function (a, b) { return posOf(a.q) - posOf(b.q); });
    return p;
  }

  /* ---------- 4. 渲染原文 ---------- */
  function renderArticle(p) {
    var byId = {};
    p._sents.forEach(function (s) { byId[s.sid] = s; });

    var html = '';
    p.paras.forEach(function (txt, pi) {
      var inner = splitSentences(txt).map(function (t, si) {
        var s = byId['p' + pi + 's' + si];
        if (!s) return esc(t);
        return '<span class="sent" data-sid="' + s.sid + '">' + decorate(s) + '</span>';
      }).join(' ');
      html += '<p class="para" data-p="' + (pi + 1) + '">' +
        '<span class="para-no">' + (pi + 1) + '</span>' + inner + '</p>';
    });
    $('#article').innerHTML = html;
  }

  function decorate(s) {
    if (!s.marks || !s.marks.length) return esc(s.text);

    var marks = [];
    s.marks.forEach(function (mk) {
      var hay = align(s.text).toLowerCase();
      var needle = align(mk.phrase).toLowerCase();
      var at = hay.indexOf(needle);
      if (at < 0) return;
      var dup = marks.filter(function (x) { return x.s === at && x.e === at + needle.length; })[0];
      if (dup) {
        if (dup.badges.indexOf(mk.badge) < 0) { dup.badges.push(mk.badge); dup.qs.push(mk.q); dup.cs.push(mk.c); }
        return;
      }
      marks.push({ s: at, e: at + needle.length, badges: [mk.badge], qs: [mk.q], cs: [mk.c] });
    });
    marks.sort(function (a, b) { return a.s - b.s || b.e - a.e; });

    var merged = [];
    marks.forEach(function (m) {
      var last = merged[merged.length - 1];
      if (last && m.s < last.e) {                 // 与已有区间重叠：把徽章并入更长者
        if (m.badges[0] && last.badges.indexOf(m.badges[0]) < 0) { last.badges.push(m.badges[0]); last.qs.push(m.qs[0]); last.cs.push(m.cs[0]); }
        return;
      }
      merged.push(m);
    });

    var out = '', cur = 0;
    merged.forEach(function (m) {
      out += esc(s.text.slice(cur, m.s));
      var cls = 'hl', style;
      if (m.cs.length > 1) {
        cls += ' multi';
        style = 'background:repeating-linear-gradient(45deg,' + rgba(m.cs[0], .42) + ' 0 6px,' +
          rgba(m.cs[1], .42) + ' 6px 12px);box-shadow:inset 0 -2px 0 ' + m.cs[0] + ';';
      } else {
        style = '--bgc:' + rgba(m.cs[0], .38) + ';--bgc-2:' + rgba(m.cs[0], .58) +
          ';--bgc-focus:' + rgba(m.cs[0], .72) + ';--line-c:' + m.cs[0] + ';';
      }
      out += '<span class="' + cls + '" data-q="' + m.qs.join(',') + '" data-no="' +
        esc(m.badges.join(' ')) + '" style="' + style + '">' + esc(s.text.slice(m.s, m.e)) + '</span>';
      cur = m.e;
    });
    out += esc(s.text.slice(cur));
    return out;
  }

  /* ---------- 5. 题目 ---------- */
  function renderQuestions(p) {
    return p.questions.map(function (q) {
      return q.type === 'note' ? renderNote(p, q) : renderMcq(p, q);
    }).join('') || '<div class="empty">暂无题目</div>';
  }

  function legendOf(q) {
    if (q.type === 'note') {
      return (q.items || []).map(function (it) {
        return '<span class="lg2" style="--c:' + it._c + '"><i></i>' + esc(it._badge) + '</span>';
      }).join('');
    }
    return '<span class="lg2" style="--c:' + q._c + '"><i></i>' + esc(String(q.no)) + '</span>';
  }

  function renderNote(p, q) {
    var slots = q.slots || q.marks;
    var rows = [];
    if (q.example) {
      rows.push('<div class="nrow is-eg"><span class="nidx">例</span><span class="neg">' + esc(q.example) + '</span></div>');
    }
    for (var i = 0; i < slots; i++) {
      rows.push('<div class="nrow" data-i="' + i + '">' +
        '<span class="nidx">' + (q.example ? (i + 2) : (i + 1)) + '</span>' +
        '<input class="nin" type="text" autocomplete="off" spellcheck="false" placeholder="用原文词语写一条笔记…">' +
        '<span class="nmark"></span></div>');
    }
    var chips = (q.items || []).map(function (it, i) {
      return '<span class="achip" data-i="' + i + '"><b style="background:' + it._c + '">' + esc(it._badge) + '</b>' + esc(it.t) + (it.alt && it.alt.length ? '<i>或 ' + esc(it.alt.join(' / ')) + '</i>' : '') + '</span>';
    }).join('');

    return '' +
      '<div class="qcard note" data-q="' + q.no + '" style="--c:' + q._c + '">' +
        '<div class="qhead" tabindex="0" role="button" aria-label="定位 Question ' + q.no + '">' +
          '<span class="qno">Q' + esc(String(q.no)) + '</span>' +
          '<div class="qstem">' + esc(q.heading) + '<span class="qmarks">' + q.marks + ' 分 · ' + slots + ' 条</span></div>' +
        '</div>' +
        '<div class="qloc">' + legendOf(q) + '<span class="qhint">点击题号 → 左侧对应句亮起</span></div>' +
        '<div class="notes">' + rows.join('') + '</div>' +
        '<div class="answer">' +
          '<button class="checkbtn" data-act="check">对答案</button>' +
          '<button class="checkbtn reveal" data-act="reveal">显示答案</button>' +
        '</div>' +
        '<div class="keyline"></div>' +
        '<div class="detail">' +
          '<div class="drow"><div class="dlabel">可接受答案</div><div class="dtext"><div class="chips">' + chips + '</div></div></div>' +
          '<div class="drow"><div class="dlabel">怎么找</div><div class="dtext">' + esc(q.why || '—') + '</div></div>' +
        '</div>' +
      '</div>';
  }

  function renderMcq(p, q) {
    var opts = (q.opts || []).map(function (t, i) {
      return { k: 'ABC'[i], t: t };
    });
    var hit = q._hit;
    return '' +
      '<div class="qcard mcq" data-q="' + q.no + '" style="--c:' + q._c + '">' +
        '<div class="qhead" tabindex="0" role="button" aria-label="查看 Question ' + q.no + ' 解析">' +
          '<span class="qno">' + esc(String(q.no)) + '</span>' +
          '<div class="qstem">' + esc(q.stem) + '<span class="qmarks">1 分</span></div>' +
        '</div>' +
        '<div class="qloc">' + legendOf(q) + '<span class="qhint">' +
          (hit ? '答案句 · 第 ' + hit.pi + ' 段第 ' + hit.no + ' 句' : '未定位') + '</span></div>' +
        '<div class="opts">' + opts.map(function (o) {
          return '<button class="opt" data-pick="' + o.k + '"><b>' + o.k + '</b><span>' + esc(o.t) + '</span></button>';
        }).join('') + '</div>' +
        '<div class="answer">' +
          '<button class="checkbtn" data-act="check">对答案</button>' +
          '<button class="checkbtn reveal" data-act="reveal">解析</button>' +
        '</div>' +
        '<div class="keyline"></div>' +
        '<div class="detail">' +
          '<div class="drow"><div class="dlabel">定位</div><div class="dtext"><span class="quote">' +
            esc(hit ? hit.sent : '（未找到答案句）') + '</span>' +
            (hit ? '<button class="jump" data-jump="' + q.no + '">跳到原文</button>' : '') + '</div></div>' +
          '<div class="drow"><div class="dlabel">同义替换</div><div class="dtext">' + esc(q.para || '—') + '</div></div>' +
          '<div class="drow"><div class="dlabel">为什么</div><div class="dtext">' + esc(q.why || '—') + '</div></div>' +
          '<div class="drow"><div class="dlabel">陷阱</div><div class="dtext">' + esc(q.trap || '—') + '</div></div>' +
        '</div>' +
      '</div>';
  }

  /* ---------- 6. 词汇 / 长难句 ---------- */
  var VOICE = null;
  function pickVoice() {
    if (VOICE !== null) return VOICE;
    var vs = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    VOICE = vs.filter(function (v) { return /en[-_]GB/i.test(v.lang); })[0] ||
      vs.filter(function (v) { return /^en/i.test(v.lang); })[0] || null;
    return VOICE;
  }
  if (window.speechSynthesis) {
    try { window.speechSynthesis.onvoiceschanged = function () { VOICE = null; pickVoice(); }; } catch (e) { }
  }

  function say(word) {
    if (!window.speechSynthesis) { toast('当前浏览器不支持朗读，可点词条查看词典'); return; }
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(word);
      var v = pickVoice();
      if (v) u.voice = v;
      u.lang = (v && v.lang) || 'en-GB';
      u.rate = 0.92;
      u.pitch = 1;
      window.speechSynthesis.speak(u);
    } catch (e) { toast('朗读失败：' + e.message); }
  }

  var ICON_SAY = '<svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">' +
    '<path d="M4 9.5h3.2L12 5.4v13.2L7.2 14.5H4z" fill="currentColor"/>' +
    '<path d="M15.4 8.6a4.6 4.6 0 0 1 0 6.8" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round"/>' +
    '<path d="M17.9 6.2a8 8 0 0 1 0 11.6" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round"/>' +
    '</svg>';

  function renderVocab(p) {
    if (!p.vocab || !p.vocab.length) return '<div class="empty">本篇暂无词汇条目</div>';
    return p.vocab.map(function (v, i) {
      var s = p._sents.filter(function (x) { return x.search.indexOf(norm(v.q)) >= 0; })[0];
      var sent = s ? s.text : v.q;
      var hl = esc(sent);
      var at = norm(sent).indexOf(norm(v.q));
      if (at >= 0) {
        hl = esc(sent.slice(0, at)) + '<mark>' + esc(sent.slice(at, at + v.q.length)) + '</mark>' +
          esc(sent.slice(at + v.q.length));
      }
      return '<div class="vitem" data-v="' + i + '">' +
        '<span class="lv ' + v.lvl + '">' + v.lvl + '</span>' +
        '<div class="vbody">' +
          '<div class="vhead">' +
            '<button class="vword" data-spot="' + esc(v.q) + '" title="在原文定位这个词">' + esc(v.w) + '</button>' +
            (v.ipa ? '<span class="ipa">' + esc(v.ipa) + '</span>' : '') +
            '<button class="say" data-say="' + esc(v.w) + '" title="朗读（浏览器语音）" aria-label="朗读 ' + esc(v.w) + '">' + ICON_SAY + '</button>' +
            '<span class="vpos">' + esc(v.pos || '') + '</span>' +
          '</div>' +
          (v.def ? '<div class="vdef">' + esc(v.def) + '</div>' : '') +
          '<div class="vcn">' + esc(v.cn) + '</div>' +
          (v.col ? '<div class="vcol">搭配　' + esc(v.col) + '</div>' : '') +
          '<div class="vsent" data-spot-sent="' + esc(v.q) + '" title="点击 → 在原文高亮这句">' + hl + '</div>' +
        '</div></div>';
    }).join('');
  }

  function renderSyntax(p) {
    if (!p.syntax || !p.syntax.length) return '<div class="empty">本篇暂无长难句条目</div>';
    return p.syntax.map(function (sx) {
      var s = p._sents.filter(function (x) { return x.search.indexOf(norm(sx.q)) >= 0; })[0];
      var en = s ? s.text : sx.q;
      var at = norm(en).indexOf(norm(sx.q));
      var marked = at >= 0
        ? esc(en.slice(0, at)) + '<b>' + esc(en.slice(at, at + sx.q.length)) + '</b>' + esc(en.slice(at + sx.q.length))
        : esc(en);
      return '<div class="sx" data-q2="' + esc(sx.q) + '">' +
        '<div class="sx-top">' +
          '<div class="sx-tags">' + (sx.tags || []).map(function (t) { return '<span class="sx-tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
          '<button class="sx-jump" data-spot="' + esc(sx.q) + '">定位原文 ↗</button>' +
        '</div>' +
        '<div class="sx-en">' + marked + '</div>' +
        (sx.main ? '<div class="sx-main"><span>主干</span>' + esc(sx.main) + '</div>' : '') +
        '<ul class="sx-parts">' + (sx.parts || []).map(function (p2) {
          return '<li><span class="r">' + esc(p2.r) + '</span><span>' + esc(p2.t) + '</span></li>';
        }).join('') + '</ul>' +
        '<div class="sx-cn">' + esc(sx.cn) + '</div>' +
        (sx.note ? '<div class="sx-note"><span>考点</span>' + esc(sx.note) + '</div>' : '') +
      '</div>';
    }).join('');
  }

  /* ---------- 7. 笔记题判分 ---------- */
  var STOP = ('a an the of to in on for with and or is are was were be been being that this these those it its ' +
    'as at by from you your yours we our they their his her him i me my mine not no if but so than then there ' +
    'here can could will would shall should may might must have has had do does did done more most much many ' +
    'some any all also just only very too both each other another such own same up down out off over under ' +
    'about into onto while when where which who whom what how why because before after during between through ' +
    'again further once here s t don now').split(' ');

  function stem(w) {
    return w.length > 4 ? w.replace(/(ing|ed|es|s)$/, '') : w;
  }
  function keywords(t) {
    return norm(t).replace(/[^a-z0-9\s']/g, ' ').split(/\s+/)
      .filter(function (w) { return w && STOP.indexOf(w) < 0; })
      .map(stem);
  }
  function scoreAnswer(input, it) {
    var alts = [it.t].concat(it.alt || []);
    var best = 0;
    alts.forEach(function (a) {
      var kw = keywords(a);
      if (!kw.length) return;
      var hit = kw.filter(function (w) { return input.indexOf(w) >= 0; }).length;
      best = Math.max(best, hit / kw.length);
    });
    return best;
  }
  function judgeNote(q, values) {
    var used = {}, out = [];
    values.forEach(function (v) {
      var nv = norm(v).replace(/[^a-z0-9\s']/g, ' ').replace(/\s+/g, ' ').trim();
      if (!nv) { out.push({ ok: false, empty: true }); return; }
      var best = -1, bestScore = 0;
      (q.items || []).forEach(function (it, i) {
        if (used[i]) return;
        var sc = scoreAnswer(nv, it);
        if (sc > bestScore) { bestScore = sc; best = i; }
      });
      if (best >= 0 && bestScore >= 0.6) { used[best] = 1; out.push({ ok: true, item: best, score: bestScore }); }
      else out.push({ ok: false, score: bestScore });
    });
    return out;
  }

  /* ---------- 8. 状态 ---------- */
  var state = { idx: 0, tab: 'q', focus: null, noHl: false, store: {} };
  function cur() { return PASSAGES[state.idx]; }
  function ensure(p) { if (!p._built) { buildIndex(p); p._built = true; } return p; }

  function renderAll() {
    var p = ensure(cur());
    var answers = state.store[p.id] || (state.store[p.id] = {});

    $('#metaPaper').textContent = p.paper;
    $('#metaTopic').textContent = p.topic;
    var marks = p.questions.reduce(function (a, q) { return a + (q.marks || 0); }, 0);
    $('#metaMarks').textContent = marks + ' 分 · ' + p.questions.length + ' 大题';
    $('#aTitle').textContent = p.title;
    $('#aIntro').textContent = p.intro || '';
    $('#aStand').textContent = p.standfirst || '';
    $('#aStand').style.display = p.standfirst ? '' : 'none';

    $('#legend').innerHTML = p.questions.map(function (q) {
      if (q.type === 'note') {
        return (q.items || []).map(function (it) {
          return '<button class="lg" data-jump-q="' + q.no + '"><i style="background:' + it._c + '"></i>' + esc(it._badge) + '</button>';
        }).join('');
      }
      return '<button class="lg" data-jump-q="' + q.no + '"><i style="background:' + q._c + '"></i>' + esc(String(q.no)) + '</button>';
    }).join('');

    renderArticle(p);
    $('#cQ').textContent = p.questions.length;
    $('#cV').textContent = (p.vocab || []).length;
    $('#cS').textContent = (p.syntax || []).length;

    renderTab();
    syncScore();

    Object.keys(answers).forEach(function (qno) {
      var card = $('.qcard[data-q="' + qno + '"]');
      if (!card) return;
      var q = p.questions.filter(function (x) { return x.no === qno; })[0];
      var a = answers[qno];
      if (!q || !a) return;
      if (q.type === 'note') {
        $$('.nin', card).forEach(function (inp, i) { if (a.values && a.values[i] != null) inp.value = a.values[i]; });
        if (a.res) drawNoteResult(card, q, a.res);
      } else {
        $$('.opt', card).forEach(function (b) { b.classList.toggle('is-pick', b.dataset.pick === a.pick); });
        drawMcqResult(card, q, a.res, a.pick);
      }
    });

    state.focus = null;
    $('#aScroll').classList.remove('is-focus');
    $('#aScroll').scrollTop = 0;
    $('#bScroll').scrollTop = 0;
  }

  function renderTab() {
    var p = cur();
    $$('.tab').forEach(function (t) { t.classList.toggle('is-on', t.dataset.tab === state.tab); });
    var box = $('#tabbody');
    box.innerHTML = state.tab === 'q' ? renderQuestions(p)
      : state.tab === 'v' ? renderVocab(p)
        : renderSyntax(p);
  }

  /* ---------- 9. 判分展示 ---------- */
  function syncScore() {
    var p = cur(), answers = state.store[p.id] || {};
    var got = 0, total = 0;
    p.questions.forEach(function (q) {
      total += q.marks || 0;
      var a = answers[q.no];
      if (!a || !a.res) return;
      got += a.res.got || 0;
    });
    $('#scoreChip').textContent = got + ' / ' + total;
  }

  function drawNoteResult(card, q, res) {
    var kl = card.querySelector('.keyline');
    var rows = $$('.nrow', card).filter(function (r) { return !r.classList.contains('is-eg'); });
    rows.forEach(function (r, i) {
      var rr = res.rows[i] || {};
      var inp = r.querySelector('.nin'), nm = r.querySelector('.nmark');
      inp.classList.toggle('ok', !!rr.ok);
      inp.classList.toggle('no', !rr.ok && !rr.empty);
      nm.textContent = rr.ok ? '✓' : (rr.empty ? '' : '✗');
      nm.className = 'nmark' + (rr.ok ? ' ok' : (rr.empty ? '' : ' no'));
    });
    // 可接受答案 chip 标注命中
    $$('.achip', card).forEach(function (ch) {
      var i = +ch.dataset.i;
      var hit = res.rows.some(function (r) { return r.ok && r.item === i; });
      ch.classList.toggle('hit', hit);
    });
    var good = res.rows.filter(function (r) { return r.ok; }).length;
    kl.className = 'keyline ' + (res.reveal ? '' : (good ? 'good' : 'bad'));
    if (res.reveal) {
      kl.innerHTML = '<span class="tag">参考答案</span>共 ' + (q.items || []).length + ' 条可接受答案，任答 ' + q.marks + ' 条即可满分。';
    } else {
      kl.innerHTML = '<span class="tag">' + (good ? '✓ 命中 ' + Math.min(good, q.marks) + ' 条' : '✗ 再想想') + '</span>' +
        '得分 <span class="ans">' + Math.min(good, q.marks) + ' / ' + q.marks + '</span>' +
        (good > q.marks ? '（多写的正确项不计分）' : '');
    }
  }

  function drawMcqResult(card, q, res, pick) {
    var kl = card.querySelector('.keyline');
    if (!res) { kl.className = 'keyline'; kl.innerHTML = ''; return; }
    var head;
    if (res.reveal) head = '<span class="tag">参考答案</span><span class="ans">' + esc(String(q.ans)) + '</span>';
    else if (res.ok) head = '<span class="tag">✓ 正确</span>参考答案：<span class="ans">' + esc(String(q.ans)) + '</span>';
    else head = '<span class="tag">✗ 再想想</span>你选了 ' + esc(pick || '—') + '，参考答案：<span class="ans">' + esc(String(q.ans)) + '</span>';
    kl.className = 'keyline ' + (res.ok && !res.reveal ? 'good' : (res.reveal ? '' : 'bad'));
    kl.innerHTML = head;
  }

  /* ---------- 10. 联动与定位 ---------- */
  function scrollIn(container, el, ratio) {
    if (!container || !el) return;
    var c = container.getBoundingClientRect();
    var e = el.getBoundingClientRect();
    var top = container.scrollTop + (e.top - c.top) - container.clientHeight * (ratio == null ? 0.32 : ratio);
    container.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }

  function focusQ(qno, scrollArticle) {
    var p = cur();
    var q = p.questions.filter(function (x) { return x.no === qno; })[0];
    if (!q) return;
    if (state.focus === qno) { clearFocus(); return; }
    state.focus = qno;

    $('#aScroll').classList.add('is-focus');
    $$('.hl', $('#article')).forEach(function (el) {
      el.classList.toggle('on', (el.dataset.q || '').split(',').indexOf(qno) >= 0);
    });
    $$('.qcard').forEach(function (c) { c.classList.toggle('is-active', c.dataset.q === qno); });
    $$('.lg').forEach(function (l) { l.classList.toggle('is-on', l.dataset.jumpQ === qno); });

    if (scrollArticle !== false) {
      var first = $('.hl[data-q~="' + qno + '"]', $('#article'));
      if (first) {
        scrollIn($('#aScroll'), first, 0.3);
        first.classList.add('flash');
        setTimeout(function () { first.classList.remove('flash'); }, 1200);
      }
      var card = $('.qcard[data-q="' + qno + '"]');
      if (card && state.tab === 'q') scrollIn($('#bScroll'), card, 0.04);
    }
  }

  function clearFocus() {
    state.focus = null;
    $('#aScroll').classList.remove('is-focus');
    $$('.hl', $('#article')).forEach(function (el) { el.classList.remove('on'); });
    $$('.qcard').forEach(function (c) { c.classList.remove('is-active'); });
    $$('.lg').forEach(function (l) { l.classList.remove('is-on'); });
  }

  /* ---- 局部聚光：把短语/整句用 highlighter 标出来 ---- */
  var spotMarks = [], spotTimer = null;

  function clearSpot() {
    spotMarks.forEach(function (mk) {
      var parent = mk.parentNode;
      if (!parent) return;
      while (mk.firstChild) parent.insertBefore(mk.firstChild, mk);
      parent.removeChild(mk);
      parent.normalize();
    });
    spotMarks = [];
    $$('.sent.is-loc', $('#article')).forEach(function (el) { el.classList.remove('is-loc'); });
    if (spotTimer) { clearTimeout(spotTimer); spotTimer = null; }
  }

  function spotPhrase(fragment) {
    var root = $('#article');
    var needle = norm(fragment);
    if (!needle) return false;

    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);

    var full = '', map = [];
    nodes.forEach(function (node) {
      map.push({ node: node, start: full.length });
      full += node.nodeValue;
    });
    var low = align(full).toLowerCase();
    var idx = low.indexOf(needle);
    if (idx < 0) return false;
    var end = idx + needle.length;

    var segs = [];
    map.forEach(function (m, i) {
      var s0 = m.start;
      var e0 = (i + 1 < map.length) ? map[i + 1].start : full.length;
      if (e0 <= idx || s0 >= end) return;
      segs.push({ node: m.node, a: Math.max(idx, s0) - s0, b: Math.min(end, e0) - s0 });
    });

    segs.forEach(function (sg) {
      var node = sg.node, a = sg.a, b = sg.b;
      if (a > 0) { node = node.splitText(a); b -= a; }
      if (b < node.nodeValue.length) node.splitText(b);
      var mk = document.createElement('mark');
      mk.className = 'spot';
      node.parentNode.insertBefore(mk, node);
      mk.appendChild(node);
      spotMarks.push(mk);
    });
    if (!spotMarks.length) return false;

    var host = spotMarks[0].closest('.sent');
    if (host) host.classList.add('is-loc');
    scrollIn($('#aScroll'), spotMarks[0], 0.34);
    spotTimer = setTimeout(clearSpot, 4200);
    return true;
  }

  function toast(msg) {
    var t = $('#toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('on');
    setTimeout(function () { t.classList.remove('on'); }, 1800);
  }

  /* ---------- 11. 事件 ---------- */
  var sel = $('#pSelect');
  sel.innerHTML = PASSAGES.map(function (p, i) {
    return '<option value="' + i + '">' + p.no + '. ' + esc(p.title) + '　·　' + esc(p.topic) + '　·　p.' + p.page + '</option>';
  }).join('');
  sel.addEventListener('change', function () { state.idx = +sel.value; clearSpot(); renderAll(); });
  $('#prevP').addEventListener('click', function () {
    state.idx = (state.idx - 1 + PASSAGES.length) % PASSAGES.length;
    sel.value = state.idx; clearSpot(); renderAll();
  });
  $('#nextP').addEventListener('click', function () {
    state.idx = (state.idx + 1) % PASSAGES.length;
    sel.value = state.idx; clearSpot(); renderAll();
  });

  $('#btnToggle').addEventListener('click', function () {
    state.noHl = !state.noHl;
    $('#aScroll').classList.toggle('no-hl', state.noHl);
    this.textContent = state.noHl ? '显示高亮' : '隐藏高亮';
    this.classList.toggle('is-off', state.noHl);
  });

  $('#btnReset').addEventListener('click', function () {
    delete state.store[cur().id];
    clearSpot();
    renderAll();
  });

  $('#tabs').addEventListener('click', function (e) {
    var b = e.target.closest('.tab'); if (!b) return;
    state.tab = b.dataset.tab;
    renderTab();
    $('#bScroll').scrollTop = 0;
    if (state.tab !== 'q') { state.focus = null; clearFocus(); }
  });

  $('#article').addEventListener('click', function (e) {
    var el = e.target.closest('.hl');
    if (el) {
      var qs = (el.dataset.q || '').split(',');
      var qno = qs[0];
      if (state.tab !== 'q') { state.tab = 'q'; renderTab(); }
      var card = $('.qcard[data-q="' + qno + '"]');
      if (card) scrollIn($('#bScroll'), card, 0.04);
      if (state.focus !== qno) focusQ(qno, false);
      return;
    }
    var s = e.target.closest('.sent');
    if (s) {
      $$('.sent.is-loc', $('#article')).forEach(function (x) { x.classList.remove('is-loc'); });
      s.classList.add('is-loc');
      spotTimer = setTimeout(clearSpot, 2200);
    }
  });

  $('#legend').addEventListener('click', function (e) {
    var b = e.target.closest('.lg'); if (!b) return;
    if (state.tab !== 'q') { state.tab = 'q'; renderTab(); }
    if (state.focus === b.dataset.jumpQ) clearFocus();
    else focusQ(b.dataset.jumpQ, true);
  });

  $('#tabbody').addEventListener('click', function (e) {
    // 发音
    var sayBtn = e.target.closest('[data-say]');
    if (sayBtn) { e.stopPropagation(); say(sayBtn.dataset.say); return; }

    // 定位原文
    var spotBtn = e.target.closest('[data-spot]');
    if (spotBtn) {
      var ok = spotPhrase(spotBtn.dataset.spot);
      if (!ok) toast('原文中未找到可定位的片段');
      return;
    }
    var sentEl = e.target.closest('[data-spot-sent]');
    if (sentEl) {
      var ok2 = spotPhrase(sentEl.dataset.spotSent);
      if (!ok2) toast('原文中未找到这句');
      return;
    }

    var card = e.target.closest('.qcard');
    if (!card) return;
    var p = cur();
    var q = p.questions.filter(function (x) { return x.no === card.dataset.q; })[0];
    if (!q) return;
    var store = state.store[p.id] || (state.store[p.id] = {});

    if (q.type === 'note') {
      if (e.target.dataset.act === 'check' || e.target.dataset.act === 'reveal') {
        var inputs = $$('.nin', card);
        var values = inputs.map(function (i2) { return i2.value; });
        var isReveal = e.target.dataset.act === 'reveal';
        var rows, got;
        if (isReveal) {
          values = inputs.map(function (v, i3) { return (q.items[i3] || {}).t || ''; });
          inputs.forEach(function (inp, i4) { inp.value = values[i4]; });
          rows = judgeNote(q, values);
          got = 0;
        } else {
          rows = judgeNote(q, values);
          got = Math.min(rows.filter(function (r) { return r.ok; }).length, q.marks);
        }
        var res = { rows: rows, got: got, reveal: isReveal };
        store[q.no] = { values: values, res: res };
        drawNoteResult(card, q, res);
        syncScore();
        if (state.focus !== q.no) focusQ(q.no, true);
      }
      if (e.target.closest('.qhead')) focusQ(q.no, true);
      return;
    }

    var pickBtn = e.target.closest('[data-pick]');
    if (pickBtn) {
      var v = pickBtn.dataset.pick;
      $$('.opt', card).forEach(function (b) { b.classList.toggle('is-pick', b === pickBtn); });
      store[q.no] = { pick: v, res: (store[q.no] || {}).res || null };
      return;
    }

    var act = e.target.dataset.act;
    if (act === 'check') {
      var picked = (store[q.no] || {}).pick;
      if (!picked) {
        var kl = card.querySelector('.keyline');
        kl.className = 'keyline bad';
        kl.innerHTML = '<span class="tag">请先选 A / B / C</span>';
        return;
      }
      var r2 = { ok: picked === q.ans, got: picked === q.ans ? 1 : 0 };
      store[q.no] = { pick: picked, res: r2 };
      drawMcqResult(card, q, r2, picked);
      syncScore();
      if (state.focus !== q.no) focusQ(q.no, true);
      return;
    }
    if (act === 'reveal') {
      var r3 = { reveal: true, ok: false, got: 0 };
      store[q.no] = { pick: (store[q.no] || {}).pick || null, res: r3 };
      drawMcqResult(card, q, r3);
      if (state.focus !== q.no) focusQ(q.no, true);
      return;
    }
    if (e.target.closest('[data-jump]')) { focusQ(card.dataset.q, true); return; }
    if (e.target.closest('.qhead')) focusQ(card.dataset.q, true);
  });

  $('#tabbody').addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    var inp = e.target.closest('.nin');
    if (inp) { e.preventDefault(); inp.blur(); return; }
    var head = e.target.closest('.qhead');
    if (head) { e.preventDefault(); focusQ(head.closest('.qcard').dataset.q, true); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { clearFocus(); clearSpot(); }
  });

  $('#fabQ').addEventListener('click', function () {
    $('.pane-b').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* ---------- 12. 启动 ---------- */
  if (!PASSAGES.length) {
    $('#article').innerHTML = '<div class="empty">数据未加载</div>';
  } else {
    renderAll();
  }

  window.__RW = {
    PASSAGES: PASSAGES, buildIndex: buildIndex, splitSentences: splitSentences,
    state: state, spot: spotPhrase, judgeNote: judgeNote, say: say, EX: EX
  };
})();
