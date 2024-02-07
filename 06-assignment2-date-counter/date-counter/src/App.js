import { useState } from "react";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  // const handlePlusOne = (setter) => {
  //   return (currentValue) => {
  //     setter(currentValue + 1);
  //   };
  // };
  // const handleMinusOne = (setter) => {
  //   return (currentValue) => {
  //     setter(currentValue - 1);
  //   };
  // };
  const handleMinusStep = () => {
    setStep((step) => step - 1);
  };
  const handlePlusStep = () => {
    setStep((step) => step + 1);
  };

  const handleMinusCount = () => {
    setCount((count) => count - step);
    handleDateChange(-step);
  };
  const handlePlusCount = () => {
    setCount((count) => count + step);
    handleDateChange(step);
  };
  const handleDateChange = (change) => {
    setDate((date) => {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + change);
      return newDate;
    });
  };
  return (
    <>
      <div>
        <button onClick={handleMinusStep}>-</button> Step: {step}
        <button onClick={handlePlusStep}>+</button>
      </div>
      <div>
        <button onClick={handleMinusCount}>-</button> Count: {count}
        <button onClick={handlePlusCount}>+</button>
      </div>
      {count === 0 && <p>{`Today is ${date.toLocaleDateString()}`}</p>}
      {count > 0 && (
        <p>{`${count} days from today is ${date.toLocaleDateString()}`}</p>
      )}
      {count < 0 && (
        <p>{`${-count} days before is ${date.toLocaleDateString()}`}</p>
      )}
    </>
  );
}

export default App;
