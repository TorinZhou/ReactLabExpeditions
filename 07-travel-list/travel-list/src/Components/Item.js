export default function Item({ item, onDeleteItem, onPackItem }) {
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
