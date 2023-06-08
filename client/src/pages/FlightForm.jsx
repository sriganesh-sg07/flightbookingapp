import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const FlightForm = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [flightName, setFlightName] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');

  const navigate=useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        await axios.post("http://localhost:3000/flight/populate",{flightNumber,flightName,fromLocation,toLocation,departure,arrival,date})
        alert("Sucessfully registerd")
        navigate('/adminhome')
    }
    catch(e){
        alert("Err")
    }
    console.log('Flight Number:', flightNumber);
    console.log('Flight Name:', flightName);
    console.log('From Location:', fromLocation);
    console.log('To Location:', toLocation);
    console.log('Departure:', departure);
    console.log('Arrival:', arrival);
    console.log('Date:', date);

  };

  return (
    <div>
      <h2 className="form-heading">Flight Form</h2>
      <form className="flight-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Flight Number:</label>
          <input
            className="input"
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Flight Name:</label>
          <input
            className="input"
            type="text"
            value={flightName}
            onChange={(e) => setFlightName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">From Location:</label>
          <input
            className="input"
            type="text"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">To Location:</label>
          <input
            className="input"
            type="text"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Departure:</label>
          <input
            className="input"
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Arrival:</label>
          <input
            className="input"
            type="text"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Date:</label>
          <input
            className="input"
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input className="submit-btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default FlightForm;
