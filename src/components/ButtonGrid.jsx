const BTN_BASE =
  'flex items-center justify-center rounded-sm text-white font-medium ' +
  'active:brightness-75 transition-none select-none cursor-pointer border border-gray-700';

const BTN_NORMAL   = 'bg-gray-700 hover:bg-gray-600';
const BTN_DISABLED = 'bg-gray-800 text-gray-600 cursor-default';
const BTN_CONNECTOR = 'bg-gray-700 text-orange-400 hover:bg-gray-600';

export default function ButtonGrid({
  buttons,
  connector,
  onRelation,
  onConnector,
  onCalculate,
  canRelation,
  canConnector,
  canCalculate,
  language,
}) {
  // Rows: 4 cols each
  // Row 1: buttons[0..3], Row 2: buttons[4..7], Row 3: buttons[8..9] + connector (colspan 2)
  const row1 = buttons.slice(0, 4);
  const row2 = buttons.slice(4, 8);
  const row3 = buttons.slice(8, 10);

  const isChinese = language === 'zh';
  const btnTextSize = isChinese ? 'font-kaiti text-4xl' : 'text-xs leading-snug text-center px-1';

  function RelBtn({ btn }) {
    const enabled = canRelation;
    // Split on \n so multi-line labels render as stacked lines
    const lines = btn.label.split('\n');
    return (
      <button
        className={`${BTN_BASE} ${enabled ? BTN_NORMAL : BTN_DISABLED} ${btnTextSize} h-full w-full flex-col gap-0`}
        onPointerDown={() => enabled && onRelation(btn)}
        disabled={!enabled}
      >
        {lines.map((line, i) => <span key={i}>{line}</span>)}
        {isChinese && btn.pinyin && (
          <span className="text-xs font-normal tracking-tight text-gray-400 leading-none mt-0.5" style={{fontFamily: 'sans-serif'}}>
            {btn.pinyin}
          </span>
        )}
      </button>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-0.5 bg-gray-900 px-0.5 pb-0.5 min-h-0">
      {/* Row 1 */}
      <div className="flex-1 grid grid-cols-4 gap-0.5">
        {row1.map(btn => <RelBtn key={btn.key} btn={btn} />)}
      </div>

      {/* Row 2 */}
      <div className="flex-1 grid grid-cols-4 gap-0.5">
        {row2.map(btn => <RelBtn key={btn.key} btn={btn} />)}
      </div>

      {/* Row 3: Son, Daughter, Connector (spans 2) */}
      <div className="flex-1 grid grid-cols-4 gap-0.5">
        {row3.map(btn => <RelBtn key={btn.key} btn={btn} />)}

        {/* Connector button — spans 2 columns */}
        <button
          className={`${BTN_BASE} ${canConnector ? BTN_CONNECTOR : BTN_DISABLED} col-span-2 h-full text-3xl flex-col gap-0`}
          onPointerDown={() => canConnector && onConnector()}
          disabled={!canConnector}
        >
          {connector}
          {isChinese && (
            <span className="text-xs font-normal tracking-tight text-orange-300 leading-none mt-0.5" style={{fontFamily: 'sans-serif'}}>
              de
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
