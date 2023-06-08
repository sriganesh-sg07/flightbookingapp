import axios from 'axios';
import React, { useState } from 'react'

const ViewFlights = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [arrival, setArrival] = useState('');
  const [bookings,setBookings]=useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
    const response=await axios.post("http://localhost:3000/admin/booking",{flightNumber,arrival})
    const data=response.data;
    console.log(data)
    setBookings(data);
    }
    catch(e){
        console.log(e)
    }
    // Perform form submission logic here
    console.log('Flight Number:', flightNumber);
    console.log('Arrival:', arrival);
  };
   
  return (
    <div>
      <h2 className="form-heading">View Particular Flight Bookings </h2>
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
          <label className="label">Arrival:</label>
          <input
            className="input"
            type="text"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input className="submit-btn" type="submit" value="Submit" />
        </div>
      </form>
      <div>
        <div>
            {bookings.length>0 && <h2>Total bookings:{bookings.length}</h2>}
        </div>
        <div>
                {bookings.map((val,index)=>{
                    return(
                        <ul>
                        <li key={index}>
                            Name:{val.name}
                        </li>
                        <li key={index}>
                            Name:{val.bdate}
                        </li>
                        </ul>
                    )
                })}
        </div>
      </div>
    </div>
  )
}

export default ViewFlights
