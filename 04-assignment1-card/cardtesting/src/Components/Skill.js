import React from "react";

function Skill(props) {
  const style = {
    backgroundColor: props.color,
  };
  return (
    <div className="skill" style={style}>
      {/* {props.name}
      {props.emoji} */}
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default Skill;
