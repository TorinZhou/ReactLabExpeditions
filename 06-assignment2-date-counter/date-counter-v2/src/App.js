import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    setIsModified(step !== 1 || count !== 0);
  }, [count, step]);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const handleStep = (e) => {
    setStep(+e.target.value);
  };
  const handleCount = (e) => {
    setCount(e.target.value);
  };
  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={handleStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button
          onClick={() => {
            setCount((c) => c - step);
          }}
        >
          -
        </button>
        <input type="number" value={count} onChange={handleCount}></input>
        <button
          onClick={() => {
            setCount((c) => +c + step);
          }}
        >
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {isModified && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}
