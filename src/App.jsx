import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {

  const [name, setName] = useState('');
  const [mobileNo, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Details are updated successfully.`);
  }

  return (
  <>
    <form onSubmit={handleSubmit} >
      <input type="text" id="name" placeholder='Enter your name' required value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="number" name="" id="Mobile" placeholder='Enter you Mobile Number' required value={mobileNo} onChange={(e)=>setMobileNumber(e.target.value)}/>
      <input type="email" name="" id="email" placeholder='Enter you email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" name="" id="pass" placeholder='Enter your password' required value={pass} onChange={(e)=>setPass(e.target.value)}/>
      <button type="submit" value="Submit">Submit</button>
    </form>
  </>
 
  );
}

export default BackgroundChanger;
