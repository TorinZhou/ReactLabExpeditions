import Button from "./Button";

function FriendItem({ friend, selectedFriend, onSelectfriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : null}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      {friend.balance < 0 && (
        <p className="red">
          you own {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      <Button onClick={() => onSelectfriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default FriendItem;
