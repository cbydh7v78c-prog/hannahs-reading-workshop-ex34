/* Exercise 3 · Note-taking · 03 Living walls (0511/13/M/J/24, p.53) */
window.PASSAGES = window.PASSAGES || [];
window.PASSAGES.push({
  id: 'e3p03',
  no: 3,
  page: 53,
  paper: '0511/13/M/J/24',
  topic: 'Environment',
  title: 'Living walls',
  intro: 'Read the article about the trend in growing plants on the outside walls of buildings, and then complete the notes.',
  paras: [
    'Living walls, also known as vertical gardens, are becoming increasingly popular in cities all around the world, from Paris to Mexico City. It’s easy to see why this is the case – they bring nature into urban environments. You can find living walls on a wide range of buildings, including office blocks, hotels, libraries, cafés, hospitals and many more. However, it’s not just large organisations that are including living walls in the designs of their buildings. Many individuals are also starting to grow plants on the outside walls of their homes, although maybe on a smaller scale.',
    'So why is there such a trend for these living walls? One possible explanation can be found by looking at scientific research. Recent studies have proven what many people already knew to be true – that being near green spaces can improve people’s mood. Whether that green space is a park, forest or living wall doesn’t really seem to matter. However, that being said, some people don’t realise that living walls require a lot of hard work to maintain. For this reason, many companies have started to employ professional gardeners to look after their living walls, as they would with an ordinary garden. It’s also worth mentioning that living walls can create mess, for example from leaves falling on the ground below. This is certainly worth bearing in mind for anyone who is thinking of installing a living wall.',
    'An additional appeal of covering your walls with plants is the fact that living walls reduce heat loss. Of course, how well the living walls perform depends very much on aspects such as which direction they face, the climate, the plant type used and how much of the wall is covered. It’s worth pointing out, however, that living walls can be expensive and because of this, many people may be unable to afford to install them in the first place.',
    'Living walls are particularly welcome in cities where air pollution levels are high. Over the years, cities have seen many of their green spaces gradually disappear, being replaced by housing or shops and offices. This, together with increased road traffic, and sometimes even air traffic, has left some cities with very poor air quality. Living walls make the surrounding air cleaner, which obviously benefits all residents.',
    'When thinking about installing a living wall, it’s important to consider what kind of plants to grow on it. It’s definitely worth getting some advice before buying any. Some plants are very strong, so choosing the wrong ones for your living wall could result in damage to your property. You may also want to consider selecting plants you can eat. Many people love the fact that a living wall could provide a source of food.',
    'Whatever your view on living walls, they seem to be an increasingly popular feature of modern cities around the world.'
  ],
  questions: [
    {
      no: '8',
      type: 'note',
      marks: 4,
      slots: 4,
      heading: 'Reasons why living walls are popular:',
      items: [
        { t: 'bring nature into urban environments', alt: ['bring nature into cities'], key: 'they bring nature into urban environments' },
        { t: 'improve people’s mood', alt: ['improve people’s moods', 'improve mood'], key: 'being near green spaces can improve people’s mood' },
        { t: 'reduce heat loss', alt: ['they reduce heat loss'], key: 'the fact that living walls reduce heat loss' },
        { t: 'make surrounding air cleaner', alt: ['make the surrounding air cleaner'], key: 'Living walls make the surrounding air cleaner' },
        { t: 'provide a source of food', alt: ['a source of food'], key: 'a living wall could provide a source of food' }
      ],
      why: '题干问"为什么受欢迎"，答案散落在各段开头带评价色彩的句子里。第 1 段 they bring nature into urban environments 是最直接的理由；第 2 段通过研究说明 being near green spaces can improve people’s mood；第 3 段 An additional appeal…reduce heat loss；第 4 段 make the surrounding air cleaner；第 5 段 could provide a source of food。干扰点在同样几个段落里：require a lot of hard work to maintain、create mess、can be expensive、damage to your property 全是缺点，属于第 9 题；第 6 段只是全文总结（increasingly popular feature），没有新理由。'
    },
    {
      no: '9',
      type: 'note',
      marks: 3,
      slots: 3,
      heading: 'Disadvantages of living walls:',
      items: [
        { t: 'require a lot of hard work to maintain', alt: ['a lot of hard work to maintain'], key: 'living walls require a lot of hard work to maintain' },
        { t: 'create mess', alt: ['leaves falling on the ground below', 'create a mess'], key: 'living walls can create mess' },
        { t: 'can be expensive', alt: ['unable to afford to install them'], key: 'living walls can be expensive and because of this' },
        { t: 'damage to your property', alt: ['could damage your property'], key: 'could result in damage to your property' }
      ],
      why: '第 9 题找缺点，作者用 However, that being said、worth pointing out, however、could result in 等信号词把缺点夹在"好处段"里，很容易漏读。第 2 段一口气给了两条：require a lot of hard work to maintain 和 can create mess（叶子掉到地上）；第 3 段后半 can be expensive / unable to afford to install them；第 5 段 could result in damage to your property。注意第 3 段前半 reduce heat loss 与第 4 段 make the surrounding air cleaner 是优点，属于第 8 题，别抄错栏。'
    }
  ],
  vocab: [
    { w: 'vertical', ipa: '/ˈvɜːtɪkl/', pos: 'adj.', lvl: 'C1', def: 'going straight up or down from a level surface', cn: '垂直的，竖的', col: 'vertical gardens · a vertical line', q: 'also known as vertical gardens' },
    { w: 'increasingly', ipa: '/ɪnˈkriːsɪŋli/', pos: 'adv.', lvl: 'B2', def: 'more and more over a period of time', cn: '越来越，日益', col: 'increasingly popular · increasingly difficult', q: 'are becoming increasingly popular in cities' },
    { w: 'urban', ipa: '/ˈɜːbən/', pos: 'adj.', lvl: 'B2', def: 'connected with a town or city', cn: '城市的，都市的', col: 'urban areas · urban environments', q: 'bring nature into urban environments' },
    { w: 'scale', ipa: '/skeɪl/', pos: 'n.', lvl: 'B2', def: 'the size or level of something', cn: '规模，范围', col: 'on a smaller scale · a large scale', q: 'although maybe on a smaller scale' },
    { w: 'trend', ipa: '/trend/', pos: 'n.', lvl: 'B2', def: 'a general change or development in a situation', cn: '趋势，潮流', col: 'a growing trend · follow a trend', q: 'such a trend for these living walls' },
    { w: 'scientific', ipa: '/ˌsaɪənˈtɪfɪk/', pos: 'adj.', lvl: 'B2', def: 'relating to science or based on its methods', cn: '科学的', col: 'scientific research · scientific evidence', q: 'looking at scientific research' },
    { w: 'mood', ipa: '/muːd/', pos: 'n.', lvl: 'B2', def: 'the way you feel at a particular time', cn: '心情，情绪', col: 'improve your mood · in a good mood', q: 'can improve people’s mood' },
    { w: 'maintain', ipa: '/meɪnˈteɪn/', pos: 'v.', lvl: 'B2', def: 'to keep something in good condition', cn: '维护，养护', col: 'maintain a garden · hard to maintain', q: 'a lot of hard work to maintain' },
    { w: 'mess', ipa: '/mes/', pos: 'n.', lvl: 'B2', def: 'a dirty or untidy state', cn: '脏乱，凌乱', col: 'create mess · make a mess', q: 'living walls can create mess' },
    { w: 'bear in mind', ipa: '/beər ɪn maɪnd/', pos: 'phr.', lvl: 'B2', def: 'to remember and consider something when deciding', cn: '记在心里，考虑到', col: 'worth bearing in mind · bear in mind that', q: 'worth bearing in mind for anyone' },
    { w: 'install', ipa: '/ɪnˈstɔːl/', pos: 'v.', lvl: 'B2', def: 'to put equipment or a system in place so it can be used', cn: '安装，装设', col: 'install a system · install a living wall', q: 'thinking of installing a living wall' },
    { w: 'appeal', ipa: '/əˈpiːl/', pos: 'n.', lvl: 'C1', def: 'a quality that makes people like something', cn: '吸引力', col: 'an additional appeal · hold a wide appeal', q: 'An additional appeal of covering your walls with plants' },
    { w: 'heat loss', ipa: '/ˈhiːt lɒs/', pos: 'n.', lvl: 'C1', def: 'the escape of warmth from a building', cn: '热量流失', col: 'reduce heat loss · prevent heat loss', q: 'living walls reduce heat loss' },
    { w: 'climate', ipa: '/ˈklaɪmət/', pos: 'n.', lvl: 'B2', def: 'the usual weather conditions in an area', cn: '气候', col: 'a mild climate · the local climate', q: 'the climate, the plant type used' },
    { w: 'afford', ipa: '/əˈfɔːd/', pos: 'v.', lvl: 'B2', def: 'to have enough money to pay for something', cn: '负担得起', col: 'afford to buy · can’t afford it', q: 'may be unable to afford to install them' },
    { w: 'pollution', ipa: '/pəˈluːʃn/', pos: 'n.', lvl: 'B2', def: 'damage caused to air, water or land by harmful substances', cn: '污染', col: 'air pollution · reduce pollution', q: 'where air pollution levels are high' },
    { w: 'surrounding', ipa: '/səˈraʊndɪŋ/', pos: 'adj.', lvl: 'C1', def: 'being all around a person or thing', cn: '周围的', col: 'the surrounding area · the surrounding air', q: 'make the surrounding air cleaner' },
    { w: 'resident', ipa: '/ˈrezɪdənt/', pos: 'n.', lvl: 'B2', def: 'a person who lives in a particular place', cn: '居民', col: 'local residents · city residents', q: 'which obviously benefits all residents' }
  ],
  syntax: [
    {
      q: 'Living walls, also known as vertical gardens, are becoming increasingly popular in cities all around the world, from Paris to Mexico City.',
      tags: ['过去分词插入语', '现在进行时'],
      main: 'Living walls are becoming increasingly popular.',
      parts: [
        { r: '主语', t: 'Living walls' },
        { r: '插入语', t: 'also known as vertical gardens（过去分词短语作补充说明）' },
        { r: '谓语', t: 'are becoming' },
        { r: '表语', t: 'increasingly popular' },
        { r: '地点状语', t: 'in cities all around the world, from Paris to Mexico City' }
      ],
      cn: '生态墙，也叫垂直花园，在世界各地从巴黎到墨西哥城的城市中越来越受欢迎。',
      note: '两个逗号之间的 also known as… 是插入语，先跳过才看得清主干；from Paris to Mexico City 是举例说明 all around the world，不是地点状语的并列成分。'
    },
    {
      q: 'However, that being said, some people don’t realise that living walls require a lot of hard work to maintain.',
      tags: ['独立结构', '宾语从句'],
      main: 'Some people don’t realise that …',
      parts: [
        { r: '转折词', t: 'However' },
        { r: '独立结构', t: 'that being said（"话虽如此"，独立主格，起过渡作用）' },
        { r: '主语', t: 'some people' },
        { r: '谓语', t: 'don’t realise' },
        { r: '宾语从句', t: 'that living walls require a lot of hard work to maintain' }
      ],
      cn: '不过话虽如此，有些人并没有意识到生态墙需要花很多功夫来维护。',
      note: 'that being said 是固定独立结构，意思是"话虽如此"，不能按字面拆成从句；这里是全文第一次由"夸"转"贬"的地方，第 9 题的第一条答案就藏在这个宾语从句里。'
    },
    {
      q: 'An additional appeal of covering your walls with plants is the fact that living walls reduce heat loss.',
      tags: ['动名词作介词宾语', '同位语从句'],
      main: 'An additional appeal is the fact that living walls reduce heat loss.',
      parts: [
        { r: '主语', t: 'An additional appeal' },
        { r: '后置修饰', t: 'of covering your walls with plants（介词 of + 动名词短语）' },
        { r: '系动词', t: 'is' },
        { r: '表语', t: 'the fact' },
        { r: '同位语从句', t: 'that living walls reduce heat loss' }
      ],
      cn: '用植物覆盖墙面的另一个吸引力在于，生态墙能减少热量流失。',
      note: 'the fact that… 是典型的同位语从句，that 不作成分、只起连接作用，考试常把从句内容设成答案 reduce heat loss；of 后面跟的是动名词 covering，不是名词，读的时候别误判成 of 短语修饰 walls。'
    },
    {
      q: 'Living walls are particularly welcome in cities where air pollution levels are high.',
      tags: ['定语从句', '被动语态'],
      main: 'Living walls are welcome in cities.',
      parts: [
        { r: '主语', t: 'Living walls' },
        { r: '系表结构', t: 'are particularly welcome（particularly 修饰 welcome）' },
        { r: '地点状语', t: 'in cities' },
        { r: '定语从句', t: 'where air pollution levels are high' }
      ],
      cn: '在空气污染水平高的城市，生态墙尤其受欢迎。',
      note: 'where 引导的定语从句修饰 cities，相当于 in which；这句是第 4 段"清洁空气"这一优点的引子，真正的答案句是段末的 make the surrounding air cleaner，读的时候要连着看。'
    },
    {
      q: 'It’s worth pointing out, however, that living walls can be expensive and because of this, many people may be unable to afford to install them in the first place.',
      tags: ['形式主语', '主语从句', '因果连接'],
      main: 'It’s worth pointing out that …',
      parts: [
        { r: '形式主语', t: 'It' },
        { r: '系表结构', t: '’s worth pointing out, however' },
        { r: '真正主语', t: 'that living walls can be expensive and because of this, many people may be unable to afford to install them in the first place' }
      ],
      cn: '不过值得指出的是，生态墙可能很贵，因此许多人一开始可能根本装不起。',
      note: 'It is worth pointing out that… 是学术文章里引出"缺点/提醒"的高频句式，be worth doing 用主动形式表被动；because of this 是插入的因果连接，答案 can be expensive 与 unable to afford 是同一意思的两种写法，写任一都对。'
    },
    {
      q: 'Some plants are very strong, so choosing the wrong ones for your living wall could result in damage to your property.',
      tags: ['动名词作主语', 'so 结果'],
      main: 'Choosing the wrong plants could result in damage.',
      parts: [
        { r: '原因分句', t: 'Some plants are very strong' },
        { r: '结果连词', t: 'so' },
        { r: '主语', t: 'choosing the wrong ones for your living wall（动名词短语作主语）' },
        { r: '谓语', t: 'could result in' },
        { r: '宾语', t: 'damage to your property' }
      ],
      cn: '有些植物生命力很强，所以给你的生态墙选错植物可能会损坏你的房产。',
      note: 'ones 指代前面的 plants，是避免重复的代词；result in 是"导致"，与 result from（"由…造成"）方向相反，是常考易混搭配；damage to sth 中的 to 不能换成 of。'
    }
  ]
});
