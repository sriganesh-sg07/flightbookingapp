import axios from "axios"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
    await axios.post("http://localhost:3000/adminlogin",{username,password})
    navigate('/adminhome')
    }
    catch(e){
        console.log(e);
        alert("Invalid credentials")
    }
    
    
  };

  return (
    <div className="c4">
      <h2 className="h2">AdminLogin</h2>
      <form className="form1" onSubmit={handleSubmit}>
        <div className="c5">
          <label className="l1">Username:</label>
          <input className="ip1"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="c7">
          <label className="c6">Password:</label>
          <input className="ip1"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="c8">
          <input className="c9" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Adminlogin;



