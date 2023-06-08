import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const MyBooking = () => {
    const [booking,setBooking]=useState([])
    useEffect(()=>{
        const fetchinfo=async()=>{
            const id=window.localStorage.getItem("userID");
            console.log("id:",id);
            try{
            const response=await axios.get(`http://localhost:3000/user/flights/${id}`)
            const data=response.data.Bookedflights;
            setBooking(data);
            }
            catch(e){
                console.log(e);
            }
            console.log(response.data.Bookedflights)
            setBooking(response.data.Bookedflights);
        }
        fetchinfo();
    }
    ,[])
    
  return (
    <div>
        {booking.length<=0 && <h2>NO flights booked by this particular user</h2>}

        <h1>Tickets booked</h1>
        <h3>Number of tickets booked: {booking.length}</h3>
        <div>
        {booking.map((val,index)=>{
                    return(
                        <ul>
                        <li key={index}>
                            Name:{val.flightName}
                        </li>
                        <li key={index}>
                            Flightnumber:{val.flightNumber}
                        </li>
                        </ul>
                    )
                })}
        </div>
    </div>
  )
}

export default MyBooking
