import FriendItem from "./FriendItem";

function FriendList({ friends, selectedFriend, onSelectFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendItem
          friend={friend}
          selectedFriend={selectedFriend}
          key={friend.id}
          onSelectfriend={onSelectFriend}
        ></FriendItem>
      ))}
    </ul>
  );
}

export default FriendList;

// {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
