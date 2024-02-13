import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const handlePrevious = () => {
    if (step > 1) {
      setStep((step) => step - 1);
    } else {
      console.log("Already the first step");
    }
  };
  const handleNext = () => {
    if (step < 3) {
      setStep((step) => step + 1);
    } else {
      console.log("Already the last step");
    }
  };

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : undefined}>1</div>
            <div className={step >= 2 ? "active" : undefined}>2</div>
            <div className={`${step >= 3 ? "active" : undefined}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
