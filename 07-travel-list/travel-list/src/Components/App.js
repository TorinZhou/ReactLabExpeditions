import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
    // I can't do items.slice().push(item), keep in mind
  };
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleTogglePackedFlag = (id) => {
    setItems((items) =>
      // items.map((item) => {
      //   if (item.id === id) {
      //     return { ...item, packed: !item.packed };
      //   } else return item;
      // })
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const userConfirmed = window.confirm("Proceed to CLEAR the List?");
    if (userConfirmed) {
      setItems([]);
    } else {
      return;
    }
  };
  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItems}></Form>
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackItem={handleTogglePackedFlag}
        onClearList={handleClearList}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}
