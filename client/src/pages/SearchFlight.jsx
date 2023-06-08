import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const SearchFlight = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const[flights,setFlights]=useState([]);
    const navigate=useNavigate();
    const handleSubmit = async(e) => {
      e.preventDefault();
      try{
      const response=await axios.post("http://localhost:3000/flight/find/",{time,date})
      // Perform form submission logic here
      console.log(response.data)
      setFlights(response.data)
      }
      catch(e){
        alert("There is no such flight")
      }
      console.log('Date:',date );
      console.log('Time:', time);
    }
  return (
    <div>
      <div>
      <h2>Search for flights based on data & time</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Flight date:</label>
          <input
            type="text"
            value={date}
            placeholder='DD-MM-yyyy*'
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="text"
            value={time}
            placeholder='HH:TT'
            onChange={(e) =>setTime(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
    <div>
                {flights.map((val,index)=>{
                    return(
                        <ul>
                        <li key={index}>
                            Name:{val.flightName}
                        </li>
                        <li key={index}>
                            Name:{val.FlightNumber}
                        </li>
                        </ul>
                    )
                })}
        </div>
    </div>
  )
}

export default SearchFlight
