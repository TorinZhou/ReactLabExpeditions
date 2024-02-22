import { useState } from "react";
import Button from "./Button";

function AddContainerForm({ onAddContainer, onCloseForm }) {
  const [type, setType] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [brandName, setBrandName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!type || !capacity || !brandName) return;
    const newContainer = {
      type: type,
      capacity: capacity,
      brandName: brandName,
    };
    onAddContainer(newContainer);
    onCloseForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <label>Type: </label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        ></input>
      </div>
      <div className="input">
        <label>Capacity: </label>
        <input
          type="number"
          value={capacity}
          onChange={(e) =>
            setCapacity((capacity) =>
              +e.target.value >= 0 ? +e.target.value : capacity
            )
          }
        ></input>
      </div>
      <div className="input">
        <label>Brand Name: </label>
        <input
          type="text"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        ></input>
      </div>
      <Button onClick={handleSubmit}>Confirm</Button>
    </form>
  );
}

export default AddContainerForm;
