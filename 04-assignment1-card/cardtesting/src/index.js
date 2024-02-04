import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Avatar from "./Components/Avatar";
import Intro from "./Components/Intro";
import SkillList from "./Components/SkillList";
import skills from "./Data/skills.js";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skillList={skills} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
