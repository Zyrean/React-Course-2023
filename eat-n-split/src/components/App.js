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

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [displayAddFriend, setDisplayAddFriend] = useState(false);
  const [selectedFriend, setselectedFriend] = useState(null);

  function handleDisplayAddFriend() {
    setDisplayAddFriend((displayAddFriend) => !displayAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    handleDisplayAddFriend();
  }

  function handleselectedFriend(friend) {
    setselectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setDisplayAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setselectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          onHandleselectedFriend={handleselectedFriend}
          selectedFriend={selectedFriend}
          friends={friends}
        />

        {displayAddFriend && (
          <FormAddFriend
            onAddFriend={handleAddFriend}
            onDisplayAddFriend={handleDisplayAddFriend}
          />
        )}

        <Button onClick={handleDisplayAddFriend}>
          {displayAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBIll
          selectedFriend={selectedFriend}
          onHandleSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, selectedFriend, onHandleselectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          onHandleselectedFriend={onHandleselectedFriend}
          selectedFriend={selectedFriend}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, selectedFriend, onHandleselectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} €
        </p>
      ) : (
        ""
      )}
      {friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)} €
        </p>
      ) : (
        ""
      )}
      {friend.balance === 0 ? (
        <p className="black">You and {friend.name} are even</p>
      ) : (
        ""
      )}
      <Button onClick={() => onHandleselectedFriend(friend)}>
        {" "}
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    setName("");
    setImage("https://i.pravatar.cc/48");

    onAddFriend(newFriend);
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label> Friend name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        for="name"
      />

      <label>Image URL</label>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        for="URL"
      />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBIll({ selectedFriend, onHandleSplitBill }) {
  const [bill, setBill] = useState("");
  const [ownExpense, setOwnExpense] = useState("");
  const friendExpense = bill ? bill - ownExpense : "";
  const [whoPays, setWhoPays] = useState("You");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !ownExpense) return;

    onHandleSplitBill(whoPays === "You" ? friendExpense : -ownExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name} </h2>

      <label> Bill value</label>
      <input
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
        type="text"
        for="Bill value"
      />

      <label> Your expense</label>
      <input
        value={ownExpense}
        onChange={(e) =>
          setOwnExpense(+e.target.value > bill ? ownExpense : +e.target.value)
        }
        type="text"
        for="Your expense"
      />

      <label>{selectedFriend.name}'s expense:</label>
      <input value={friendExpense} type="text" for="Your expense" disabled />

      <label>Who is paying the Bill?</label>
      <select onChange={(e) => setWhoPays(e.target.value)}>
        <option value="You">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
