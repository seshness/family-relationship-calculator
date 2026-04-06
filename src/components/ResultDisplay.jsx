function Divider() {
  return <div className="w-full border-t border-gray-600 my-2" />;
}

function ColloquialLabel({ language }) {
  return (
    <div className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">
      {language === 'zh' ? '口語' : 'Colloquial'}
    </div>
  );
}

function PlayButton({ text, lang }) {
  function speak() {
    if (!window.speechSynthesis || !text) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    window.speechSynthesis.speak(u);
  }
  return (
    <button
      className="ml-3 shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 text-white active:bg-gray-600"
      onPointerDown={speak}
      aria-label="Play"
    >
      ▶
    </button>
  );
}

export default function ResultDisplay({ result, language, hasTokens }) {
  const langCode = language === 'zh' ? 'zh-TW' : 'ta-IN';

  if (!result && !hasTokens) {
    return <div className="flex-1" />;
  }

  if (!result && hasTokens) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-gray-500 text-2xl">—</div>
      </div>
    );
  }

  if (result === 'unknown') {
    return (
      <div className="flex-1 flex flex-col items-start justify-center pl-2">
        <div className="text-gray-400 text-2xl font-light">
          {language === 'zh' ? '未知關係' : 'Unknown relation'}
        </div>
      </div>
    );
  }

  if (language === 'zh') {
    const hasColloquial = result.chain && result.chain !== result.zh;
    return (
      <div className="flex-1 flex flex-col items-start justify-center pl-2">
        <div className="flex items-center w-full">
          <div className="flex-1">
            <div className="text-white text-6xl font-light tracking-wide">{result.zh}</div>
            {result.pinyin && (
              <div className="text-orange-400 text-xl mt-1 tracking-widest">{result.pinyin}</div>
            )}
          </div>
          <PlayButton text={result.zh} lang={langCode} />
        </div>
        {hasColloquial && (
          <>
            <Divider />
            <ColloquialLabel language={language} />
            <div className="flex items-center w-full">
              <div className="flex-1">
                <div className="text-gray-200 text-5xl font-light tracking-wide">{result.chain}</div>
                {result.colloquialPinyin && (
                  <div className="text-orange-300 text-lg mt-1 tracking-widest">{result.colloquialPinyin}</div>
                )}
              </div>
              <PlayButton text={result.chain} lang={langCode} />
            </div>
          </>
        )}
      </div>
    );
  }

  // Tamil
  const hasColloquial = result.colloquial && result.colloquial !== result.ta;
  return (
    <div className="flex-1 flex flex-col items-start justify-center pl-2">
      <div className="flex items-center w-full">
        <div className="flex-1">
          <div className="text-white text-5xl font-light">{result.ta}</div>
          {result.roman && (
            <div className="text-orange-400 text-xl mt-1">{result.roman}</div>
          )}
        </div>
        <PlayButton text={result.ta} lang={langCode} />
      </div>
      {hasColloquial && (
        <>
          <Divider />
          <ColloquialLabel language={language} />
          <div className="flex items-center w-full">
            <div className="flex-1">
              <div className="text-gray-200 text-4xl font-light">{result.colloquial}</div>
              {result.colloquialRoman && (
                <div className="text-orange-300 text-lg mt-1">{result.colloquialRoman}</div>
              )}
            </div>
            <PlayButton text={result.colloquial} lang={langCode} />
          </div>
        </>
      )}
    </div>
  );
}
