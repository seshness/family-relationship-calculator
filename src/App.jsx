import { useState, useRef } from 'react';
import { chineseRelationships, zhButtons } from './data/chinese';
import { tamilRelationships, taButtons } from './data/tamil';
import { calculate } from './utils/calculator';
import ChainDisplay from './components/ChainDisplay';
import ResultDisplay from './components/ResultDisplay';
import ButtonGrid from './components/ButtonGrid';
import AgeSelector from './components/AgeSelector';

function makeChainLabelMap(buttons) {
  return Object.fromEntries(buttons.map(b => [b.key, b.chain]));
}

function resolveResult(path, data) {
  const res = calculate(path, data);
  if (!res) return { type: 'unknown' };
  if (res.ageDependent) return { type: 'age', entry: res };
  return { type: 'result', entry: res };
}

const TOGGLE_BASE = 'px-2.5 py-1 text-sm font-semibold rounded transition-colors';
const TOGGLE_ON   = 'bg-orange-500 text-white';
const TOGGLE_OFF  = 'text-gray-300';

function primeSpeech() {
  if (!window.speechSynthesis) return;
  // iOS returns an empty voice list until getVoices() is called inside a
  // voiceschanged handler. Calling it here on first user interaction ensures
  // voices are populated by the time the user taps a play button.
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

export default function App() {
  const speechPrimed = useRef(false);
  const [language, setLanguage]       = useState('zh');
  const [gender, setGender]           = useState('male');
  const [tokens, setTokens]           = useState([]);
  const [result, setResult]           = useState(null);
  const [pendingAge, setPendingAge]   = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);

  const data          = language === 'zh' ? chineseRelationships : tamilRelationships;
  const buttons       = language === 'zh' ? zhButtons            : taButtons;
  const connector     = language === 'zh' ? '的' : "'s";
  const chainLabelMap = makeChainLabelMap(buttons);

  const lastToken    = tokens[tokens.length - 1];
  const canRelation  = tokens.length === 0 || lastToken?.type === 'connector';
  const canConnector = lastToken?.type === 'relation';
  const canCalculate = lastToken?.type === 'relation';
  const canBackspace = tokens.length > 0;

  const path = tokens.filter(t => t.type === 'relation').map(t => t.key);

  function handleRelationPress(btn) {
    if (!canRelation) return;
    setTokens(prev => [...prev, { type: 'relation', key: btn.key }]);
    setResult(null);
    setPendingAge(null);
    setSelectedAge(null);
  }

  function handleConnector() {
    if (!canConnector) return;
    setTokens(prev => [...prev, { type: 'connector' }]);
    setResult(null);
    setPendingAge(null);
    setSelectedAge(null);
  }

  function handleBackspace() {
    setTokens(prev => prev.slice(0, -1));
    setResult(null);
    setPendingAge(null);
    setSelectedAge(null);
  }

  function handleClear() {
    setTokens([]);
    setResult(null);
    setPendingAge(null);
    setSelectedAge(null);
  }

  function handleCalculate() {
    const resolved = resolveResult(path, data);
    if (resolved.type === 'unknown') { setResult('unknown'); setPendingAge(null); }
    else if (resolved.type === 'age') { setPendingAge(resolved.entry); setResult(null); }
    else { setResult(resolved.entry); setPendingAge(null); }
  }

  function handleAgeSelect(age) {
    if (!pendingAge) return;
    setResult(pendingAge[age]);
    setSelectedAge(age);
    setPendingAge(null);
  }

  function handleLanguageChange(lang) {
    setLanguage(lang);
    if (result === null && pendingAge === null) return;
    const newData = lang === 'zh' ? chineseRelationships : tamilRelationships;
    const resolved = resolveResult(path, newData);
    if (resolved.type === 'unknown') {
      setResult('unknown'); setPendingAge(null);
    } else if (resolved.type === 'age') {
      if (selectedAge) { setResult(resolved.entry[selectedAge]); setPendingAge(null); }
      else             { setPendingAge(resolved.entry); setResult(null); }
    } else {
      setResult(resolved.entry); setPendingAge(null);
    }
  }

  return (
    <div
      className="flex flex-col h-dvh max-w-sm mx-auto bg-gray-900 text-white overflow-hidden"
      onPointerDown={() => { if (!speechPrimed.current) { primeSpeech(); speechPrimed.current = true; } }}
    >

      {/* Display area: chain + result, with ← / AC sidebar */}
      <div className="flex-1 flex bg-gray-800 overflow-hidden min-h-0">
        <div className="flex-1 flex flex-col p-4 overflow-hidden">
          <ChainDisplay
            tokens={tokens}
            chainLabelMap={chainLabelMap}
            data={data}
            language={language}
            connector={connector}
          />
          {pendingAge
            ? <AgeSelector language={language} onSelect={handleAgeSelect} />
            : <ResultDisplay result={result} language={language} hasTokens={tokens.length > 0} />
          }
        </div>

        {/* Backspace / Clear sidebar */}
        <div className="flex flex-col w-16 border-l border-gray-700 shrink-0">
          {/* ← backspace: orange, single-step undo */}
          <button
            className={`flex-1 flex items-center justify-center text-2xl border-b border-gray-700
              ${canBackspace ? 'text-orange-400 active:bg-gray-700' : 'text-gray-700'}`}
            onPointerDown={() => canBackspace && handleBackspace()}
            disabled={!canBackspace}
            aria-label="Backspace"
          >
            ←
          </button>
          {/* AC: red tint — destructive clear-all */}
          <button
            className={`flex-1 flex items-center justify-center text-sm font-bold
              ${canBackspace
                ? 'text-red-400 active:bg-gray-700'
                : 'text-gray-700'}`}
            onPointerDown={() => canBackspace && handleClear()}
            disabled={!canBackspace}
            aria-label="Clear"
          >
            AC
          </button>
        </div>
      </div>

      {/* Options bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-700 shrink-0">
        {/* Language toggle */}
        <div className="flex gap-0.5 bg-gray-600 rounded p-0.5">
          <button
            className={`${TOGGLE_BASE} ${language === 'zh' ? TOGGLE_ON : TOGGLE_OFF}`}
            onPointerDown={() => handleLanguageChange('zh')}
          >
            中文
          </button>
          <button
            className={`${TOGGLE_BASE} ${language === 'ta' ? TOGGLE_ON : TOGGLE_OFF}`}
            onPointerDown={() => handleLanguageChange('ta')}
          >
            தமிழ்
          </button>
        </div>

        {/* Gender toggle */}
        <div className="flex gap-0.5 bg-gray-600 rounded p-0.5">
          <button
            className={`${TOGGLE_BASE} text-xl ${gender === 'male' ? TOGGLE_ON : TOGGLE_OFF}`}
            onPointerDown={() => setGender('male')}
            aria-label="Male"
          >
            👨
          </button>
          <button
            className={`${TOGGLE_BASE} text-xl ${gender === 'female' ? TOGGLE_ON : TOGGLE_OFF}`}
            onPointerDown={() => setGender('female')}
            aria-label="Female"
          >
            👩
          </button>
        </div>
      </div>

      {/* Button grid */}
      <ButtonGrid
        buttons={buttons}
        connector={connector}
        onRelation={handleRelationPress}
        onConnector={handleConnector}
        canRelation={canRelation}
        canConnector={canConnector}
        language={language}
      />

      {/* Calculate button */}
      <button
        className={`w-full h-16 text-3xl font-bold tracking-widest shrink-0
          ${canCalculate
            ? 'bg-orange-500 text-white active:bg-orange-600'
            : 'bg-orange-900 text-orange-700 cursor-default'}`}
        onPointerDown={() => canCalculate && handleCalculate()}
        disabled={!canCalculate}
        aria-label="Calculate"
      >
        =
      </button>

    </div>
  );
}
