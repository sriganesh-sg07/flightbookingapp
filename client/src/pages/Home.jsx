import React from 'react'
import {Link} from 'react-router-dom'
import './pages.css'
const Home = () => {
  return (
    <div className='c0'>
        <div className='c1'>
            <h1 className='h1'>Welcome to flight resevation system</h1>
            <div className='makeitcenter'>
                <div className='c2'>
                <Link to='/adminlogin'>Admin login</Link>
                </div>
                <div className='c3'>
                <Link to='/userlogin'>User login</Link>
                </div>
                <div className='c3'>
                <Link to='/useregister'>User register</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
