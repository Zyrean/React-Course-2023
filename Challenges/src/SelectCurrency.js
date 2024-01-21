export default function SelectCurrency({ onCurFrom }) {
  //   console.log(inputNum);
  return (
    <select
      //   onChange={onCurFrom((e) => e.target.value)}
      //   onChange={onCurFrom(e.target.value)}
      className="border border-black rounded-sm"
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}
