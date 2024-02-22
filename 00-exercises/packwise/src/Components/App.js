import "../App.css";
import { useState } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

function App() {
  const [bags, setBags] = useState([
    { type: "Carry-on", capacity: 40, brandName: "Osprey" },
  ]);
  const handelAddContainer = (newContainer) => {
    setBags((bags) => [...bags, newContainer]);
  };
  return (
    <div className="App">
      <LeftPanel bags={bags} onAddContainer={handelAddContainer}></LeftPanel>
      <RightPanel></RightPanel>
    </div>
  );
}

export default App;
