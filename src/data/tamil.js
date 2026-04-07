// Tamil relationship lookup table
// key: dot-joined path of relation keys
// ta: Tamil script term, roman: romanization (ISO 15919 / practical)

export const tamilRelationships = {
  // ── 1 step ──────────────────────────────────────────────
  'father':          { ta: 'அப்பா',    roman: 'Appā' },
  'mother':          { ta: 'அம்மா',    roman: 'Ammā' },
  'husband':         { ta: 'கணவன்',   roman: 'Kaṇavaṉ' },
  'wife':            { ta: 'மனைவி',   roman: 'Maṉaivi' },
  'elder_brother':   { ta: 'அண்ணன்',  roman: 'Aṇṇaṉ' },
  'younger_brother': { ta: 'தம்பி',    roman: 'Tampi' },
  'elder_sister':    { ta: 'அக்கா',    roman: 'Akkā' },
  'younger_sister':  { ta: 'தங்கை',   roman: 'Taṅkai' },
  'son':             { ta: 'மகன்',     roman: 'Makaṉ' },
  'daughter':        { ta: 'மகள்',     roman: 'Makaḷ' },

  // ── 2 steps: grandparents ───────────────────────────────
  'father.father':   { ta: 'தாத்தா',  roman: 'Tāttā' },
  'father.mother':   { ta: 'பாட்டி',   roman: 'Pāṭṭi' },
  'mother.father':   { ta: 'தாத்தா',  roman: 'Tāttā' },
  'mother.mother':   { ta: 'பாட்டி',   roman: 'Pāṭṭi' },

  // ── 2 steps: paternal aunts / uncles ────────────────────
  'father.elder_brother':   { ta: 'பெரியப்பா', roman: 'Periyappā' },
  'father.younger_brother': { ta: 'சித்தப்பா', roman: 'Cittappā' },
  'father.elder_sister':    { ta: 'அத்தை',     roman: 'Attai' },
  'father.younger_sister':  { ta: 'அத்தை',     roman: 'Attai' },

  // ── 2 steps: maternal aunts / uncles ────────────────────
  'mother.elder_brother':   { ta: 'மாமா',       roman: 'Māmā' },
  'mother.younger_brother': { ta: 'மாமா',       roman: 'Māmā' },
  'mother.elder_sister':    { ta: 'பெரியம்மா', roman: 'Periyammā' },
  'mother.younger_sister':  { ta: 'சித்தி',     roman: 'Citti' },

  // ── 2 steps: aunt/uncle spouses ─────────────────────────
  'father.elder_brother.wife':    { ta: 'பெரியம்மா', roman: 'Periyammā' },
  'father.younger_brother.wife':  { ta: 'சித்தி',     roman: 'Citti' },
  'father.elder_sister.husband':  { ta: 'அத்தை மாமா', roman: 'Attai Māmā' },
  'father.younger_sister.husband':{ ta: 'அத்தை மாமா', roman: 'Attai Māmā' },
  'mother.elder_brother.wife':    { ta: 'மாமி',       roman: 'Māmi' },
  'mother.younger_brother.wife':  { ta: 'மாமி',       roman: 'Māmi' },
  'mother.elder_sister.husband':  { ta: 'பெரியப்பா', roman: 'Periyappā' },
  'mother.younger_sister.husband':{ ta: 'சித்தப்பா', roman: 'Cittappā' },

  // ── 2 steps: siblings' spouses ──────────────────────────
  'elder_brother.wife':     { ta: 'அண்ணி',    roman: 'Aṇṇi',       colloquial: 'மன்னி',      colloquialRoman: 'Maṇṇi' },
  'younger_brother.wife':   { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'elder_sister.husband':   { ta: 'மாமா',     roman: 'Māmā' },
  'younger_sister.husband': { ta: 'மாமா',     roman: 'Māmā' },

  // ── 2 steps: in-laws ────────────────────────────────────
  'husband.father':  { ta: 'மாமனார்', roman: 'Māmaṉār', colloquial: 'மாமா',  colloquialRoman: 'Māmā' },
  'husband.mother':  { ta: 'மாமியார்', roman: 'Māmiyār', colloquial: 'மாமி',  colloquialRoman: 'Māmi' },
  'wife.father':     { ta: 'மாமனார்', roman: 'Māmaṉār', colloquial: 'மாமா',  colloquialRoman: 'Māmā' },
  'wife.mother':     { ta: 'மாமியார்', roman: 'Māmiyār', colloquial: 'மாமி',  colloquialRoman: 'Māmi' },

  // ── 2 steps: spouse's siblings ──────────────────────────
  'husband.elder_brother':   { ta: 'மைத்துனன்', roman: 'Maitthuṉaṉ' },
  'husband.younger_brother': { ta: 'மைத்துனன்', roman: 'Maitthuṉaṉ' },
  'husband.elder_sister':    { ta: 'நாத்தனார்',  roman: 'Nāttaṉār',  colloquial: 'நாத்தி', colloquialRoman: 'Nātti' },
  'husband.younger_sister':  { ta: 'நாத்தனார்',  roman: 'Nāttaṉār',  colloquial: 'நாத்தி', colloquialRoman: 'Nātti' },
  'wife.elder_brother':      { ta: 'மைத்துனன்', roman: 'Maitthuṉaṉ' },
  'wife.younger_brother':    { ta: 'மைத்துனன்', roman: 'Maitthuṉaṉ' },
  'wife.elder_sister':       { ta: 'மைத்துனி',  roman: 'Maitthuṉi'  },
  'wife.younger_sister':     { ta: 'மைத்துனி',  roman: 'Maitthuṉi'  },

  // ── 3 steps: spouse's siblings' spouses ─────────────────
  'husband.elder_brother.wife':    { ta: 'நாத்தனார்', roman: 'Nāttaṉār', colloquial: 'நாத்தி', colloquialRoman: 'Nātti' },
  'husband.younger_brother.wife':  { ta: 'நாத்தனார்', roman: 'Nāttaṉār', colloquial: 'நாத்தி', colloquialRoman: 'Nātti' },
  'husband.elder_sister.husband':  { ta: 'மைத்துனன்', roman: 'Maitthuṉaṉ' },
  'husband.younger_sister.husband':{ ta: 'மைத்துனன்', roman: 'Maitthuṉaṉ' },
  'wife.elder_brother.wife':       { ta: 'மைத்துனி',  roman: 'Maitthuṉi' },
  'wife.younger_brother.wife':     { ta: 'மைத்துனி',  roman: 'Maitthuṉi' },
  'wife.elder_sister.husband':     { ta: 'மைத்துனன்', roman: 'Maitthuṉaṉ' },
  'wife.younger_sister.husband':   { ta: 'மைத்துனன்', roman: 'Maitthuṉaṉ' },

  // ── 3 steps: spouse's nieces & nephews ──────────────────
  'husband.elder_brother.son':       { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'husband.elder_brother.daughter':  { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'husband.younger_brother.son':     { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'husband.younger_brother.daughter':{ ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'husband.elder_sister.son':        { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'husband.elder_sister.daughter':   { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'husband.younger_sister.son':      { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'husband.younger_sister.daughter': { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'wife.elder_brother.son':          { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'wife.elder_brother.daughter':     { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'wife.younger_brother.son':        { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'wife.younger_brother.daughter':   { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'wife.elder_sister.son':           { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'wife.elder_sister.daughter':      { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'wife.younger_sister.son':         { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'wife.younger_sister.daughter':    { ta: 'மருமகள்', roman: 'Marumakaḷ' },

  // ── 2 steps: nieces & nephews ───────────────────────────
  'elder_brother.son':       { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'elder_brother.daughter':  { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'younger_brother.son':     { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'younger_brother.daughter':{ ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'elder_sister.son':        { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'elder_sister.daughter':   { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'younger_sister.son':      { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'younger_sister.daughter': { ta: 'மருமகள்', roman: 'Marumakaḷ' },

  // ── 2 steps: children's spouses ─────────────────────────
  'son.wife':         { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'daughter.husband': { ta: 'மருமகன்', roman: 'Marumakaṉ' },

  // ── 2 steps: grandchildren ──────────────────────────────
  'son.son':          { ta: 'பேரன்', roman: 'Pēraṉ' },
  'son.daughter':     { ta: 'பேத்தி', roman: 'Pētti' },
  'daughter.son':     { ta: 'பேரன்', roman: 'Pēraṉ' },
  'daughter.daughter':{ ta: 'பேத்தி', roman: 'Pētti' },

  // ── 3 steps: grandchildren's spouses ────────────────────
  'son.son.wife':              { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'son.daughter.husband':      { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'daughter.son.wife':         { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'daughter.daughter.husband': { ta: 'மருமகன்', roman: 'Marumakaṉ' },

  // ── 3 steps: great-grandchildren ────────────────────────
  'son.son.son':               { ta: 'கொள்ளுப் பேரன்', roman: 'Koḷḷup Pēraṉ' },
  'son.son.daughter':          { ta: 'கொள்ளுப் பேத்தி', roman: 'Koḷḷup Pētti' },
  'son.daughter.son':          { ta: 'கொள்ளுப் பேரன்', roman: 'Koḷḷup Pēraṉ' },
  'son.daughter.daughter':     { ta: 'கொள்ளுப் பேத்தி', roman: 'Koḷḷup Pētti' },
  'daughter.son.son':          { ta: 'கொள்ளுப் பேரன்', roman: 'Koḷḷup Pēraṉ' },
  'daughter.son.daughter':     { ta: 'கொள்ளுப் பேத்தி', roman: 'Koḷḷup Pētti' },
  'daughter.daughter.son':     { ta: 'கொள்ளுப் பேரன்', roman: 'Koḷḷup Pēraṉ' },
  'daughter.daughter.daughter':{ ta: 'கொள்ளுப் பேத்தி', roman: 'Koḷḷup Pētti' },

  // ── 3 steps: parallel cousins — age-dependent ───────────
  'father.elder_brother.son':        { ageDependent: true, older: { ta: 'அண்ணன்', roman: 'Aṇṇaṉ' }, younger: { ta: 'தம்பி',  roman: 'Tampi'  } },
  'father.elder_brother.daughter':   { ageDependent: true, older: { ta: 'அக்கா',   roman: 'Akkā'   }, younger: { ta: 'தங்கை', roman: 'Taṅkai' } },
  'father.younger_brother.son':      { ageDependent: true, older: { ta: 'அண்ணன்', roman: 'Aṇṇaṉ' }, younger: { ta: 'தம்பி',  roman: 'Tampi'  } },
  'father.younger_brother.daughter': { ageDependent: true, older: { ta: 'அக்கா',   roman: 'Akkā'   }, younger: { ta: 'தங்கை', roman: 'Taṅkai' } },
  'mother.elder_sister.son':         { ageDependent: true, older: { ta: 'அண்ணன்', roman: 'Aṇṇaṉ' }, younger: { ta: 'தம்பி',  roman: 'Tampi'  } },
  'mother.elder_sister.daughter':    { ageDependent: true, older: { ta: 'அக்கா',   roman: 'Akkā'   }, younger: { ta: 'தங்கை', roman: 'Taṅkai' } },
  'mother.younger_sister.son':       { ageDependent: true, older: { ta: 'அண்ணன்', roman: 'Aṇṇaṉ' }, younger: { ta: 'தம்பி',  roman: 'Tampi'  } },
  'mother.younger_sister.daughter':  { ageDependent: true, older: { ta: 'அக்கா',   roman: 'Akkā'   }, younger: { ta: 'தங்கை', roman: 'Taṅkai' } },

  // ── 3 steps: cross cousins (மச்சான்/மச்சினி) ──────────
  // Father's sister's children & mother's brother's children
  'father.elder_sister.son':         { ta: 'மச்சான்',  roman: 'Maccāṉ' },
  'father.elder_sister.daughter':    { ta: 'மச்சினி', roman: 'Maccini' },
  'father.younger_sister.son':       { ta: 'மச்சான்',  roman: 'Maccāṉ' },
  'father.younger_sister.daughter':  { ta: 'மச்சினி', roman: 'Maccini' },
  'mother.elder_brother.son':        { ta: 'மச்சான்',  roman: 'Maccāṉ' },
  'mother.elder_brother.daughter':   { ta: 'மச்சினி', roman: 'Maccini' },
  'mother.younger_brother.son':      { ta: 'மச்சான்',  roman: 'Maccāṉ' },
  'mother.younger_brother.daughter': { ta: 'மச்சினி', roman: 'Maccini' },

  // ── 4 steps: parallel cousin's children ─────────────────
  // Parallel cousins are treated as siblings, so their children = niece/nephew (மருமகன்/மருமகள்)
  'father.elder_brother.son.son':            { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'father.elder_brother.son.daughter':       { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'father.elder_brother.daughter.son':       { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'father.elder_brother.daughter.daughter':  { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'father.younger_brother.son.son':          { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'father.younger_brother.son.daughter':     { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'father.younger_brother.daughter.son':     { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'father.younger_brother.daughter.daughter':{ ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'mother.elder_sister.son.son':             { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'mother.elder_sister.son.daughter':        { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'mother.elder_sister.daughter.son':        { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'mother.elder_sister.daughter.daughter':   { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'mother.younger_sister.son.son':           { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'mother.younger_sister.son.daughter':      { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'mother.younger_sister.daughter.son':      { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'mother.younger_sister.daughter.daughter': { ta: 'மருமகள்', roman: 'Marumakaḷ' },

  // ── 4 steps: cross-cousin's children ─────────────────────
  // மச்சான்/மச்சினி's children follow the same niece/nephew pattern
  'father.elder_sister.son.son':             { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'father.elder_sister.son.daughter':        { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'father.elder_sister.daughter.son':        { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'father.elder_sister.daughter.daughter':   { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'father.younger_sister.son.son':           { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'father.younger_sister.son.daughter':      { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'father.younger_sister.daughter.son':      { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'father.younger_sister.daughter.daughter': { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'mother.elder_brother.son.son':            { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'mother.elder_brother.son.daughter':       { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'mother.elder_brother.daughter.son':       { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'mother.elder_brother.daughter.daughter':  { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'mother.younger_brother.son.son':          { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'mother.younger_brother.son.daughter':     { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'mother.younger_brother.daughter.son':     { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'mother.younger_brother.daughter.daughter':{ ta: 'மருமகள்', roman: 'Marumakaḷ' },

  // ── 4 steps: parallel cousin spouses — age-dependent ────
  // (parallel cousins are treated as siblings, so their spouses follow sibling-spouse terms)
  'father.elder_brother.son.wife':          { ageDependent: true, older: { ta: 'அண்ணி',        roman: 'Aṇṇi',         colloquial: 'மன்னி',      colloquialRoman: 'Maṇṇi'         }, younger: { ta: 'தம்பி மனைவி',  roman: 'Tampi Maṉaivi'  } },
  'father.elder_brother.daughter.husband':  { ageDependent: true, older: { ta: 'அக்கா கணவன்', roman: 'Akkā Kaṇavaṉ'                                                               }, younger: { ta: 'தங்கை கணவன்', roman: 'Taṅkai Kaṇavaṉ' } },
  'father.younger_brother.son.wife':        { ageDependent: true, older: { ta: 'அண்ணி',        roman: 'Aṇṇi',         colloquial: 'மன்னி',      colloquialRoman: 'Maṇṇi'         }, younger: { ta: 'தம்பி மனைவி',  roman: 'Tampi Maṉaivi'  } },
  'father.younger_brother.daughter.husband':{ ageDependent: true, older: { ta: 'அக்கா கணவன்', roman: 'Akkā Kaṇavaṉ'                                                               }, younger: { ta: 'தங்கை கணவன்', roman: 'Taṅkai Kaṇavaṉ' } },
  'mother.elder_sister.son.wife':           { ageDependent: true, older: { ta: 'அண்ணி',        roman: 'Aṇṇi',         colloquial: 'மன்னி',      colloquialRoman: 'Maṇṇi'         }, younger: { ta: 'தம்பி மனைவி',  roman: 'Tampi Maṉaivi'  } },
  'mother.elder_sister.daughter.husband':   { ageDependent: true, older: { ta: 'அக்கா கணவன்', roman: 'Akkā Kaṇavaṉ'                                                               }, younger: { ta: 'தங்கை கணவன்', roman: 'Taṅkai Kaṇavaṉ' } },
  'mother.younger_sister.son.wife':         { ageDependent: true, older: { ta: 'அண்ணி',        roman: 'Aṇṇi',         colloquial: 'மன்னி',      colloquialRoman: 'Maṇṇi'         }, younger: { ta: 'தம்பி மனைவி',  roman: 'Tampi Maṉaivi'  } },
  'mother.younger_sister.daughter.husband': { ageDependent: true, older: { ta: 'அக்கா கணவன்', roman: 'Akkā Kaṇavaṉ'                                                               }, younger: { ta: 'தங்கை கணவன்', roman: 'Taṅkai Kaṇavaṉ' } },

  // ── 4 steps: cross-cousin spouses ───────────────────────
  // மச்சான் (cross cousin) → his wife is மச்சினி; மச்சினி → her husband is மச்சான்
  'father.elder_sister.son.wife':           { ta: 'மச்சினி',  roman: 'Maccini' },
  'father.elder_sister.daughter.husband':   { ta: 'மச்சான்',  roman: 'Maccāṉ'  },
  'father.younger_sister.son.wife':         { ta: 'மச்சினி',  roman: 'Maccini' },
  'father.younger_sister.daughter.husband': { ta: 'மச்சான்',  roman: 'Maccāṉ'  },
  'mother.elder_brother.son.wife':          { ta: 'மச்சினி',  roman: 'Maccini' },
  'mother.elder_brother.daughter.husband':  { ta: 'மச்சான்',  roman: 'Maccāṉ'  },
  'mother.younger_brother.son.wife':        { ta: 'மச்சினி',  roman: 'Maccini' },
  'mother.younger_brother.daughter.husband':{ ta: 'மச்சான்',  roman: 'Maccāṉ'  },

  // ── 3 steps: niece/nephew spouses ───────────────────────
  'elder_brother.son.wife':          { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'elder_brother.daughter.husband':  { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'younger_brother.son.wife':        { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'younger_brother.daughter.husband':{ ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'elder_sister.son.wife':           { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'elder_sister.daughter.husband':   { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'younger_sister.son.wife':         { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'younger_sister.daughter.husband': { ta: 'மருமகன்', roman: 'Marumakaṉ' },

  // ── 4 steps: grand-nieces & grand-nephews ───────────────
  'elder_brother.son.son':              { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'elder_brother.son.daughter':         { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'elder_brother.daughter.son':         { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'elder_brother.daughter.daughter':    { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'younger_brother.son.son':            { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'younger_brother.son.daughter':       { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'younger_brother.daughter.son':       { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'younger_brother.daughter.daughter':  { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'elder_sister.son.son':               { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'elder_sister.son.daughter':          { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'elder_sister.daughter.son':          { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'elder_sister.daughter.daughter':     { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'younger_sister.son.son':             { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'younger_sister.son.daughter':        { ta: 'மருமகள்', roman: 'Marumakaḷ' },
  'younger_sister.daughter.son':        { ta: 'மருமகன்', roman: 'Marumakaṉ' },
  'younger_sister.daughter.daughter':   { ta: 'மருமகள்', roman: 'Marumakaḷ' },

  // ── 3 steps: great-grandparents ─────────────────────────
  'father.father.father': { ta: 'கொள்ளுப் பாட்டன்', roman: 'Koḷḷup Pāṭṭaṉ' },
  'father.father.mother': { ta: 'கொள்ளுப் பாட்டி',  roman: 'Koḷḷup Pāṭṭi' },
  'mother.mother.father': { ta: 'கொள்ளுப் பாட்டன்', roman: 'Koḷḷup Pāṭṭaṉ' },
  'mother.mother.mother': { ta: 'கொள்ளுப் பாட்டி',  roman: 'Koḷḷup Pāṭṭi' },
  'father.mother.father': { ta: 'கொள்ளுப் பாட்டன்', roman: 'Koḷḷup Pāṭṭaṉ' },
  'father.mother.mother': { ta: 'கொள்ளுப் பாட்டி',  roman: 'Koḷḷup Pāṭṭi' },
  'mother.father.father': { ta: 'கொள்ளுப் பாட்டன்', roman: 'Koḷḷup Pāṭṭaṉ' },
  'mother.father.mother': { ta: 'கொள்ளுப் பாட்டி',  roman: 'Koḷḷup Pāṭṭi' },
};

export const taButtons = [
  { key: 'father',          label: 'Father',          chain: 'Father' },
  { key: 'mother',          label: 'Mother',          chain: 'Mother' },
  { key: 'husband',         label: 'Husband',         chain: 'Husband' },
  { key: 'wife',            label: 'Wife',            chain: 'Wife' },
  { key: 'elder_brother',   label: 'Elder\nBrother',  chain: 'Elder Brother' },
  { key: 'younger_brother', label: 'Younger\nBrother',chain: 'Younger Brother' },
  { key: 'elder_sister',    label: 'Elder\nSister',   chain: 'Elder Sister' },
  { key: 'younger_sister',  label: 'Younger\nSister', chain: 'Younger Sister' },
  { key: 'son',             label: 'Son',             chain: 'Son' },
  { key: 'daughter',        label: 'Daughter',        chain: 'Daughter' },
];
