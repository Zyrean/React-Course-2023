export default function Information({ type, children }) {
  return (
    <p className="text-xl font-semibold">
      {children}: {type}
    </p>
  );
}
