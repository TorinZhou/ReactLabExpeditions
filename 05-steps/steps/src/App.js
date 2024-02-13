import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  return <Step></Step>;
}
function Step() {
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
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          {/* <p className="message">
            Step {step}: {messages[step - 1]}
          </p> */}
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              <span>👉</span>Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}:</h3>
      {children}
    </p>
  );
}

export default App;
