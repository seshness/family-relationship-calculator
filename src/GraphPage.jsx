import { tamilRelationships } from './data/tamil';
import { chineseRelationships } from './data/chinese';

// ── Generation / branch helpers ─────────────────────────────────────────────

const GEN_DELTA = {
  father: 1,  mother: 1,
  son: -1,    daughter: -1,
  husband: 0, wife: 0,
  elder_brother: 0, younger_brother: 0,
  elder_sister: 0,  younger_sister: 0,
};

const STEP_LABELS = {
  father: 'Father',        mother: 'Mother',
  son: 'Son',              daughter: 'Daughter',
  husband: 'Husband',      wife: 'Wife',
  elder_brother: 'Elder Brother',   younger_brother: 'Younger Brother',
  elder_sister: 'Elder Sister',     younger_sister: 'Younger Sister',
};

function getGeneration(path) {
  return path.split('.').reduce((g, s) => g + (GEN_DELTA[s] ?? 0), 0);
}

function pathToEnglish(path) {
  return path.split('.').map(s => STEP_LABELS[s] || s).join("'s ");
}

function getBranch(path) {
  const first = path.split('.')[0];
  if (first === 'father') return 'paternal';
  if (first === 'mother') return 'maternal';
  if (first === 'husband' || first === 'wife') return 'spouse';
  return 'direct';
}

function getTamilTerm(rel) {
  if (!rel) return null;
  if (rel.ageDependent) {
    return `${rel.older.roman ?? rel.older.ta} / ${rel.younger.roman ?? rel.younger.ta}`;
  }
  return rel.roman || rel.ta || null;
}

function getChineseDisplay(rel) {
  if (!rel) return null;
  if (rel.ageDependent) {
    return { term: `${rel.older.zh} / ${rel.younger.zh}`, pinyin: `${rel.older.pinyin} / ${rel.younger.pinyin}` };
  }
  return { term: rel.chain || rel.zh || null, pinyin: rel.colloquialPinyin || rel.pinyin || '' };
}

// ── Build generation map ────────────────────────────────────────────────────

const allPaths = [...new Set([
  ...Object.keys(tamilRelationships),
  ...Object.keys(chineseRelationships),
])];

const byGeneration = {};
for (const path of allPaths) {
  const gen = getGeneration(path);
  (byGeneration[gen] ??= []).push(path);
}

const BRANCH_ORDER = { paternal: 0, maternal: 1, direct: 2, spouse: 3 };

function sortPaths(paths) {
  return [...paths].sort((a, b) => {
    const d = BRANCH_ORDER[getBranch(a)] - BRANCH_ORDER[getBranch(b)];
    return d !== 0 ? d : a.localeCompare(b);
  });
}

const generations = Object.keys(byGeneration).map(Number).sort((a, b) => b - a);

// ── Styles ──────────────────────────────────────────────────────────────────

const BRANCH_CARD = {
  paternal: 'bg-blue-50  border-blue-300  text-blue-950',
  maternal: 'bg-pink-50  border-pink-300  text-pink-950',
  direct:   'bg-amber-50 border-amber-300 text-amber-950',
  spouse:   'bg-teal-50  border-teal-300  text-teal-950',
};

const BRANCH_BADGE = {
  paternal: 'bg-blue-200  text-blue-800',
  maternal: 'bg-pink-200  text-pink-800',
  direct:   'bg-amber-200 text-amber-800',
  spouse:   'bg-teal-200  text-teal-800',
};

const GEN_META = {
  '3':  { label: 'Great-Grandparents',          note: 'Gen +3' },
  '2':  { label: 'Grandparents',                note: 'Gen +2' },
  '1':  { label: 'Parents, Aunts & Uncles',     note: 'Gen +1' },
  '0':  { label: 'Your Generation',             note: 'Gen 0'  },
  '-1': { label: 'Children & Nieces / Nephews', note: 'Gen −1' },
  '-2': { label: "Grandchildren & Cousins' Children", note: 'Gen −2' },
};

