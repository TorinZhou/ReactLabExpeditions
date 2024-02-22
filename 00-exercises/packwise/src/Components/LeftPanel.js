import Bags from "./Bags";
import Button from "./Button";
import AddContainerForm from "./AddContainerForm";
import { useState } from "react";

function LeftPanel({ bags, onAddContainer }) {
  const [isShowForm, setIsShowForm] = useState(false);
  return (
    <div className="left-container">
      <Bags bags={bags}></Bags>
      {!isShowForm && (
        <Button onClick={() => setIsShowForm(true)}>Add Container</Button>
      )}
      {isShowForm && (
        <AddContainerForm
          onAddContainer={onAddContainer}
          onCloseForm={() => setIsShowForm(false)}
        ></AddContainerForm>
      )}
    </div>
  );
}

export default LeftPanel;
