import { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

function AddFriendForm({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [friendImageUrl, setFriendImageUrl] = useState(
    "https://i.pravatar.cc/48"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!friendName || !friendImageUrl) return;
    const id = uuidv4();
    const newFriend = {
      id: id,
      name: friendName,
      image: `${friendImageUrl}?=${id}`,
      balance: 0,
    };
    console.log(newFriend);
    onAddFriend(newFriend);
    setFriendImageUrl("https://i.pravatar.cc/48");
    setFriendName("");
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫Friend Name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      ></input>

      <span>🖼 Image URL</span>
      <input
        type="text"
        value={friendImageUrl}
        onChange={(e) => setFriendImageUrl(e.target.value)}
      ></input>
      <Button>Add</Button>
    </form>
  );
}

export default AddFriendForm;
