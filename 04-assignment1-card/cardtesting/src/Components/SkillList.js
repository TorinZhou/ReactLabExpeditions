import React from "react";
import Skill from "./Skill";

export default function SkillList({ skillList }) {
  return (
    <div className="skill-list">
      {skillList.map((skill) => (
        <Skill
          id={skill.skill}
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
}
