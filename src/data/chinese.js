// Chinese relationship lookup table (Traditional Chinese, Taiwan dialect)
// key: dot-joined path of relation keys
// zh: formal term, pinyin: romanization, chain: colloquial/display term for chain view

export const chineseRelationships = {
  // ── 1 step ──────────────────────────────────────────────
  'father':          { zh: '父親', pinyin: 'fùqīn',       chain: '爸爸', colloquialPinyin: 'bàba' },
  'mother':          { zh: '母親', pinyin: 'mǔqīn',       chain: '媽媽', colloquialPinyin: 'māma' },
  'husband':         { zh: '丈夫', pinyin: 'zhàngfū',     chain: '老公', colloquialPinyin: 'lǎogōng' },
  'wife':            { zh: '妻子', pinyin: 'qīzi',        chain: '老婆', colloquialPinyin: 'lǎopó' },
  'elder_brother':   { zh: '兄長', pinyin: 'xiōngzhǎng', chain: '哥哥', colloquialPinyin: 'gēge' },
  'younger_brother': { zh: '弟弟', pinyin: 'dìdi',        chain: '弟弟' },
  'elder_sister':    { zh: '姊姊', pinyin: 'jiějie',      chain: '姐姐' },
  'younger_sister':  { zh: '妹妹', pinyin: 'mèimei',      chain: '妹妹' },
  'son':             { zh: '兒子', pinyin: 'érzi',        chain: '兒子' },
  'daughter':        { zh: '女兒', pinyin: 'nǚér',        chain: '女兒' },

  // ── 2 steps: grandparents ───────────────────────────────
  'father.father':   { zh: '祖父',   pinyin: 'zǔfù',     chain: '爺爺', colloquialPinyin: 'yéye' },
  'father.mother':   { zh: '祖母',   pinyin: 'zǔmǔ',     chain: '奶奶', colloquialPinyin: 'nǎinai' },
  'mother.father':   { zh: '外祖父', pinyin: 'wàizǔfù',  chain: '外公', colloquialPinyin: 'wàigōng' },
  'mother.mother':   { zh: '外祖母', pinyin: 'wàizǔmǔ',  chain: '外婆', colloquialPinyin: 'wàipó' },

  // ── 2 steps: paternal aunts / uncles ────────────────────
  'father.elder_brother':   { zh: '伯父', pinyin: 'bófù',  chain: '伯伯', colloquialPinyin: 'bóbo' },
  'father.younger_brother': { zh: '叔父', pinyin: 'shūfù', chain: '叔叔', colloquialPinyin: 'shūshu' },
  'father.elder_sister':    { zh: '姑母', pinyin: 'gūmǔ',  chain: '姑姑', colloquialPinyin: 'gūgu' },
  'father.younger_sister':  { zh: '姑姑', pinyin: 'gūgu',  chain: '姑姑' },

  // ── 2 steps: maternal aunts / uncles ────────────────────
  'mother.elder_brother':   { zh: '舅舅', pinyin: 'jiùjiu', chain: '舅舅' },
  'mother.younger_brother': { zh: '舅舅', pinyin: 'jiùjiu', chain: '舅舅' },
  'mother.elder_sister':    { zh: '姨媽', pinyin: 'yímā',   chain: '姨媽' },
  'mother.younger_sister':  { zh: '阿姨', pinyin: 'āyí',    chain: '姨' },

  // ── 2 steps: aunt/uncle spouses ─────────────────────────
  'father.elder_brother.wife':   { zh: '伯母', pinyin: 'bómǔ',     chain: '伯母' },
  'father.younger_brother.wife': { zh: '嬸嬸', pinyin: 'shěnshen', chain: '嬸嬸' },
  'father.elder_sister.husband': { zh: '姑丈', pinyin: 'gūzhàng',  chain: '姑丈' },
  'father.younger_sister.husband':{ zh: '姑丈', pinyin: 'gūzhàng', chain: '姑丈' },
  'mother.elder_brother.wife':   { zh: '舅媽', pinyin: 'jiùmā',    chain: '舅媽' },
  'mother.younger_brother.wife': { zh: '舅媽', pinyin: 'jiùmā',    chain: '舅媽' },
  'mother.elder_sister.husband': { zh: '姨丈', pinyin: 'yízhàng',  chain: '姨丈' },
  'mother.younger_sister.husband':{ zh: '姨丈', pinyin: 'yízhàng', chain: '姨丈' },

  // ── 2 steps: siblings' spouses ──────────────────────────
  'elder_brother.wife':     { zh: '嫂嫂', pinyin: 'sǎosao',    chain: '嫂嫂' },
  'younger_brother.wife':   { zh: '弟媳', pinyin: 'dìxí',      chain: '弟媳' },
  'elder_sister.husband':   { zh: '姊夫', pinyin: 'jiěfu',     chain: '姐夫' },
  'younger_sister.husband': { zh: '妹夫', pinyin: 'mèifu',     chain: '妹夫' },

  // ── 2 steps: in-laws ────────────────────────────────────
  'husband.father':  { zh: '公公', pinyin: 'gōnggong', chain: '公公' },
  'husband.mother':  { zh: '婆婆', pinyin: 'pópo',     chain: '婆婆' },
  'wife.father':     { zh: '岳父', pinyin: 'yuèfù',    chain: '岳父' },
  'wife.mother':     { zh: '岳母', pinyin: 'yuèmǔ',    chain: '岳母' },

  // ── 2 steps: spouse's siblings ──────────────────────────
  'husband.elder_brother':   { zh: '大伯', pinyin: 'dàbó',      chain: '大伯' },
  'husband.younger_brother': { zh: '小叔', pinyin: 'xiǎoshū',   chain: '小叔' },
  'husband.elder_sister':    { zh: '大姑', pinyin: 'dàgū',      chain: '大姑' },
  'husband.younger_sister':  { zh: '小姑', pinyin: 'xiǎogū',    chain: '小姑' },
  'wife.elder_brother':      { zh: '大舅子', pinyin: 'dà jiùzi',  chain: '大舅子' },
  'wife.younger_brother':    { zh: '小舅子', pinyin: 'xiǎo jiùzi', chain: '小舅子' },
  'wife.elder_sister':       { zh: '大姨子', pinyin: 'dà yízi',   chain: '大姨子' },
  'wife.younger_sister':     { zh: '小姨子', pinyin: 'xiǎo yízi', chain: '小姨子' },

  // ── 3 steps: spouse's siblings' spouses ─────────────────
  'husband.elder_brother.wife':    { zh: '大嫂',  pinyin: 'dàsǎo',       chain: '大嫂' },
  'husband.younger_brother.wife':  { zh: '弟媳',  pinyin: 'dìxí',        chain: '弟媳' },
  'husband.elder_sister.husband':  { zh: '大姑夫', pinyin: 'dà gūfu',     chain: '大姑夫' },
  'husband.younger_sister.husband':{ zh: '小姑夫', pinyin: 'xiǎo gūfu',   chain: '小姑夫' },
  'wife.elder_brother.wife':       { zh: '大舅嫂', pinyin: 'dà jiùsǎo',   chain: '大舅嫂' },
  'wife.younger_brother.wife':     { zh: '小舅嫂', pinyin: 'xiǎo jiùsǎo', chain: '小舅嫂' },
  'wife.elder_sister.husband':     { zh: '大姨夫', pinyin: 'dàyífu',      chain: '大姨夫' },
  'wife.younger_sister.husband':   { zh: '小姨夫', pinyin: 'xiǎoyífu',    chain: '小姨夫' },

  // ── 3 steps: spouse's nieces & nephews ──────────────────
  'husband.elder_brother.son':       { zh: '姪子',   pinyin: 'zhízi'       },
  'husband.elder_brother.daughter':  { zh: '姪女',   pinyin: 'zhínǚ'       },
  'husband.younger_brother.son':     { zh: '姪子',   pinyin: 'zhízi'       },
  'husband.younger_brother.daughter':{ zh: '姪女',   pinyin: 'zhínǚ'       },
  'husband.elder_sister.son':        { zh: '外甥',   pinyin: 'wàishēng'    },
  'husband.elder_sister.daughter':   { zh: '外甥女', pinyin: 'wàishēngnǚ'  },
  'husband.younger_sister.son':      { zh: '外甥',   pinyin: 'wàishēng'    },
  'husband.younger_sister.daughter': { zh: '外甥女', pinyin: 'wàishēngnǚ'  },
  'wife.elder_brother.son':          { zh: '姪子',   pinyin: 'zhízi'       },
  'wife.elder_brother.daughter':     { zh: '姪女',   pinyin: 'zhínǚ'       },
  'wife.younger_brother.son':        { zh: '姪子',   pinyin: 'zhízi'       },
  'wife.younger_brother.daughter':   { zh: '姪女',   pinyin: 'zhínǚ'       },
  'wife.elder_sister.son':           { zh: '外甥',   pinyin: 'wàishēng'    },
  'wife.elder_sister.daughter':      { zh: '外甥女', pinyin: 'wàishēngnǚ'  },
  'wife.younger_sister.son':         { zh: '外甥',   pinyin: 'wàishēng'    },
  'wife.younger_sister.daughter':    { zh: '外甥女', pinyin: 'wàishēngnǚ'  },

  // ── 2 steps: nieces & nephews ───────────────────────────
  'elder_brother.son':      { zh: '姪子', pinyin: 'zhízi',       chain: '姪子' },
  'elder_brother.daughter': { zh: '姪女', pinyin: 'zhínǚ',       chain: '姪女' },
  'younger_brother.son':    { zh: '姪子', pinyin: 'zhízi',       chain: '姪子' },
  'younger_brother.daughter':{ zh: '姪女', pinyin: 'zhínǚ',      chain: '姪女' },
  'elder_sister.son':       { zh: '外甥', pinyin: 'wàishēng',    chain: '外甥' },
  'elder_sister.daughter':  { zh: '外甥女', pinyin: 'wàishēngnǚ', chain: '外甥女' },
  'younger_sister.son':     { zh: '外甥', pinyin: 'wàishēng',    chain: '外甥' },
  'younger_sister.daughter':{ zh: '外甥女', pinyin: 'wàishēngnǚ', chain: '外甥女' },

  // ── 2 steps: children's spouses ─────────────────────────
  'son.wife':         { zh: '媳婦', pinyin: 'xífù',    chain: '媳婦' },
  'daughter.husband': { zh: '女婿', pinyin: 'nǚxu',    chain: '女婿' },

  // ── 2 steps: grandchildren ──────────────────────────────
  'son.son':         { zh: '孫子', pinyin: 'sūnzi',    chain: '孫子' },
  'son.daughter':    { zh: '孫女', pinyin: 'sūnnǚ',    chain: '孫女' },
  'daughter.son':    { zh: '外孫', pinyin: 'wàisūn',   chain: '外孫' },
  'daughter.daughter':{ zh: '外孫女', pinyin: 'wàisūnnǚ', chain: '外孫女' },

  // ── 3 steps: grandchildren's spouses ────────────────────
  'son.son.wife':              { zh: '孫媳婦',  pinyin: 'sūn xífù',       chain: '孫媳婦' },
  'son.daughter.husband':      { zh: '孫女婿',  pinyin: 'sūnnǚxu',        chain: '孫女婿' },
  'daughter.son.wife':         { zh: '外孫媳婦', pinyin: 'wàisūn xífù',   chain: '外孫媳婦' },
  'daughter.daughter.husband': { zh: '外孫女婿', pinyin: 'wàisūnnǚxu',    chain: '外孫女婿' },

  // ── 3 steps: great-grandchildren ────────────────────────
  'son.son.son':               { zh: '曾孫',     pinyin: 'zēngsūn',            chain: '曾孫' },
  'son.son.daughter':          { zh: '曾孫女',   pinyin: 'zēngsūnnǚ',          chain: '曾孫女' },
  'son.daughter.son':          { zh: '曾外孫',   pinyin: 'zēng wàisūn',        chain: '曾外孫' },
  'son.daughter.daughter':     { zh: '曾外孫女', pinyin: 'zēng wàisūnnǚ',      chain: '曾外孫女' },
  'daughter.son.son':          { zh: '外曾孫',   pinyin: 'wài zēngsūn',        chain: '外曾孫' },
  'daughter.son.daughter':     { zh: '外曾孫女', pinyin: 'wài zēngsūnnǚ',      chain: '外曾孫女' },
  'daughter.daughter.son':     { zh: '外曾外孫', pinyin: 'wài zēng wàisūn',    chain: '外曾外孫' },
  'daughter.daughter.daughter':{ zh: '外曾外孫女', pinyin: 'wài zēng wàisūnnǚ', chain: '外曾外孫女' },

  // ── 3 steps: paternal cousins (堂) — age-dependent ──────
  'father.elder_brother.son':        { ageDependent: true, older: { zh: '堂兄', pinyin: 'táng xiōng' }, younger: { zh: '堂弟', pinyin: 'táng dì' } },
  'father.elder_brother.daughter':   { ageDependent: true, older: { zh: '堂姐', pinyin: 'táng jiě'  }, younger: { zh: '堂妹', pinyin: 'táng mèi' } },
  'father.younger_brother.son':      { ageDependent: true, older: { zh: '堂兄', pinyin: 'táng xiōng' }, younger: { zh: '堂弟', pinyin: 'táng dì' } },
  'father.younger_brother.daughter': { ageDependent: true, older: { zh: '堂姐', pinyin: 'táng jiě'  }, younger: { zh: '堂妹', pinyin: 'táng mèi' } },
  'father.elder_sister.son':         { ageDependent: true, older: { zh: '表兄', pinyin: 'biǎo xiōng' }, younger: { zh: '表弟', pinyin: 'biǎo dì' } },
  'father.elder_sister.daughter':    { ageDependent: true, older: { zh: '表姐', pinyin: 'biǎo jiě'  }, younger: { zh: '表妹', pinyin: 'biǎo mèi' } },
  'father.younger_sister.son':       { ageDependent: true, older: { zh: '表兄', pinyin: 'biǎo xiōng' }, younger: { zh: '表弟', pinyin: 'biǎo dì' } },
  'father.younger_sister.daughter':  { ageDependent: true, older: { zh: '表姐', pinyin: 'biǎo jiě'  }, younger: { zh: '表妹', pinyin: 'biǎo mèi' } },

  // ── 3 steps: maternal cousins (表) — age-dependent ──────
  'mother.elder_brother.son':        { ageDependent: true, older: { zh: '表兄', pinyin: 'biǎo xiōng' }, younger: { zh: '表弟', pinyin: 'biǎo dì' } },
  'mother.elder_brother.daughter':   { ageDependent: true, older: { zh: '表姐', pinyin: 'biǎo jiě'  }, younger: { zh: '表妹', pinyin: 'biǎo mèi' } },
  'mother.younger_brother.son':      { ageDependent: true, older: { zh: '表兄', pinyin: 'biǎo xiōng' }, younger: { zh: '表弟', pinyin: 'biǎo dì' } },
  'mother.younger_brother.daughter': { ageDependent: true, older: { zh: '表姐', pinyin: 'biǎo jiě'  }, younger: { zh: '表妹', pinyin: 'biǎo mèi' } },
  'mother.elder_sister.son':         { ageDependent: true, older: { zh: '表兄', pinyin: 'biǎo xiōng' }, younger: { zh: '表弟', pinyin: 'biǎo dì' } },
  'mother.elder_sister.daughter':    { ageDependent: true, older: { zh: '表姐', pinyin: 'biǎo jiě'  }, younger: { zh: '表妹', pinyin: 'biǎo mèi' } },
  'mother.younger_sister.son':       { ageDependent: true, older: { zh: '表兄', pinyin: 'biǎo xiōng' }, younger: { zh: '表弟', pinyin: 'biǎo dì' } },
  'mother.younger_sister.daughter':  { ageDependent: true, older: { zh: '表姐', pinyin: 'biǎo jiě'  }, younger: { zh: '表妹', pinyin: 'biǎo mèi' } },

  // ── 4 steps: paternal uncle's children's children ────────
  // Son's children → 堂姪/堂姪女; daughter's children → 堂外甥/堂外甥女
  'father.elder_brother.son.son':           { zh: '堂姪',   pinyin: 'táng zhí'        },
  'father.elder_brother.son.daughter':      { zh: '堂姪女', pinyin: 'táng zhínǚ'      },
  'father.elder_brother.daughter.son':      { zh: '堂外甥',  pinyin: 'táng wàishēng'  },
  'father.elder_brother.daughter.daughter': { zh: '堂外甥女', pinyin: 'táng wàishēngnǚ' },
  'father.younger_brother.son.son':         { zh: '堂姪',   pinyin: 'táng zhí'        },
  'father.younger_brother.son.daughter':    { zh: '堂姪女', pinyin: 'táng zhínǚ'      },
  'father.younger_brother.daughter.son':    { zh: '堂外甥',  pinyin: 'táng wàishēng'  },
  'father.younger_brother.daughter.daughter':{ zh: '堂外甥女', pinyin: 'táng wàishēngnǚ' },

  // ── 4 steps: paternal aunt's / all maternal cousins' children (表) ─
  // Son's children → 表姪/表姪女; daughter's children → 表外甥/表外甥女
  'father.elder_sister.son.son':            { zh: '表姪',   pinyin: 'biǎo zhí'        },
  'father.elder_sister.son.daughter':       { zh: '表姪女', pinyin: 'biǎo zhínǚ'      },
  'father.elder_sister.daughter.son':       { zh: '表外甥',  pinyin: 'biǎo wàishēng'  },
  'father.elder_sister.daughter.daughter':  { zh: '表外甥女', pinyin: 'biǎo wàishēngnǚ' },
  'father.younger_sister.son.son':          { zh: '表姪',   pinyin: 'biǎo zhí'        },
  'father.younger_sister.son.daughter':     { zh: '表姪女', pinyin: 'biǎo zhínǚ'      },
  'father.younger_sister.daughter.son':     { zh: '表外甥',  pinyin: 'biǎo wàishēng'  },
  'father.younger_sister.daughter.daughter':{ zh: '表外甥女', pinyin: 'biǎo wàishēngnǚ' },
  'mother.elder_brother.son.son':           { zh: '表姪',   pinyin: 'biǎo zhí'        },
  'mother.elder_brother.son.daughter':      { zh: '表姪女', pinyin: 'biǎo zhínǚ'      },
  'mother.elder_brother.daughter.son':      { zh: '表外甥',  pinyin: 'biǎo wàishēng'  },
  'mother.elder_brother.daughter.daughter': { zh: '表外甥女', pinyin: 'biǎo wàishēngnǚ' },
  'mother.younger_brother.son.son':         { zh: '表姪',   pinyin: 'biǎo zhí'        },
  'mother.younger_brother.son.daughter':    { zh: '表姪女', pinyin: 'biǎo zhínǚ'      },
  'mother.younger_brother.daughter.son':    { zh: '表外甥',  pinyin: 'biǎo wàishēng'  },
  'mother.younger_brother.daughter.daughter':{ zh: '表外甥女', pinyin: 'biǎo wàishēngnǚ' },
  'mother.elder_sister.son.son':            { zh: '表姪',   pinyin: 'biǎo zhí'        },
  'mother.elder_sister.son.daughter':       { zh: '表姪女', pinyin: 'biǎo zhínǚ'      },
  'mother.elder_sister.daughter.son':       { zh: '表外甥',  pinyin: 'biǎo wàishēng'  },
  'mother.elder_sister.daughter.daughter':  { zh: '表外甥女', pinyin: 'biǎo wàishēngnǚ' },
  'mother.younger_sister.son.son':          { zh: '表姪',   pinyin: 'biǎo zhí'        },
  'mother.younger_sister.son.daughter':     { zh: '表姪女', pinyin: 'biǎo zhínǚ'      },
  'mother.younger_sister.daughter.son':     { zh: '表外甥',  pinyin: 'biǎo wàishēng'  },
  'mother.younger_sister.daughter.daughter':{ zh: '表外甥女', pinyin: 'biǎo wàishēngnǚ' },

  // ── 4 steps: paternal cousin spouses (堂) — age-dependent
  'father.elder_brother.son.wife':         { ageDependent: true, older: { zh: '堂嫂',  pinyin: 'táng sǎo'  }, younger: { zh: '堂弟媳', pinyin: 'táng dìxí'  } },
  'father.elder_brother.daughter.husband': { ageDependent: true, older: { zh: '堂姐夫', pinyin: 'táng jiěfu' }, younger: { zh: '堂妹夫', pinyin: 'táng mèifu' } },
  'father.younger_brother.son.wife':       { ageDependent: true, older: { zh: '堂嫂',  pinyin: 'táng sǎo'  }, younger: { zh: '堂弟媳', pinyin: 'táng dìxí'  } },
  'father.younger_brother.daughter.husband':{ ageDependent: true, older: { zh: '堂姐夫', pinyin: 'táng jiěfu' }, younger: { zh: '堂妹夫', pinyin: 'táng mèifu' } },

  // ── 4 steps: paternal cross-cousin spouses (表) — age-dependent
  'father.elder_sister.son.wife':          { ageDependent: true, older: { zh: '表嫂',  pinyin: 'biǎo sǎo'  }, younger: { zh: '表弟媳', pinyin: 'biǎo dìxí'  } },
  'father.elder_sister.daughter.husband':  { ageDependent: true, older: { zh: '表姐夫', pinyin: 'biǎo jiěfu' }, younger: { zh: '表妹夫', pinyin: 'biǎo mèifu' } },
  'father.younger_sister.son.wife':        { ageDependent: true, older: { zh: '表嫂',  pinyin: 'biǎo sǎo'  }, younger: { zh: '表弟媳', pinyin: 'biǎo dìxí'  } },
  'father.younger_sister.daughter.husband':{ ageDependent: true, older: { zh: '表姐夫', pinyin: 'biǎo jiěfu' }, younger: { zh: '表妹夫', pinyin: 'biǎo mèifu' } },

  // ── 4 steps: maternal cousin spouses (表) — age-dependent
  'mother.elder_brother.son.wife':         { ageDependent: true, older: { zh: '表嫂',  pinyin: 'biǎo sǎo'  }, younger: { zh: '表弟媳', pinyin: 'biǎo dìxí'  } },
  'mother.elder_brother.daughter.husband': { ageDependent: true, older: { zh: '表姐夫', pinyin: 'biǎo jiěfu' }, younger: { zh: '表妹夫', pinyin: 'biǎo mèifu' } },
  'mother.younger_brother.son.wife':       { ageDependent: true, older: { zh: '表嫂',  pinyin: 'biǎo sǎo'  }, younger: { zh: '表弟媳', pinyin: 'biǎo dìxí'  } },
  'mother.younger_brother.daughter.husband':{ ageDependent: true, older: { zh: '表姐夫', pinyin: 'biǎo jiěfu' }, younger: { zh: '表妹夫', pinyin: 'biǎo mèifu' } },
  'mother.elder_sister.son.wife':          { ageDependent: true, older: { zh: '表嫂',  pinyin: 'biǎo sǎo'  }, younger: { zh: '表弟媳', pinyin: 'biǎo dìxí'  } },
  'mother.elder_sister.daughter.husband':  { ageDependent: true, older: { zh: '表姐夫', pinyin: 'biǎo jiěfu' }, younger: { zh: '表妹夫', pinyin: 'biǎo mèifu' } },
  'mother.younger_sister.son.wife':        { ageDependent: true, older: { zh: '表嫂',  pinyin: 'biǎo sǎo'  }, younger: { zh: '表弟媳', pinyin: 'biǎo dìxí'  } },
  'mother.younger_sister.daughter.husband':{ ageDependent: true, older: { zh: '表姐夫', pinyin: 'biǎo jiěfu' }, younger: { zh: '表妹夫', pinyin: 'biǎo mèifu' } },

  // ── 3 steps: niece/nephew spouses ───────────────────────
  'elder_brother.son.wife':       { zh: '姪媳',   pinyin: 'zhíxí'    },
  'elder_brother.daughter.husband':{ zh: '姪女婿', pinyin: 'zhínǚxu'  },
  'younger_brother.son.wife':     { zh: '姪媳',   pinyin: 'zhíxí'    },
  'younger_brother.daughter.husband':{ zh: '姪女婿', pinyin: 'zhínǚxu' },
  'elder_sister.son.wife':        { zh: '外甥媳', pinyin: 'wàishēngxí'  },
  'elder_sister.daughter.husband':{ zh: '外甥女婿', pinyin: 'wàishēngnǚxu' },
  'younger_sister.son.wife':      { zh: '外甥媳', pinyin: 'wàishēngxí'  },
  'younger_sister.daughter.husband':{ zh: '外甥女婿', pinyin: 'wàishēngnǚxu' },

  // ── 4 steps: grand-nieces & grand-nephews ───────────────
  'elder_brother.son.son':              { zh: '姪孫',     pinyin: 'zhí sūn'              },
  'elder_brother.son.daughter':         { zh: '姪孫女',   pinyin: 'zhí sūnnǚ'            },
  'elder_brother.daughter.son':         { zh: '姪外孫',   pinyin: 'zhí wàisūn'           },
  'elder_brother.daughter.daughter':    { zh: '姪外孫女', pinyin: 'zhí wàisūnnǚ'         },
  'younger_brother.son.son':            { zh: '姪孫',     pinyin: 'zhí sūn'              },
  'younger_brother.son.daughter':       { zh: '姪孫女',   pinyin: 'zhí sūnnǚ'            },
  'younger_brother.daughter.son':       { zh: '姪外孫',   pinyin: 'zhí wàisūn'           },
  'younger_brother.daughter.daughter':  { zh: '姪外孫女', pinyin: 'zhí wàisūnnǚ'         },
  'elder_sister.son.son':               { zh: '外甥孫',   pinyin: 'wàishēng sūn'         },
  'elder_sister.son.daughter':          { zh: '外甥孫女', pinyin: 'wàishēng sūnnǚ'       },
  'elder_sister.daughter.son':          { zh: '外甥外孫', pinyin: 'wàishēng wàisūn'      },
  'elder_sister.daughter.daughter':     { zh: '外甥外孫女', pinyin: 'wàishēng wàisūnnǚ'  },
  'younger_sister.son.son':             { zh: '外甥孫',   pinyin: 'wàishēng sūn'         },
  'younger_sister.son.daughter':        { zh: '外甥孫女', pinyin: 'wàishēng sūnnǚ'       },
  'younger_sister.daughter.son':        { zh: '外甥外孫', pinyin: 'wàishēng wàisūn'      },
  'younger_sister.daughter.daughter':   { zh: '外甥外孫女', pinyin: 'wàishēng wàisūnnǚ'  },

  // ── 3 steps: great-grandparents ─────────────────────────
  'father.father.father': { zh: '曾祖父', pinyin: 'zēngzǔfù', chain: '太爺爺' },
  'father.father.mother': { zh: '曾祖母', pinyin: 'zēngzǔmǔ', chain: '太奶奶' },
  'mother.mother.father': { zh: '外曾祖父', pinyin: 'wài zēngzǔfù', chain: '太外公' },
  'mother.mother.mother': { zh: '外曾祖母', pinyin: 'wài zēngzǔmǔ', chain: '太外婆' },
  'father.mother.father': { zh: '外曾祖父', pinyin: 'wài zēngzǔfù', chain: '太公' },
  'father.mother.mother': { zh: '外曾祖母', pinyin: 'wài zēngzǔmǔ', chain: '太婆' },
  'mother.father.father': { zh: '外曾祖父', pinyin: 'wài zēngzǔfù', chain: '太外公' },
  'mother.father.mother': { zh: '外曾祖母', pinyin: 'wài zēngzǔmǔ', chain: '太外婆' },
};

export const zhButtons = [
  { key: 'father',          label: '父', pinyin: 'fù',    chain: '爸爸' },
  { key: 'mother',          label: '母', pinyin: 'mǔ',    chain: '媽媽' },
  { key: 'husband',         label: '夫', pinyin: 'fū',    chain: '丈夫' },
  { key: 'wife',            label: '妻', pinyin: 'qī',    chain: '妻子' },
  { key: 'elder_brother',   label: '兄', pinyin: 'xiōng', chain: '哥哥' },
  { key: 'younger_brother', label: '弟', pinyin: 'dì',    chain: '弟弟' },
  { key: 'elder_sister',    label: '姐', pinyin: 'jiě',   chain: '姐姐' },
  { key: 'younger_sister',  label: '妹', pinyin: 'mèi',   chain: '妹妹' },
  { key: 'son',             label: '子', pinyin: 'zǐ',    chain: '兒子' },
  { key: 'daughter',        label: '女', pinyin: 'nǚ',    chain: '女兒' },
];
