import axios from 'axios';
import React, { useState } from 'react';

const BookingTickets = () => {
  const [flightName, setFlightName] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [date, setDate] = useState('');
  const [arrival, setArrival] = useState('');
  const [name, setName] = useState('');
  const [bdate, setBdate] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const id=window.localStorage.getItem("userID");
    console.log(id);
    console.log(`http://localhost:3000/user/${id}/bookingflights`)
    try{
    await axios.post(`http://localhost:3000/user/${id}/bookingflights`,{ flightName,flightNumber,date,arrival,name,bdate})
    alert("Ticket booked")
    }
    catch(e){
      console.log(e);
    }

    // Perform form submission logic here
    console.log('Flight Name:', flightName);
    console.log('Flight Number:', flightNumber);
    console.log('Date:', date);
    console.log('Arrival:', arrival);
    console.log('Name:', name);
    console.log('Bdate:', bdate);

    // Reset form fields
    setFlightName('');
    setFlightNumber('');
    setDate('');
    setArrival('');
    setName('');
    setBdate('');
  };

  return (
    <div>
      <h2>Flight Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Flight Name:</label>
          <input
            type="text"
            value={flightName}
            onChange={(e) => setFlightName(e.target.value)}
          />
        </div>
        <div>
          <label>Flight Number:</label>
          <input
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Booking Date:</label>
          <input
            type="text"
            value={bdate}
            onChange={(e) => setBdate(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default BookingTickets;
