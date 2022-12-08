import { useState } from "react";

function RoomCard({ room }) {
  const { name, image, price } = room;

  const [isBooked, setIsBooked] = useState(true);

  function handleToggleBook() {
    setIsBooked((isBooked) => !isBooked);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isBooked ? (
        <button className="primary" onClick={handleToggleBook}>
          Book Room
        </button>
      ) : (
        <button onClick={handleToggleBook}>Booked</button>
      )}
    </li>
  );
}

export default RoomCard;
