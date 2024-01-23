export default function SelectCurrency({ currency, isLoading, onCurFrom }) {
  return (
    <select
      onChange={() => onCurFrom("")}
      // value={currency}
      defaultValue={currency}
      disabled={isLoading}
      className="border border-black rounded-sm"
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}
