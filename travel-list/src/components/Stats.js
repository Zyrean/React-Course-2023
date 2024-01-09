export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your List</em>
      </p>
    );

  const totalItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const totalItemsPercent = Math.round((itemsPacked / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {totalItemsPercent === 100
          ? `You got everything. Ready to go !!!`
          : `You have ${totalItems} items on your list and you already packed
        ${itemsPacked} (${isNaN(totalItemsPercent) ? 0 : totalItemsPercent}%)`}
      </em>
    </footer>
  );
}
