import { getSubpathTerm } from '../utils/calculator';

export default function ChainDisplay({ tokens, chainLabelMap, data, language, connector }) {
  if (tokens.length === 0) {
    return (
      <div className="text-gray-500 text-lg mb-2 min-h-[3rem] flex items-center">
        {language === 'zh' ? '請選擇關係…' : 'Select a relation…'}
      </div>
    );
  }

  return (
    <div className="text-gray-200 text-xl leading-relaxed mb-2 min-h-[3rem] flex flex-wrap items-baseline gap-x-1">
      {tokens.map((token, i) => {
        if (token.type === 'connector') {
          return (
            <span key={i} className="text-orange-400 font-medium">
              {connector}
            </span>
          );
        }

        const label = chainLabelMap[token.key] ?? token.key;
        const specialTerm = getSubpathTerm(tokens, i, data, language, chainLabelMap);

        return (
          <span key={i}>
            <span className="font-medium">{label}</span>
            {specialTerm && (
              <span className="text-gray-400 text-base ml-0.5">
                ({specialTerm})
              </span>
            )}
          </span>
        );
      })}
      <span className="text-gray-400">=</span>
    </div>
  );
}
