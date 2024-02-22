function Bag({ type, capacity, brandName }) {
  return (
    <li>
      <span>{type}</span>
      {`: ${brandName}-${capacity}L`}
    </li>
  );
}
export default Bag;
