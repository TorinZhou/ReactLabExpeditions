function BillInput({ bill, onInputBill, children }) {
  return (
    <div>
      <label>{children}</label>
      <input
        type="number"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onInputBill(+e.target.value)}
      ></input>
    </div>
  );
}

export default BillInput;
