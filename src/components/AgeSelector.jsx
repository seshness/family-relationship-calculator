export default function AgeSelector({ language, onSelect }) {
  const isZh = language === 'zh';

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4">
      <p className="text-gray-300 text-lg text-center">
        {isZh ? '這位親戚比您年長還是年幼？' : 'Is this relative older or younger than you?'}
      </p>
      <div className="flex gap-3 w-full">
        <button
          className="flex-1 py-5 rounded-lg bg-gray-700 text-white text-xl font-semibold
                     active:bg-gray-600 border border-gray-600"
          onPointerDown={() => onSelect('older')}
        >
          {isZh ? '年長' : 'Older'}
          <div className="text-sm font-normal text-gray-400 mt-1">
            {isZh ? '比您大' : 'than me'}
          </div>
        </button>
        <button
          className="flex-1 py-5 rounded-lg bg-gray-700 text-white text-xl font-semibold
                     active:bg-gray-600 border border-gray-600"
          onPointerDown={() => onSelect('younger')}
        >
          {isZh ? '年幼' : 'Younger'}
          <div className="text-sm font-normal text-gray-400 mt-1">
            {isZh ? '比您小' : 'than me'}
          </div>
        </button>
      </div>
    </div>
  );
}
