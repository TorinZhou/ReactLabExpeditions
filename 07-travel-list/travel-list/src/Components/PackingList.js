import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onPackItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("packed");

  const handleSorting = (items, sortBy) => {
    const sortingAlgorithms = {
      input: (items) => {
        return [...items].sort((a, b) =>
          a.quantity < b.quantity ? -1 : a.quantity > b.quantity ? 1 : 0
        );
      },
      description: (items) => {
        return [...items].sort((a, b) =>
          a.description.localeCompare(b.description)
        );
      },
      packed: (items) => {
        return [...items].sort((a, b) => a.packed - b.packed);
      },
    };
    return sortingAlgorithms[sortBy](items);
  };
  const sortedItems = handleSorting(items, sortBy);
  const SORT_OPTIONS = [
    { value: "input", lable: "Sort by Input" },
    { value: "description", lable: "Sory by description" },
    { value: "packed", lable: "Sort by packer status" },
  ];

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onPackItem={onPackItem}
          ></Item>
        ))}
      </ul>
      <div className="actions">
        <select
          onChange={(e) => {
            console.log(e.target.value);
            setSortBy(e.target.value);
          }}
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.lable}
            </option>
          ))}
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
