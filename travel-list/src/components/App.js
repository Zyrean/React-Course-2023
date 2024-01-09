import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  const totalItems = items.length;

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmDelete = window.confirm(
      "Are you sure u want to delete all items?"
    );

    if (confirmDelete) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onRemoveItems={handleRemoveItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
        items={items}
      />
      <Stats totalItems={totalItems} items={items} />
    </div>
  );
}
