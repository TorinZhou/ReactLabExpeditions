import React, { useState } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      text: "",
      yourAnswer: "",
      defaultAnswer: "",
    };
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div className="App">
      <h1>Interview Questions Practice</h1>
      <button onClick={addQuestion}>Add Question</button>
      {questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </div>
  );
}

function Question({ question }) {
  const [text, setText] = useState("");
  const [yourAnswer, setYourAnswer] = useState("");
  const [showDefaultAnswer, setShowDefaultAnswer] = useState(false);

  return (
    <div className="question">
      <input
        type="text"
        placeholder="Type your question here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <textarea
        placeholder="Type your answer here"
        value={yourAnswer}
        onChange={(e) => setYourAnswer(e.target.value)}
      ></textarea>
      <button onClick={() => setShowDefaultAnswer(!showDefaultAnswer)}>
        {showDefaultAnswer ? "Hide" : "Show"} Default Answer
      </button>
      {showDefaultAnswer && (
        <p>{question.defaultAnswer || "No default answer provided"}</p>
      )}
    </div>
  );
}

export default App;
