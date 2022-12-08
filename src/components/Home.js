import React, {useState} from "react"
import Heading from "./Heading"
import "./home.css"



function Home(){
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(''); 
  const [selectedHotel, setSelectedHotel] = useState(''); 

  const handleCityChange = (event) => {
    // Update the state variable when the user changes the selection 
    setSelectedCity(event.target.value);
  };
  const handleHotelChange = (event) => {
    // Update the state variable when the user changes the selection 
    setSelectedHotel(event.target.value);
  };


  const handleRoomTypeChange = (event) => {
    // Update the state variable when the user changes the selection 
    setSelectedRoomType(event.target.value);
  };
  const handlePriceChange = (event) => {
    // Update the state variable when the user changes the selection 
    setSelectedPrice(event.target.value);
  };

    return (
        <>
<section className='home'>
          <div className='container'>
            <Heading title='Search For Your Next Hotel Room ' subtitle='Find new & featured hotels located in your local city.' />
  <div className="form-container">
            <form className='flex'>
            <label>City: 
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city...</option>
        <option value="NA">Nairobi</option>
        <option value="KI">Kisumu</option>
        <option value="MO">Mombasa</option>
        <option value="NA">Nanyuki</option>
        <option value="ME">Meru</option>
        <option value="KIA">Kiambu</option>

        {/* Add more states here... */}
      </select>
    </label>

    <label>Hotels: 
      <select value={selectedCity} onChange={handleHotelChange}>
        <option value="">Select a hotel...</option>
        <option value="NA">Sarova Hotel</option>
        <option value="KI">Olare Mara Kempinski</option>
        <option value="MO">Hemingways Watamu</option>
        <option value="NA">Sovereign Suites</option>
        
        {/* Add more states here... */}
      </select>
    </label>

    <label>Room Type: 
      <select value={selectedCity} onChange={handleRoomTypeChange}>
        <option value="">Select a room...</option>
        <option value="NA">Master ensuite</option>
        <option value="KI">Two bedroom</option>
        <option value="MO">One room,one bath</option>
        <option value="NA">Studio room</option>
        <option value="ME">Presidential suite</option>
        <option value="KIA">Diplomatic suite</option>

        {/* Add more states here... */}
      </select>
    </label>

    <label>Price Range: 
      <select value={selectedCity} onChange={handlePriceChange}>
        <option value="">Select a price range...</option>
        <option value="NA">$120.00</option>
        <option value="KI">$150.00</option>
        <option value="MO">$300.00</option>
        <option value="NA">$260.00</option>
        <option value="ME">$500.00</option>
        <option value="KIA">$100.00</option>

        {/* Add more states here... */}
      </select>
    </label>
  
              
              <button className='search-btn'>
                <i className='fa fa-search'></i>
              </button>
            </form>
          </div>
          </div>
        </section>
      </>
    )
};

export default Home