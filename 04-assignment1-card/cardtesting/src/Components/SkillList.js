import React from "react";
import Skill from "./Skill";

export default function SkillList(props) {
  return (
    <div className="skill-list">
      {props.skillList.map((skill) => (
        <Skill name={skill.name} emoji={skill.emoji} color={skill.color} />
      ))}
    </div>
  );
}
