import React from 'react'
import { Link } from 'react-router-dom'
const Adminhome = () => {
  return (
    <div>
    <div className='c01'>
        <div className='c02'>
            <Link to='/admin/regflight'>Register a Flight</Link>
        </div>
    </div>
    <div className='c01'>
        <div className='c02'>
            <Link to='/admin/removeflight'>Remove a Flight</Link>
        </div>
    </div>
    <div className='c01'>
        <div className='c02'>
            <Link to='/admin/viewflights'>View  based on flight number and time</Link>
        </div>
    </div>
    </div>
  )
}

export default Adminhome
