import Bag from "./Bag";
function Bags({ bags }) {
  return (
    <ul className="bagList">
      {[...bags].map((bag) => (
        <Bag
          key={bag.name}
          type={bag.type}
          capacity={bag.capacity}
          brandName={bag.brandName}
        ></Bag>
      ))}
    </ul>
  );
}

export default Bags;
