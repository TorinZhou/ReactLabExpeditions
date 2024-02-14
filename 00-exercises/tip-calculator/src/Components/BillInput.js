function BillInput({ bill, onInputBill, children }) {
  return (
    <div>
      <span>{children}</span>
      <input
        type="number"
        value={bill}
        onChange={(e) => onInputBill(+e.target.value)}
      ></input>
    </div>
  );
}

export default BillInput;
