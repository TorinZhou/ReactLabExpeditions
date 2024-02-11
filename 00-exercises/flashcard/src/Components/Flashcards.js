import React from "react";
import Flashcard from "./Flashcard";
function Flashcards({ questions }) {
  console.log(questions);
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <Flashcard
          key={question.id}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
  );
}

export default Flashcards;
