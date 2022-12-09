import { useEffect, useState } from "react";
import './rooms.css'




function RoomPage() {
    const [rooms, setRooms] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");

    const [isBooked, setIsBooked] = useState(true);

    function handleToggleBook() {
      setIsBooked((isBooked) => !isBooked);
    }
  
    // function handleDeleteBook() {
    //   return fetch("https://lux-hotels-production.up.railway.app/rooms",{
    //     method: 'DELETE',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
    // })};
     
    
    
    useEffect(() => {
      // no need to use http://localhost:3000 here
      fetch("https://lux-hotels-production.up.railway.app/rooms")
        .then((r) => r.json())
        .then((data) => setRooms(data)
        );
    }, []);
  
    return (
    <div className="container">
    {rooms.map((room)=> {
      return (
        <div className="cards-container">
        <div key={room.id} className="card">
        <img src={room.image} alt={room.name} />
        <h4>{room.name}</h4>
        <h4>Price: {room.price}</h4>
        {isBooked ? (
          <button className="primary" onClick={handleToggleBook}>
            Book Room
          </button>
        ) : (
          <button onClick={handleToggleBook}>Booked</button>
        )}
      </div>
      
      </div>
      )
    })}
      </div>
    );
  }
  
  export default RoomPage;
  