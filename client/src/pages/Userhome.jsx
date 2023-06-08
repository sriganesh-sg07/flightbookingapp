import React from 'react'
import {Link} from 'react-router-dom'
const Userhome = () => {
  return (
    <div>
     <div className='c01'>
        <div className='c02'>
            <Link to='/user/searchflight'>Search a flight based on date and time</Link>
        </div>
    </div>
    <div className='c01'>
        <div className='c02'>
            <Link to='/user/bookingtickets'>Book Tickets</Link>
        </div>
    </div>
    <div className='c01'>
        <div className='c02'>
            <Link to='/user/mybookings'>My Bookings</Link>
        </div>
    </div> 
    </div>
  )
}

export default Userhome
