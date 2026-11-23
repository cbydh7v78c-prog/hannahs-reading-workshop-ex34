/* Exercise 3 · Note-taking · 07 Atlantic Challenge (0511/11/M/J/25, p.61) */
window.PASSAGES = window.PASSAGES || [];
window.PASSAGES.push({
  id: 'e3p07',
  no: 7,
  page: 61,
  paper: '0511/11/M/J/25',
  topic: 'Sport / Travel',
  title: 'Atlantic Challenge',
  intro: 'Read the article about a rowing race called the Atlantic Challenge, and then complete the notes.',
  paras: [
    'Are you interested in extreme sports? Here’s an example for you – the Atlantic Challenge. This involves crossing the Atlantic Ocean in a rowing boat, and you can choose to do it solo, or in a small team. It has been described as the world’s toughest rowing race.',
    'I first came across this event when I saw a newspaper report about a 23-year-old woman from the UK who set a new record in 2023 for completing the race solo. She rowed for 59 days, 16 hours and 36 minutes, beating the previous record by two hours and 38 minutes. But then I discovered that she isn’t the youngest person to take part in the race – the minimum age is 18, and I read about at least two teenagers who have successfully completed the challenge.',
    'The race begins in La Gomera, in the Canary Islands, in December each year. Meeting the other competitors before setting off is reported to be one of the more memorable aspects of the race – everyone has the same objective, which is preparing to row 3000 miles across the Atlantic to the finishing point in Antigua. Personally, I can’t imagine being able to do this, not only due to the extreme physical challenge, but because of the mental challenge too. Successful participants admit that it is really tough, and during the race, you can’t accept any kind of support, but many have experiences that more than make up for this – seeing whales swimming beside the boat is one example. Most participants are extremely well prepared, though, with specially designed boats to travel in, and they have all sorts of technology on board. Even so, if something goes wrong, you are responsible for carrying out repairs yourself. Of course, if that isn’t possible, you will need to be rescued, so having insurance is an essential requirement.',
    'When I read about the race, the fastest team to have crossed the Atlantic was a four-man team, who finished in just over 29 days. But no matter how long it takes, spotting land in the distance towards the end of the race is something that gives all participants a huge boost. By that point, some might be running low on supplies of food – there is limited space on board, and another regulation is to take everything you need for the entire journey. There isn’t much time to cook and clean when the daily routine consists of three main tasks – rowing, eating and sleeping. Competitors tend to row for two hours at a time, then sleep for two hours, and they try to keep this up twenty-four hours a day. If that doesn’t sound appealing, then rowing into the sunset might tempt you – that’s what several competitors have said was truly unforgettable. I have to admit that it’s something I’m very unlikely to experience. But what about you?'
  ],
  questions: [
    {
      no: '8',
      type: 'note',
      marks: 4,
      slots: 4,
      heading: 'Rules of the Atlantic Challenge:',
      items: [
        { t: 'the minimum age is 18', alt: ['you must be at least 18'], key: 'the minimum age is 18' },
        { t: 'can’t accept any kind of support', alt: ['no support during the race'], key: 'can’t accept any kind of support' },
        { t: 'responsible for carrying out repairs yourself', alt: ['you repair the boat yourself'], key: 'responsible for carrying out repairs yourself' },
        { t: 'having insurance', alt: ['you need insurance'], key: 'having insurance is an essential requirement' },
        { t: 'take everything you need for the entire journey', alt: ['take all your supplies with you'], key: 'take everything you need for the entire journey' }
      ],
      why: '题干是 Rules（规定/要求），要在文中找"必须/不能/有责任"这类表达。第 2 段讲年龄：the minimum age is 18；第 3 段连着三个规定：can’t accept any kind of support（不能接受任何支援）、you are responsible for carrying out repairs yourself（自己修船）、having insurance is an essential requirement（必须有保险）；第 4 段 another regulation 直接点明 take everything you need for the entire journey。干扰项：第 2 段的 59 天 16 小时、第 4 段的 29 天都是纪录时间，不属规定；第 4 段 rowing, eating and sleeping 只是日常安排，不是规定。'
    },
    {
      no: '9',
      type: 'note',
      marks: 3,
      slots: 3,
      heading: 'Highlights of the Atlantic Challenge:',
      items: [
        { t: 'Meeting the other competitors', alt: ['meeting other competitors'], key: 'Meeting the other competitors before setting off' },
        { t: 'seeing whales swimming beside the boat', alt: ['whales swimming beside the boat'], key: 'seeing whales swimming beside the boat' },
        { t: 'spotting land in the distance', alt: ['seeing land in the distance'], key: 'spotting land in the distance' },
        { t: 'rowing into the sunset', alt: ['rowing at sunset'], key: 'rowing into the sunset' }
      ],
      why: 'Highlights 指"最难忘、最精彩的体验"，信号词是 memorable、truly unforgettable、a huge boost、one example。第 3 段开头 Meeting the other competitors 是 one of the more memorable aspects；同段破折号后 seeing whales swimming beside the boat 是"补偿辛苦"的体验；第 4 段 spotting land in the distance 给人 a huge boost，结尾 rowing into the sunset 被说成 truly unforgettable。干扰项：physical/mental challenge、really tough 是困难不是亮点；running low on supplies 是问题。'
    }
  ],
  vocab: [
    { w: 'extreme', ipa: '/ɪkˈstriːm/', pos: 'adj.', lvl: 'B2', def: 'very great in degree; very severe', cn: '极限的，极度的', col: 'extreme sports · extreme weather', q: 'Are you interested in extreme sports' },
    { w: 'solo', ipa: '/ˈsəʊləʊ/', pos: 'adv.', lvl: 'B2', def: 'alone, without other people', cn: '独自地，单人地', col: 'row solo · fly solo', q: 'you can choose to do it solo' },
    { w: 'previous', ipa: '/ˈpriːviəs/', pos: 'adj.', lvl: 'B2', def: 'existing or happening before the present one', cn: '之前的，上一个的', col: 'the previous record · the previous year', q: 'beating the previous record' },
    { w: 'minimum', ipa: '/ˈmɪnɪməm/', pos: 'adj.', lvl: 'B2', def: 'the smallest possible in amount or level', cn: '最低的，最小的', col: 'the minimum age · a minimum of', q: 'the minimum age is 18' },
    { w: 'competitor', ipa: '/kəmˈpetɪtə/', pos: 'n.', lvl: 'B2', def: 'a person who takes part in a competition', cn: '参赛者，竞争者', col: 'other competitors · a strong competitor', q: 'Meeting the other competitors' },
    { w: 'memorable', ipa: '/ˈmemərəbl/', pos: 'adj.', lvl: 'B2', def: 'worth remembering because it is special', cn: '难忘的', col: 'a memorable experience · the most memorable', q: 'one of the more memorable aspects' },
    { w: 'objective', ipa: '/əbˈdʒektɪv/', pos: 'n.', lvl: 'B2', def: 'something you are trying to achieve', cn: '目标', col: 'the same objective · achieve an objective', q: 'everyone has the same objective' },
    { w: 'mental', ipa: '/ˈmentl/', pos: 'adj.', lvl: 'B2', def: 'connected with the mind or thinking', cn: '心理的，精神的', col: 'the mental challenge · mental health', q: 'because of the mental challenge too' },
    { w: 'participant', ipa: '/pɑːˈtɪsɪpənt/', pos: 'n.', lvl: 'B2', def: 'a person who takes part in an activity', cn: '参与者', col: 'race participants · a willing participant', q: 'Successful participants admit' },
    { w: 'admit', ipa: '/ədˈmɪt/', pos: 'v.', lvl: 'B2', def: 'to agree that something is true, often unwillingly', cn: '承认', col: 'admit that · admit a mistake', q: 'admit that it is really tough' },
    { w: 'tough', ipa: '/tʌf/', pos: 'adj.', lvl: 'B2', def: 'difficult to do or deal with', cn: '艰难的，艰苦的', col: 'really tough · a tough challenge', q: 'it is really tough' },
    { w: 'make up for', ipa: '/meɪk ʌp fɔː/', pos: 'phr. v.', lvl: 'C1', def: 'to make a bad situation seem better by providing something good', cn: '补偿，弥补', col: 'make up for lost time · more than make up for', q: 'more than make up for this' },
    { w: 'essential', ipa: '/ɪˈsenʃl/', pos: 'adj.', lvl: 'B2', def: 'completely necessary', cn: '必不可少的', col: 'an essential requirement · essential to do', q: 'an essential requirement' },
    { w: 'boost', ipa: '/buːst/', pos: 'n.', lvl: 'B2', def: 'something that increases or improves a feeling', cn: '提升，鼓舞', col: 'give sb a boost · a confidence boost', q: 'gives all participants a huge boost' },
    { w: 'regulation', ipa: '/ˌreɡjuˈleɪʃn/', pos: 'n.', lvl: 'C1', def: 'an official rule made by an authority', cn: '规定，规章', col: 'a strict regulation · safety regulations', q: 'another regulation is' },
    { w: 'routine', ipa: '/ruːˈtiːn/', pos: 'n.', lvl: 'B2', def: 'the usual fixed order in which you do things', cn: '日常安排，惯例', col: 'a daily routine · keep to a routine', q: 'the daily routine consists of' },
    { w: 'tempt', ipa: '/tempt/', pos: 'v.', lvl: 'C1', def: 'to make someone want to do something', cn: '吸引，引诱', col: 'tempt sb to do · be tempted by', q: 'might tempt you' },
    { w: 'supplies', ipa: '/səˈplaɪz/', pos: 'n.', lvl: 'B2', def: 'food and equipment needed for a journey or activity', cn: '补给品，物资', col: 'run low on supplies · food supplies', q: 'running low on supplies of food' }
  ],
  syntax: [
    {
      q: 'This involves crossing the Atlantic Ocean in a rowing boat, and you can choose to do it solo, or in a small team.',
      tags: ['动名词作宾语', '并列句', '选择关系'],
      main: 'This involves crossing the Atlantic Ocean, and you can choose to do it solo or in a small team.',
      parts: [
        { r: '主语', t: 'This（指上文的 the Atlantic Challenge）' },
        { r: '谓语', t: 'involves（后接动名词作宾语）' },
        { r: '动名词宾语', t: 'crossing the Atlantic Ocean in a rowing boat' },
        { r: '并列分句', t: 'you can choose to do it solo, or in a small team' }
      ],
      cn: '这项比赛意味着要划船横渡大西洋，你可以选择单人完成，也可以组一支小队伍完成。',
      note: 'involve 后接动词必须用 -ing 形式（involve doing sth），不能接 to do；choose to do it solo or in a small team 中 or 连接两个方式状语，solo 在此是副词。'
    },
    {
      q: 'I first came across this event when I saw a newspaper report about a 23-year-old woman from the UK who set a new record in 2023 for completing the race solo.',
      tags: ['时间状语从句', '定语从句', '介词短语作定语'],
      main: 'I came across this event.',
      parts: [
        { r: '主语', t: 'I' },
        { r: '谓语', t: 'first came across（come across = 偶然发现）' },
        { r: '宾语', t: 'this event' },
        { r: '时间状语从句', t: 'when I saw a newspaper report about a 23-year-old woman from the UK' },
        { r: '定语从句', t: 'who set a new record in 2023 for completing the race solo（修饰 woman）' }
      ],
      cn: '我第一次接触这项赛事，是在报纸上看到一篇报道，讲一位来自英国的 23 岁女性在 2023 年单人完成比赛并创下新纪录。',
      note: 'come across 是"偶然遇到/发现"，不要理解成"穿过"；who 从句紧跟 woman，中间的 about…from the UK 都是修饰 report 和 woman 的介词短语，阅读时应先跳过。'
    },
    {
      q: 'Meeting the other competitors before setting off is reported to be one of the more memorable aspects of the race – everyone has the same objective, which is preparing to row 3000 miles across the Atlantic to the finishing point in Antigua.',
      tags: ['动名词作主语', '被动句型', '非限制性定语从句'],
      main: 'Meeting the other competitors is reported to be one of the more memorable aspects of the race.',
      parts: [
        { r: '主语', t: 'Meeting the other competitors before setting off（动名词短语作主语）' },
        { r: '谓语', t: 'is reported to be（sb/sth is reported to be… 据说……）' },
        { r: '表语', t: 'one of the more memorable aspects of the race' },
        { r: '补充说明', t: 'everyone has the same objective（破折号后另起一个分句）' },
        { r: '定语从句', t: 'which is preparing to row 3000 miles … in Antigua（修饰 objective）' }
      ],
      cn: '据说出发前与其他选手见面是比赛中比较难忘的时刻之一——大家目标一致，就是准备划行 3000 英里横渡大西洋，到达位于安提瓜的终点。',
      note: '动名词短语作主语时谓语用单数（is）；be reported to be 是"据说"的被动结构，可替换 It is reported that…；破折号后的 which 指 objective，不是指 aspects。'
    },
    {
      q: 'Successful participants admit that it is really tough, and during the race, you can’t accept any kind of support, but many have experiences that more than make up for this – seeing whales swimming beside the boat is one example.',
      tags: ['宾语从句', '并列转折', '定语从句', '动名词作主语'],
      main: 'Participants admit that it is tough, but many have experiences that make up for this.',
      parts: [
        { r: '宾语从句', t: 'that it is really tough（it 指比赛这件事）' },
        { r: '插入状语', t: 'during the race' },
        { r: '转折分句', t: 'you can’t accept any kind of support' },
        { r: '定语从句', t: 'that more than make up for this（修饰 experiences）' },
        { r: '举例说明', t: 'seeing whales swimming beside the boat is one example（动名词短语作主语）' }
      ],
      cn: '成功的参赛者承认比赛非常艰苦，而且比赛期间不能接受任何形式的支援，但很多人有这样的经历，足以弥补这一切——看到鲸鱼在船边游过就是一个例子。',
      note: '一句话用 and / but 串了三个分句，还夹了定语从句和破折号举例，是典型的"长句多转折"；more than make up for 意为"远远补偿"，答案 Q9 的第二条就藏在这个破折号后面。'
    },
    {
      q: 'Most participants are extremely well prepared, though, with specially designed boats to travel in, and they have all sorts of technology on board.',
      tags: ['with 复合结构', '并列句', '插入语'],
      main: 'Most participants are well prepared, and they have all sorts of technology on board.',
      parts: [
        { r: '主语', t: 'Most participants' },
        { r: '系表结构', t: 'are extremely well prepared' },
        { r: '插入语', t: 'though（口语中置于句中，表"不过"）' },
        { r: 'with 结构', t: 'with specially designed boats to travel in（with + 名词 + 不定式，表示具备的条件）' },
        { r: '并列分句', t: 'they have all sorts of technology on board' }
      ],
      cn: '不过大多数参赛者都准备得极其充分，他们乘坐专门设计的船只，船上配有各种各样的技术设备。',
      note: 'though 放句中用逗号隔开，是"however"的口语替代；with + 名词 + to do 表示"有…可用"，to travel in 的不定式后面保留了介词 in，因为先行词是 boats。'
    },
    {
      q: 'But no matter how long it takes, spotting land in the distance towards the end of the race is something that gives all participants a huge boost.',
      tags: ['让步状语从句', '动名词作主语', '定语从句'],
      main: 'Spotting land in the distance is something that gives all participants a huge boost.',
      parts: [
        { r: '让步状语', t: 'no matter how long it takes（= however long it takes，无论花多长时间）' },
        { r: '主语', t: 'spotting land in the distance towards the end of the race（动名词短语）' },
        { r: '系动词', t: 'is' },
        { r: '表语', t: 'something' },
        { r: '定语从句', t: 'that gives all participants a huge boost' }
      ],
      cn: '但无论花多长时间，比赛接近尾声时望见远处的陆地，都会给所有参赛者巨大的鼓舞。',
      note: 'no matter how + 形容词/副词 引导让步状语从句，可与 however long 互换；主语是动名词短语 spotting…，所以谓语用 is；这句正是 Q9 "spotting land in the distance" 的出处。'
    }
  ]
});
