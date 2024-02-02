export default function ActionButton({
  dispatch,
  dispatchType,
  isDisabled,
  children,
}) {
  return (
    <div>
      <button
        className={`text-xl font-semibold border border-black px-3 py-1 rounded-md bg-gray-100 cursor-pointer ${
          isDisabled && "opacity-30"
        }`}
        disabled={isDisabled}
        onClick={() => dispatch({ type: dispatchType })}
      >
        {children}
      </button>
    </div>
  );
}
