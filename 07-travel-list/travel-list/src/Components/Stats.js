export default function Stats({ items }) {
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
