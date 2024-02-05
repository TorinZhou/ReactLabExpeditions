import React from "react";

function Skill({ skill, level, color }) {
  const style = {
    backgroundColor: color,
  };
  // let emoji;
  // if (level === "beginner") {
  //   emoji = "👍";
  // } else if (level === "intermediate") {
  //   emoji = "😰";
  // } else {
  //   emoji = "💪";
  // }
  return (
    <div className="skill" style={style}>
      {/* {props.name}
      {props.emoji} */}
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😰"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default Skill;
