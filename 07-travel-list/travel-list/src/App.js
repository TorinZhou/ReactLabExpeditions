import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: false },
  { id: 4, description: "Euro", quantity: 2000, packed: true },
];
export default function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Form></Form>
      <PackingList></PackingList>
      <Stats></Stats>
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🎒</h1>;
}

function Form() {
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
    console.log(newItem);
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

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id}></Item>
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  const [isPacked, setIsPacked] = useState(item.packed);
  return (
    <li>
      <span
        style={isPacked ? { textDecoration: "line-through" } : null}
      >{`${item.quantity} ${item.description}`}</span>
      <button
        onClick={() => {
          setIsPacked((c) => !c);
        }}
      >
        ❌
      </button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🎒You have X items on your list, and you already packed X (x%)</em>
    </footer>
  );
}
