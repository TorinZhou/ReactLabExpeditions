import { useState } from "react";
import Button from "./Button";
function SplitBillForm({ selectedFriend, onSplit }) {
  const [billValue, setBillValue] = useState(0);
  const [youExpense, setYourExpense] = useState(0);
  const [isYouPayingTheBill, setIsYouPayingTheBill] = useState(false);
  const friendExpense = billValue ? billValue - youExpense : "";

  const balanceChange = () => {
    const newBalance = isYouPayingTheBill ? friendExpense : -youExpense;
    return newBalance;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!billValue) return;
    onSplit(balanceChange());
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <label>💸Bill value</label>
      <input
        type="text"
        placeholder="Set the bill"
        value={billValue}
        onChange={(e) => setBillValue(Math.abs(e.target.value))}
      ></input>

      <label>🙋‍♂️Your Expense</label>
      <input
        type="text"
        placeholder="Set the bill"
        value={youExpense}
        onChange={(e) =>
          setYourExpense(
            Math.abs(e.target.value) > billValue
              ? youExpense
              : Math.abs(e.target.value)
          )
        }
      ></input>

      <label>👨‍🤝‍👨🏽X Expense</label>
      <input type="text" value={friendExpense} disabled></input>

      <label>🤗Who is paying the bill?</label>
      <select
        value={isYouPayingTheBill}
        onChange={(e) => {
          setIsYouPayingTheBill(e.target.value === "true" ? true : false);
        }}
      >
        <option value="true">You</option>
        <option value="false">{selectedFriend.name}</option>
      </select>
      <Button>Split it</Button>
    </form>
  );
}

export default SplitBillForm;
