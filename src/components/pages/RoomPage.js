import { useEffect, useState } from "react";


// import Search from "./Search";


function RoomPage() {
    const [rooms, setRooms] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");

    const [isBooked, setIsBooked] = useState(true);

    function handleToggleBook() {
      setIsBooked((isBooked) => !isBooked);
    }
  
    function handleDeleteBook() {
      return fetch("https://lux-hotels-production.up.railway.app/rooms",{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
    })};
     
    
    
    useEffect(() => {
      // no need to use http://localhost:3000 here
      fetch("https://lux-hotels-production.up.railway.app/rooms")
        .then((r) => r.json())
        .then((data) => setRooms(data)
        );
    }, []);
  
    
    // const displayedRooms = rooms.filter((room) => {
    //   return room.name.toLowerCase().includes(searchTerm.toLowerCase());
    // });
  
    return (
      <main>
        {/* <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} /> */}
    {rooms.map((room)=> {
      return (
        <div className = "cards-container">
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
          // <button onClick={handleDeleteBook}>Delete</button>
        )}
      </div>
      
      </div>
      )
    })}
      </main>
    );
  }
  
  export default RoomPage;
  