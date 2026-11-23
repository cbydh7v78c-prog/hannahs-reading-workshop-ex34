/* Exercise 3 · Note-taking · 01 Car-free cities (0511/11/M/J/24, p.49) */
window.PASSAGES = window.PASSAGES || [];
window.PASSAGES.push({
  id: 'e3p01',
  no: 1,
  page: 49,
  paper: '0511/11/M/J/24',
  topic: 'Travel & Environment',
  title: 'Car-free cities',
  standfirst: 'Robert Curry investigates',
  intro: 'Read the article about ways of reducing cars in cities, and then complete the notes.',
  paras: [
    'Getting cars out of cities has become a target for countries around the world. The number of cars on our roads has risen rapidly in recent years, causing traffic jams and an increase in pollution, and contributing to global warming. I decided to look into what has been done and what I could do personally.',
    'One study, carried out at Lund University in Sweden, found that 75% of the methods introduced to cut car use were put in place by local city governments. The most successful cities have created policies which govern what people can or can’t do, while also encouraging people to change their behaviour where possible.',
    'One strategy that has an obvious impact on drivers is removing parking places. Over ten years ago, urban designer Alison Lee was involved in a project in Melbourne, Australia, which did just this. Despite complaints from some traders and residents, it has been a success. My city council recently proposed the same thing and it made me think about what I could do. I realised there are plenty of alternatives to driving. Renting an e-bike was one thing I did to see how well I could manage without my car. Elsewhere, creating car-free zones has led to a reduction of city-centre traffic. In Barcelona, Spain, there are areas in the city that can only be accessed by residents and emergency services in vehicles, along with bicycles and those on foot.',
    'Charging drivers to enter parts of a city is another approach. In London, UK, traffic in the centre has been reduced by around 33% since this began in 2003. Other cities have done the same, but although this has clearly led to significant reductions in car use, traffic problems cannot be avoided completely while city design continues to favour car use. One answer is better public transport, which some cities have already provided. Another option I was interested in is sharing a car, which I’ve now been doing for a while with friends who live in my area.',
    'A large medical centre in Rotterdam, the Netherlands, reported a 20–25% reduction in employee car journeys by introducing parking charges outside the workplace. But we know people need encouragement as well as rules. One widely explored idea is making a personal travel plan. I wasn’t entirely sure what this meant, so I decided to give it a go. Basically, it involves getting personalised advice on the best ways to avoid car use in the city, and I found it really helpful.',
    'Mobile phone technology offers another way to limit car use. When I was living in Bologna, Italy, I came across an example of this. It involved downloading an app that records environmentally friendly trips around the city. I did this and found it really motivating. Initial results showed that 73% of people used their car less, although the number of car trips or distances travelled by car were not recorded, so the overall effectiveness of this app is unclear.'
  ],
  questions: [
    {
      no: '8',
      type: 'note',
      marks: 4,
      slots: 4,
      heading: 'Policies that have been introduced to reduce car use:',
      items: [
        { t: 'removing parking places', key: 'One strategy that has an obvious impact on drivers is removing parking places' },
        { t: 'creating car-free zones', alt: ['car-free zones'], key: 'creating car-free zones has led to a reduction of city-centre traffic' },
        { t: 'charging drivers to enter parts of a city', alt: ['charging drivers'], key: 'Charging drivers to enter parts of a city is another approach' },
        { t: 'providing better public transport', alt: ['better public transport'], key: 'One answer is better public transport' },
        { t: 'introducing parking charges outside the workplace', alt: ['parking charges outside the workplace'], key: 'introducing parking charges outside the workplace' }
      ],
      why: '题干关键词是 policies（政策/做法），要在文中找出"城市做过什么"。第 3 段的 removing parking places、creating car-free zones，第 4 段的 charging drivers、better public transport，第 5 段的 parking charges outside the workplace，都是"措施"。注意第 2 段只讲"75% 由地方政府推行"这一研究结论，本身不是具体措施，不要抄进去。'
    },
    {
      no: '9',
      type: 'note',
      marks: 3,
      slots: 3,
      heading: 'What the writer has tried doing in order to reduce his own car use:',
      items: [
        { t: 'renting an e-bike', alt: ['renting a bike'], key: 'Renting an e-bike was one thing I did' },
        { t: 'sharing a car', alt: ['car sharing'], key: 'sharing a car, which I’ve now been doing' },
        { t: 'making a personal travel plan', alt: ['getting personalised advice on ways to avoid car use'], key: 'making a personal travel plan' },
        { t: 'downloading an app', alt: ['using mobile phone technology'], key: 'downloading an app that records environmentally friendly trips' }
      ],
      why: '题干的主语是 the writer（作者本人），时态线索是 has tried。全文出现 I did / I’ve been doing / I decided to give it a go 的地方只有三处：renting an e-bike、sharing a car、personal travel plan；第 6 段的 downloading an app 也是"我做了并觉得很有动力"，可作第四条。其他措施都是"别的城市做的"，不能混。'
    }
  ],
  vocab: [
    { w: 'target', ipa: '/ˈtɑːɡɪt/', pos: 'n.', lvl: 'B2', def: 'a result that you try to achieve', cn: '目标；指标', col: 'become a target for · meet a target', q: 'a target for countries around the world' },
    { w: 'rapidly', ipa: '/ˈræpɪdli/', pos: 'adv.', lvl: 'B2', def: 'very quickly, in a short time', cn: '迅速地，快速地', col: 'rise rapidly · grow rapidly', q: 'has risen rapidly in recent years' },
    { w: 'contribute to', ipa: '/kənˈtrɪbjuːt tu/', pos: 'v.', lvl: 'B2', def: 'to be one of the causes of something', cn: '导致；促成（常接不好的结果）', col: 'contribute to global warming · contribute to a problem', q: 'contributing to global warming' },
    { w: 'policy', ipa: '/ˈpɒləsi/', pos: 'n.', lvl: 'B2', def: 'an official plan of action agreed by a government or organisation', cn: '政策，方针', col: 'create a policy · government policy', q: 'created policies which govern what people can or can’t do' },
    { w: 'govern', ipa: '/ˈɡʌvn/', pos: 'v.', lvl: 'C1', def: 'to control or influence how something happens or is done', cn: '管理；支配，规定', col: 'govern behaviour · rules governing sth', q: 'policies which govern what people can or can’t do' },
    { w: 'behaviour', ipa: '/bɪˈheɪvjə/', pos: 'n.', lvl: 'B2', def: 'the way a person acts in a particular situation', cn: '行为，举止', col: 'change your behaviour · good behaviour', q: 'change their behaviour where possible' },
    { w: 'strategy', ipa: '/ˈstrætədʒi/', pos: 'n.', lvl: 'B2', def: 'a plan intended to achieve a particular aim', cn: '策略，办法', col: 'adopt a strategy · a successful strategy', q: 'One strategy that has an obvious impact on drivers' },
    { w: 'obvious', ipa: '/ˈɒbviəs/', pos: 'adj.', lvl: 'B2', def: 'easy to see or understand; clear', cn: '明显的', col: 'an obvious impact · for obvious reasons', q: 'an obvious impact on drivers' },
    { w: 'complaint', ipa: '/kəmˈpleɪnt/', pos: 'n.', lvl: 'B2', def: 'a statement that you are not satisfied with something', cn: '投诉，抱怨', col: 'make a complaint · despite complaints from', q: 'Despite complaints from some traders and residents' },
    { w: 'alternative', ipa: '/ɔːlˈtɜːnətɪv/', pos: 'n.', lvl: 'B2', def: 'something you can choose instead of another thing', cn: '替代方案；选择', col: 'an alternative to sth · plenty of alternatives', q: 'there are plenty of alternatives to driving' },
    { w: 'emergency services', ipa: '/ɪˈmɜːdʒənsi ˈsɜːvɪsɪz/', pos: 'n.', lvl: 'B2', def: 'the organisations that deal with accidents, fires and crimes', cn: '紧急救援部门（消防、救护、警察）', col: 'call the emergency services', q: 'residents and emergency services in vehicles' },
    { w: 'approach', ipa: '/əˈprəʊtʃ/', pos: 'n.', lvl: 'B2', def: 'a way of dealing with a situation or problem', cn: '方法，途径', col: 'a new approach to sth · another approach', q: 'is another approach' },
    { w: 'significant', ipa: '/sɪɡˈnɪfɪkənt/', pos: 'adj.', lvl: 'B2', def: 'large or important enough to have an effect', cn: '显著的，重大的', col: 'a significant reduction · significant progress', q: 'led to significant reductions in car use' },
    { w: 'personalised', ipa: '/ˈpɜːsənəlaɪzd/', pos: 'adj.', lvl: 'C1', def: 'designed to suit one particular person', cn: '个性化的，量身定做的', col: 'personalised advice · personalised service', q: 'getting personalised advice on the best ways to avoid car use' },
    { w: 'motivating', ipa: '/ˈməʊtɪveɪtɪŋ/', pos: 'adj.', lvl: 'B2', def: 'making you want to try hard and keep doing something', cn: '让人有动力的，激励人的', col: 'find sth motivating · a motivating teacher', q: 'found it really motivating' },
    { w: 'effectiveness', ipa: '/ɪˈfektɪvnəs/', pos: 'n.', lvl: 'C1', def: 'how well something produces the result you want', cn: '有效性，效果', col: 'the overall effectiveness of · improve effectiveness', q: 'the overall effectiveness of this app is unclear' },
    { w: 'urban', ipa: '/ˈɜːbən/', pos: 'adj.', lvl: 'B2', def: 'connected with a town or city', cn: '城市的，都市的', col: 'urban area · urban designer', q: 'urban designer Alison Lee' }
  ],
  syntax: [
    {
      q: 'The number of cars on our roads has risen rapidly in recent years, causing traffic jams and an increase in pollution, and contributing to global warming.',
      tags: ['分词状语', '并列结构'],
      main: 'The number of cars has risen.',
      parts: [
        { r: '主语', t: 'The number of cars on our roads（of 短语作后置定语，谓语用单数）' },
        { r: '谓语', t: 'has risen rapidly in recent years（现在完成时 + 副词 + 时间状语）' },
        { r: '结果状语', t: 'causing traffic jams and an increase in pollution' },
        { r: '并列状语', t: 'and contributing to global warming' }
      ],
      cn: '近几年我们道路上的汽车数量迅速增加，造成交通堵塞和污染加剧，并加剧了全球变暖。',
      note: '两个 -ing 分词短语并列，都用逗号与主句隔开，表示前面整件事带来的结果；注意 the number of + 复数名词作主语时谓语用单数（has，不是 have）。'
    },
    {
      q: 'One study, carried out at Lund University in Sweden, found that 75% of the methods introduced to cut car use were put in place by local city governments.',
      tags: ['过去分词插入语', '宾语从句', '被动语态'],
      main: 'One study found that …',
      parts: [
        { r: '主语', t: 'One study' },
        { r: '插入语', t: 'carried out at Lund University in Sweden（过去分词短语，修饰 study）' },
        { r: '谓语', t: 'found' },
        { r: '宾语从句', t: 'that 75% of the methods … were put in place by local city governments' },
        { r: '后置定语', t: 'introduced to cut car use（过去分词修饰 methods）' }
      ],
      cn: '一项在瑞典隆德大学开展的研究发现，为减少用车而推出的方法中，有 75% 是由当地市政府实施的。',
      note: '两个逗号之间的过去分词短语是插入语，先跳过它抓主干 One study found that…；从句里的 were put in place 是被动语态，put in place = 实施。'
    },
    {
      q: 'The most successful cities have created policies which govern what people can or can’t do, while also encouraging people to change their behaviour where possible.',
      tags: ['定语从句', '宾语从句', 'while 从句'],
      main: 'The cities have created policies.',
      parts: [
        { r: '主语', t: 'The most successful cities' },
        { r: '谓语', t: 'have created' },
        { r: '宾语', t: 'policies' },
        { r: '定语从句', t: 'which govern what people can or can’t do（从句中再套一个 what 宾语从句）' },
        { r: '伴随状语', t: 'while also encouraging people to change their behaviour where possible' }
      ],
      cn: '最成功的城市制定了规定人们能做与不能做什么的政策，同时尽可能鼓励人们改变行为方式。',
      note: 'which 引导的定语从句里又嵌了 what 引导的宾语从句，是典型的"从句套从句"；while + 分词表示"与此同时"，where possible 是 where it is possible 的省略。'
    },
    {
      q: 'One strategy that has an obvious impact on drivers is removing parking places.',
      tags: ['定语从句', '动名词作表语'],
      main: 'One strategy is removing parking places.',
      parts: [
        { r: '主语', t: 'One strategy' },
        { r: '定语从句', t: 'that has an obvious impact on drivers' },
        { r: '系动词', t: 'is' },
        { r: '表语', t: 'removing parking places（动名词短语）' }
      ],
      cn: '对司机有明显影响的一个做法，就是取消停车位。',
      note: '主语和系动词被定语从句隔开，读时先跳过 that…drivers 抓住 One strategy is…；动名词 removing 作表语，说明"策略"的具体内容。'
    },
    {
      q: 'Other cities have done the same, but although this has clearly led to significant reductions in car use, traffic problems cannot be avoided completely while city design continues to favour car use.',
      tags: ['although 让步', 'while 状语', '被动语态'],
      main: 'Traffic problems cannot be avoided.',
      parts: [
        { r: '并列分句', t: 'Other cities have done the same' },
        { r: '让步状语', t: 'although this has clearly led to significant reductions in car use' },
        { r: '主句', t: 'traffic problems cannot be avoided completely' },
        { r: '条件状语', t: 'while city design continues to favour car use（while = 只要…）' }
      ],
      cn: '其他城市也这样做，尽管这显然大幅减少了用车，但只要城市设计仍偏向汽车，交通问题就无法完全避免。',
      note: 'although 引出的让步状语放在主句前，主句反而在后面——考点常问"作者的态度"，答案就在 cannot be avoided completely 这一转折上；此处 while 不是"当…时"，而是"只要"。'
    },
    {
      q: 'Initial results showed that 73% of people used their car less, although the number of car trips or distances travelled by car were not recorded, so the overall effectiveness of this app is unclear.',
      tags: ['宾语从句', 'although', 'so 结果'],
      main: 'Initial results showed that …, so the effectiveness is unclear.',
      parts: [
        { r: '主语', t: 'Initial results' },
        { r: '谓语', t: 'showed' },
        { r: '宾语从句', t: 'that 73% of people used their car less' },
        { r: '让步状语', t: 'although the number of car trips or distances travelled by car were not recorded' },
        { r: '结果分句', t: 'so the overall effectiveness of this app is unclear' }
      ],
      cn: '初步结果显示 73% 的人减少了用车，但由于没有记录用车次数或行驶距离，这个应用的整体效果并不清楚。',
      note: '一句话里"数据（73%）+ 让步（although）+ 结论（so…unclear）"三层，考试常把结论句设成选项；distances travelled by car 是"名词 + 过去分词"的后置定语。'
    }
  ]
});
