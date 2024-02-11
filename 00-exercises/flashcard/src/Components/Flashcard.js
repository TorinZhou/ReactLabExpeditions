import React, { useState } from "react";

function Flashcard({ id, question, answer }) {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => setIsSelected((c) => !c);

  return isSelected ? (
    <div className="selected" onClick={handleClick}>
      {answer}
    </div>
  ) : (
    <div onClick={handleClick}>{question}</div>
  );
}

export default Flashcard;
