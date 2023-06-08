import React from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    const navigate=useNavigate();
    const handleclick=()=>{
        window.localStorage.removeItem("userId")
        navigate('/')
    }
  return (
    <div>
      <button onClick={handleclick}>Logout</button>
    </div>
  )
}

export default Logout