// ── Components ──────────────────────────────────────────────────────────────

function RelCard({ path }) {
  const branch   = getBranch(path);
  const ta       = getTamilTerm(tamilRelationships[path]);
  const zhData   = getChineseDisplay(chineseRelationships[path]);
  const isAgeDep = tamilRelationships[path]?.ageDependent || chineseRelationships[path]?.ageDependent;

  return (
    <div className={`border rounded-lg p-2 flex flex-col gap-0.5 min-w-36 max-w-48 shrink-0 ${BRANCH_CARD[branch]}`}>
      <span className={`self-start text-[10px] font-semibold px-1.5 py-0 rounded-full ${BRANCH_BADGE[branch]}`}>
        {branch}
      </span>
      <p className="font-semibold text-xs leading-snug">{pathToEnglish(path)}</p>
      <p className="font-mono text-[10px] opacity-50 leading-tight">{path}</p>
      {ta && (
        <p className="text-[11px] text-violet-700">
          <span className="opacity-50 mr-1">ta</span>{ta}
        </p>
      )}
      {zhData?.term && (
        <p className="text-[11px] text-sky-700">
          <span className="opacity-50 mr-1">zh</span>{zhData.term}
          {zhData.pinyin && <span className="opacity-60 ml-1 text-[10px]">{zhData.pinyin}</span>}
        </p>
      )}
      {isAgeDep && (
        <span className="self-start text-[9px] bg-white/60 border border-current rounded px-1 opacity-60 mt-0.5">
          age-dependent
        </span>
      )}
    </div>
  );
}

function GenerationRow({ gen }) {
  const key  = String(gen);
  const meta = GEN_META[key] ?? { label: `Generation ${gen > 0 ? '+' : ''}${gen}`, note: `Gen ${gen}` };
  const paths = sortPaths(byGeneration[gen] ?? []);
  const isYourGen = gen === 0;

  return (
    <div className={`relative ${isYourGen ? 'py-4' : 'py-3'}`}>
      {/* Row label */}
      <div className="flex items-baseline gap-2 mb-2">
        <span className={`font-bold text-sm ${isYourGen ? 'text-slate-900' : 'text-slate-600'}`}>
          {meta.label}
        </span>
        <span className="text-xs text-slate-400 font-mono">{meta.note}</span>
        <span className="text-xs text-slate-400">· {paths.length} relationships</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {/* YOU anchor card, only in gen 0 */}
        {isYourGen && (
          <div className="border-2 border-slate-700 bg-slate-800 text-white rounded-lg p-2 flex items-center justify-center min-w-16 font-bold text-sm shrink-0">
            YOU
          </div>
        )}
        {paths.map(path => <RelCard key={path} path={path} />)}
      </div>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function GraphPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/* Header */}
      <div className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">Family Relationship Graph</h1>
          <p className="text-slate-400 text-xs mt-0.5">
            {allPaths.length} relationships · {generations.length} generations · Tamil & Traditional Chinese
          </p>
        </div>
        <a href="/" className="text-sm text-slate-300 hover:text-white transition-colors">
          ← Calculator
        </a>
      </div>

      {/* Legend */}
      <div className="flex gap-4 flex-wrap px-6 py-3 bg-white border-b border-slate-200 text-xs">
        {Object.entries(BRANCH_BADGE).map(([branch, cls]) => (
          <span key={branch} className={`px-2 py-0.5 rounded-full font-medium ${cls}`}>
            {branch}
          </span>
        ))}
      </div>

      {/* Generation rows — ancestors at top, YOU in middle, descendants below */}
      <div className="px-6 py-4 divide-y divide-slate-200">
        {generations.map(gen => (
          <GenerationRow key={gen} gen={gen} />
        ))}
      </div>
    </div>
  );
}
