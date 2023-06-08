import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const RemoveFlight = () => {
    const [flightNumber, setFlightNumber] = useState('');
    const [arrival, setArrival] = useState('');
    const navigate=useNavigate();
    const handleSubmit = async(e) => {
      e.preventDefault();
      try{
      await axios.post("http://localhost:3000/admin/removeflight",{flightNumber,arrival})
      alert("Flight was successfully removed")
      navigate('/adminhome')
      // Perform form submission logic here
      }
      catch(e){
        alert("There is no such flight")
      }
      console.log('Flight Number:', flightNumber);
      console.log('Arrival:', arrival);
  
      // Reset form fields
      setFlightNumber('');
      setArrival('');
    };
  return (
    <div>
      <h2>Remove flight</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Flight Number:</label>
          <input
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Arrival:</label>
          <input
            type="text"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default RemoveFlight
