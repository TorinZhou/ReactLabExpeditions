import AddFriendForm from "./AddFriendForm";
import FriendList from "./FriendList";
import Button from "./Button";
import SplitBillForm from "./SplitBillForm";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showAddFriend, setshowAddFriend] = useState(false);

  const toggleShowAddFriendForm = () => {
    setshowAddFriend((showAddFriend) => !showAddFriend);
  };

  const handleAddFriend = (newFriend) => {
    setFriends((friends) => [...friends, newFriend]);
    setshowAddFriend(false);
  };

  const handleSelectFriend = (friend) => {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend.id ? null : friend
    );
    setshowAddFriend(false);
  };

  const updateFriends = (balanceChange) => {
    setFriends((friends) => {
      const updatedFriends = [...friends].map((friend) => {
        // if (friend.id === selectedFriend.id) {
        //   return { ...friend, balance: friend.balance + balanceChange };
        // } else {
        //   return friend;
        // }
        return friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + balanceChange }
          : friend;
      });
      return updatedFriends;
    });
  };

  const handleSplit = (balanceChange) => {
    console.log(balanceChange);
    updateFriends(balanceChange);
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelectFriend={handleSelectFriend}
        ></FriendList>
        {showAddFriend && (
          <AddFriendForm onAddFriend={handleAddFriend}></AddFriendForm>
        )}
        <Button onClick={toggleShowAddFriendForm}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplit={handleSplit}
        ></SplitBillForm>
      )}
    </div>
  );
}

export default App;
