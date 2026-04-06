export default function ResultDisplay({ result, language, hasTokens }) {
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

  const isUnknown = result === 'unknown';

  if (isUnknown) {
    return (
      <div className="flex-1 flex flex-col items-end justify-center pr-2">
        <div className="text-gray-400 text-2xl font-light">
          {language === 'zh' ? '未知關係' : 'Unknown relation'}
        </div>
      </div>
    );
  }

  if (language === 'zh') {
    return (
      <div className="flex-1 flex flex-col items-end justify-center pr-2">
        <div className="text-white text-6xl font-light tracking-wide">
          {result.zh}
        </div>
        {result.pinyin && (
          <div className="text-orange-400 text-xl mt-1 tracking-widest">
            {result.pinyin}
          </div>
        )}
      </div>
    );
  }

  // Tamil
  return (
    <div className="flex-1 flex flex-col items-end justify-center pr-2">
      <div className="text-white text-5xl font-light">
        {result.ta}
      </div>
      {result.roman && (
        <div className="text-orange-400 text-xl mt-1">
          {result.roman}
        </div>
      )}
    </div>
  );
}
