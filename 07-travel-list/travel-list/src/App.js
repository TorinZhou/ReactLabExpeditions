import { useState } from "react";

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

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItems}></Form>
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackItem={handleTogglePackedFlag}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🎒</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      quantity,
      description: description,
      packed: false,
    };
    onAddItems(newItem);
    setDescription("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you neek for your 😊 trip</h3>
      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onPackItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onPackItem={onPackItem}
          ></Item>
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onPackItem }) {
  // const [isPacked, setIsPacked] = useState(item.packed);
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onPackItem(item.id)}
      />
      <span
        style={item.packed ? { textDecoration: "line-through" } : null}
      >{`${item.quantity} ${item.description}`}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Please add something to your packing list</em>
      </footer>
    );
  const allItemsCount = items.reduce((acc, cur) => cur.quantity + acc, 0);

  const packedItemsCount = items
    .filter((item) => item.packed === true)
    .reduce((acc, cur) => cur.quantity + acc, 0);

  const culculatePackedPercentage = Math.ceil(
    (packedItemsCount / allItemsCount) * 100
  );
  return (
    <footer className="stats">
      {culculatePackedPercentage === 100 ? (
        <em>You got everything! Ready to go ✈</em>
      ) : (
        <em>
          🎒You have {allItemsCount} items on your list, and you already packed
          ({culculatePackedPercentage}%)
        </em>
      )}
    </footer>
  );
}
