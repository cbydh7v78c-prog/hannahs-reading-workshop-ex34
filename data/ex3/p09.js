/* Exercise 3 · Note-taking · 09 Let’s play a musical instrument! (0511/13/M/J/25, p.65) */
window.PASSAGES = window.PASSAGES || [];
window.PASSAGES.push({
  id: 'e3p09',
  no: 9,
  page: 65,
  paper: '0511/13/M/J/25',
  topic: 'Lifestyle / Music',
  title: 'Let’s play a musical instrument!',
  intro: 'Read the article by a music teacher about learning to play a musical instrument, and then complete the notes.',
  paras: [
    'Are you a young person who’s thinking of taking up a new hobby? If so, there are many options available and the one that I’d like to discuss today is playing a musical instrument.',
    'The most popular instruments are the guitar, keyboards and drums, but you may not want to play any of these instruments, and that is fine. It’s generally wise to choose an instrument that you love, as no one wants to spend time doing something that they find boring. Some people ask which instrument is the easiest to learn, but although some could be easier to learn than others, it depends on the person, so it’s difficult for me to give you any recommendations about this.',
    'If possible, try out a few instruments before you make your final decision about what to take up. For some of you, it might be a straightforward choice – perhaps because you’re influenced by a musician you admire. For others, it could take some time to make up your mind. Once you do make a choice and get started, you could discover that you feel relaxed. That was certainly the case for me when I began playing the piano.',
    'Teenagers have different reasons for taking up this hobby. Some think it adds a creative element to their academic record, for example. Creative subjects or activities can require a considerable amount of time, and learning to play an instrument is no different. But if you want to make quick progress, you should practise every day. Some people may think that this adds to an already busy schedule with school and part-time jobs. If you want to play, though, you’ll manage to fit it in.',
    'Some musicians are self-taught and others have learned from having formal lessons. I’d say that it’s always desirable to learn from someone who already plays well. Lessons can be expensive but that’s not always the case. However you choose to learn, when you successfully play something well for the first time, you will get a wonderful sense of achievement, and this will make all your hard work worthwhile.',
    'Scientists have carried out a lot of research which has found a connection between playing an instrument and an improvement in memory, which I’m sure many of you would find really useful! Of course, there’s no guarantee that this will actually happen, so it shouldn’t be the only reason for anyone to take up this hobby. However, teachers like myself often notice that once students do so, they find that it’s easier to learn maths.',
    'Now that you have read about some of the possible benefits of playing a musical instrument, you can decide whether it’s the right hobby for you!'
  ],
  questions: [
    {
      no: '8',
      type: 'note',
      marks: 4,
      slots: 4,
      heading: 'Benefits of playing a musical instrument:',
      items: [
        { t: 'you feel relaxed', alt: ['feeling relaxed'], key: 'you could discover that you feel relaxed' },
        { t: 'adds a creative element to their academic record', alt: ['creative element on the academic record'], key: 'adds a creative element to their academic record' },
        { t: 'get a wonderful sense of achievement', alt: ['a wonderful sense of achievement'], key: 'you will get a wonderful sense of achievement' },
        { t: 'an improvement in memory', alt: ['better memory'], key: 'an improvement in memory' },
        { t: 'easier to learn maths', alt: ['helps you learn maths more easily'], key: 'it’s easier to learn maths' }
      ],
      why: '题干问 benefits（好处），要按顺序扫段落：第 3 段 Once you do make a choice … you feel relaxed；第 4 段 Some think it adds a creative element to their academic record；第 5 段 when you successfully play something well … get a wonderful sense of achievement；第 6 段 an improvement in memory，同段末尾 it’s easier to learn maths。干扰项：第 5 段 Lessons can be expensive 是"成本"，属不利因素；第 6 段 there’s no guarantee 是作者的保留态度，不是好处；第 2、4 段的 practise every day、try out a few instruments 属于"建议"，应归到 Q9。'
    },
    {
      no: '9',
      type: 'note',
      marks: 3,
      slots: 3,
      heading: 'Advice for how to start learning a musical instrument:',
      items: [
        { t: 'choose an instrument that you love', alt: ['pick one you love'], key: 'choose an instrument that you love' },
        { t: 'try out a few instruments', alt: ['try several instruments first'], key: 'try out a few instruments' },
        { t: 'practise every day', alt: ['practise daily'], key: 'you should practise every day' },
        { t: 'learn from someone who already plays well', alt: ['learn from a good player'], key: 'learn from someone who already plays well' }
      ],
      why: '题干是 Advice（给初学者的建议），要抓作者用 it’s wise to / you should / it’s desirable to / if possible 这类"建议语气"的句子。第 2 段 It’s generally wise to choose an instrument that you love；第 3 段开头 If possible, try out a few instruments；第 4 段 if you want to make quick progress, you should practise every day；第 5 段 it’s always desirable to learn from someone who already plays well。注意第 2 段"哪个乐器最容易学"作者明确说不给 recommendation，所以不能写 the easiest instrument；第 5 段 formal lessons 只是提到的一种方式，作者说 lessons 不一定贵，重点在"跟弹得好的人学"。'
    }
  ],
  vocab: [
    { w: 'take up', ipa: '/teɪk ʌp/', pos: 'phr. v.', lvl: 'B2', def: 'to start doing a hobby or activity', cn: '开始从事，培养（爱好）', col: 'take up a hobby · take up the piano', q: 'thinking of taking up a new hobby' },
    { w: 'instrument', ipa: '/ˈɪnstrəmənt/', pos: 'n.', lvl: 'B2', def: 'an object used for making music', cn: '乐器；仪器', col: 'a musical instrument · play an instrument', q: 'playing a musical instrument' },
    { w: 'recommendation', ipa: '/ˌrekəmenˈdeɪʃn/', pos: 'n.', lvl: 'B2', def: 'advice about what you should do', cn: '建议，推荐', col: 'give a recommendation · make a recommendation', q: 'give you any recommendations' },
    { w: 'straightforward', ipa: '/ˌstreɪtˈfɔːwəd/', pos: 'adj.', lvl: 'B2', def: 'simple and easy to understand or do', cn: '简单明了的', col: 'a straightforward choice · fairly straightforward', q: 'it might be a straightforward choice' },
    { w: 'admire', ipa: '/ədˈmaɪə/', pos: 'v.', lvl: 'B2', def: 'to respect and like someone or something', cn: '钦佩，欣赏', col: 'admire sb for sth · a musician you admire', q: 'a musician you admire' },
    { w: 'make up your mind', ipa: '/meɪk ʌp jɔː maɪnd/', pos: 'idiom', lvl: 'B2', def: 'to decide something', cn: '下定决心，做出决定', col: 'take time to make up your mind · change your mind', q: 'it could take some time to make up your mind' },
    { w: 'creative', ipa: '/kriˈeɪtɪv/', pos: 'adj.', lvl: 'B2', def: 'involving imagination and original ideas', cn: '有创造性的', col: 'a creative element · creative work', q: 'adds a creative element' },
    { w: 'academic', ipa: '/ˌækəˈdemɪk/', pos: 'adj.', lvl: 'B2', def: 'connected with studying and schools or universities', cn: '学业的，学术的', col: 'academic record · academic performance', q: 'their academic record' },
    { w: 'considerable', ipa: '/kənˈsɪdərəbl/', pos: 'adj.', lvl: 'B2', def: 'large in amount or degree', cn: '相当大的，可观的', col: 'a considerable amount of · considerable time', q: 'a considerable amount of time' },
    { w: 'progress', ipa: '/ˈprəʊɡres/', pos: 'n.', lvl: 'B2', def: 'improvement or development over time', cn: '进步，进展', col: 'make progress · steady progress', q: 'make quick progress' },
    { w: 'schedule', ipa: '/ˈʃedjuːl/', pos: 'n.', lvl: 'B2', def: 'a plan of things to be done and the times for them', cn: '日程安排', col: 'a busy schedule · add to your schedule', q: 'an already busy schedule' },
    { w: 'self-taught', ipa: '/ˌself ˈtɔːt/', pos: 'adj.', lvl: 'C1', def: 'having learned something without a teacher', cn: '自学成才的', col: 'a self-taught musician · be self-taught', q: 'Some musicians are self-taught' },
    { w: 'desirable', ipa: '/dɪˈzaɪərəbl/', pos: 'adj.', lvl: 'C1', def: 'worth having or doing; advisable', cn: '值得的，可取的', col: 'it is desirable to do · highly desirable', q: 'it’s always desirable' },
    { w: 'achievement', ipa: '/əˈtʃiːvmənt/', pos: 'n.', lvl: 'B2', def: 'something good that you succeed in doing', cn: '成就，成绩', col: 'a sense of achievement · a great achievement', q: 'a wonderful sense of achievement' },
    { w: 'worthwhile', ipa: '/ˌwɜːθˈwaɪl/', pos: 'adj.', lvl: 'B2', def: 'worth the time or effort spent', cn: '值得的', col: 'make sth worthwhile · a worthwhile experience', q: 'make all your hard work worthwhile' },
    { w: 'guarantee', ipa: '/ˌɡærənˈtiː/', pos: 'n.', lvl: 'C1', def: 'a promise that something will certainly happen', cn: '保证，担保', col: 'there’s no guarantee that · a guarantee of', q: 'there’s no guarantee' },
    { w: 'benefit', ipa: '/ˈbenɪfɪt/', pos: 'n.', lvl: 'B2', def: 'an advantage or good effect', cn: '好处，益处', col: 'the benefits of · health benefits', q: 'some of the possible benefits' },
    { w: 'formal', ipa: '/ˈfɔːml/', pos: 'adj.', lvl: 'B2', def: 'official or following an organised system', cn: '正式的，正规的', col: 'formal lessons · formal education', q: 'having formal lessons' }
  ],
  syntax: [
    {
      q: 'It’s generally wise to choose an instrument that you love, as no one wants to spend time doing something that they find boring.',
      tags: ['形式主语', '原因状语从句', '定语从句'],
      main: 'It’s wise to choose an instrument that you love.',
      parts: [
        { r: '形式主语', t: 'It（真正主语是 to choose an instrument that you love）' },
        { r: '系表结构', t: 'is generally wise' },
        { r: '原因状语从句', t: 'as no one wants to spend time doing something（as = 因为）' },
        { r: '定语从句一', t: 'that you love（修饰 instrument）' },
        { r: '定语从句二', t: 'that they find boring（修饰 something）' }
      ],
      cn: '一般来说，明智的做法是选择你喜爱的乐器，因为没人愿意花时间做自己觉得无聊的事。',
      note: 'It is + adj. + to do 是形式主语句型；spend time doing sth 用 -ing；spend time (in) doing 中的 in 常省略，不要误写成 to do。这句正是 Q9 第一条答案的出处。'
    },
    {
      q: 'Some people ask which instrument is the easiest to learn, but although some could be easier to learn than others, it depends on the person, so it’s difficult for me to give you any recommendations about this.',
      tags: ['宾语从句', 'although 让步', 'so 结果'],
      main: 'Some people ask …, but it’s difficult for me to give you any recommendations.',
      parts: [
        { r: '分句一', t: 'Some people ask' },
        { r: '宾语从句', t: 'which instrument is the easiest to learn' },
        { r: '让步状语', t: 'although some could be easier to learn than others' },
        { r: '插入分句', t: 'it depends on the person' },
        { r: '结果分句', t: 'so it’s difficult for me to give you any recommendations about this' }
      ],
      cn: '有人会问哪种乐器最容易学，虽然有些乐器确实比别的更容易，但这取决于个人，所以我很难在这方面给你任何建议。',
      note: '这句含"提问—让步—结论"三层，作者的态度是拒绝给出推荐，因此 the easiest instrument 不能作为 Q9 的答案；which 引导的宾语从句用陈述语序（which instrument is…，不是 is which instrument）。'
    },
    {
      q: 'Once you do make a choice and get started, you could discover that you feel relaxed.',
      tags: ['时间状语从句', '强调助动词', '宾语从句'],
      main: 'You could discover that you feel relaxed.',
      parts: [
        { r: '时间状语从句', t: 'Once you do make a choice and get started（once = 一旦）' },
        { r: '强调助动词', t: 'do（加强语气，"真正做出选择之后"）' },
        { r: '主句', t: 'you could discover' },
        { r: '宾语从句', t: 'that you feel relaxed' }
      ],
      cn: '一旦你真的做出选择并开始学，你可能会发现自己感到放松。',
      note: 'do/does/did 放在实义动词前表示强调，考试常在此设置同义替换（= actually make a choice）；once 引导时间状语从句时用一般现在时表将来。'
    },
    {
      q: 'However you choose to learn, when you successfully play something well for the first time, you will get a wonderful sense of achievement, and this will make all your hard work worthwhile.',
      tags: ['让步状语从句', '时间状语从句', '并列句'],
      main: 'You will get a wonderful sense of achievement, and this will make all your hard work worthwhile.',
      parts: [
        { r: '让步状语', t: 'However you choose to learn（= no matter how you choose to learn）' },
        { r: '时间状语', t: 'when you successfully play something well for the first time' },
        { r: '主句', t: 'you will get a wonderful sense of achievement' },
        { r: '并列分句', t: 'this will make all your hard work worthwhile（this 指前一句的成就感）' }
      ],
      cn: '无论你选择哪种学习方式，当你第一次成功地把一段音乐演奏好时，你会获得一种美妙的成就感，而这会让你所有的努力都值得。',
      note: 'however 在此引导让步状语从句（= no matter how），不是"然而"；make + 宾语 + 形容词 的复合宾语结构（make sth worthwhile）；for the first time 是时间状语，不与完成时连用。'
    },
    {
      q: 'Scientists have carried out a lot of research which has found a connection between playing an instrument and an improvement in memory, which I’m sure many of you would find really useful!',
      tags: ['定语从句连用', '现在完成时', '插入语'],
      main: 'Scientists have carried out a lot of research.',
      parts: [
        { r: '主语', t: 'Scientists' },
        { r: '谓语', t: 'have carried out（carry out research = 开展研究）' },
        { r: '宾语', t: 'a lot of research' },
        { r: '定语从句一', t: 'which has found a connection between playing an instrument and an improvement in memory' },
        { r: '定语从句二', t: 'which I’m sure many of you would find really useful（修饰前面"这个关联/发现"）' }
      ],
      cn: '科学家做了大量研究，发现演奏乐器与记忆力提升之间存在关联，我相信你们很多人会觉得这很有用！',
      note: '两个 which 从句连续出现，第一个修饰 research，第二个指代前面整个发现；I’m sure 是插入语，插在 which 和 many of you 之间，阅读时可以先跳过。'
    },
    {
      q: 'However, teachers like myself often notice that once students do so, they find that it’s easier to learn maths.',
      tags: ['宾语从句', '时间状语从句', '形式主语'],
      main: 'Teachers notice that students find that it’s easier to learn maths.',
      parts: [
        { r: '主语', t: 'teachers like myself（like 是介词，"像我这样的"）' },
        { r: '谓语', t: 'notice' },
        { r: '宾语从句一', t: 'that once students do so, they find …' },
        { r: '时间状语从句', t: 'once students do so（do so 替代 take up this hobby）' },
        { r: '宾语从句二', t: 'that it’s easier to learn maths（it 为形式主语）' }
      ],
      cn: '不过，像我这样的老师常常注意到，学生一旦开始学乐器，就会发现学数学变得更容易了。',
      note: 'notice that… 后接一个带 once 从句的宾语，再从 find 引出第二个宾语从句，形成"双宾语从句"嵌套；do so 是避免重复的替代说法，指代上文的 take up this hobby。'
    }
  ]
});
