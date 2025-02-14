import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  alert("My name is saravanan");
  
  const name={
    name:"saravanan",
    age:20,
  };
  console.log("age="+name.age);
  return (
    
    <div className='screen'>
    <h1>name:{name.name}</h1>
     </div> 
  );
}

export default App
