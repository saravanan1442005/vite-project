import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  alert("My name is saravanan");
  function yaro() {
    console.log("hiiiiiiiiii");
  }

  const bhaii =()=>{
  console.log("hellloooooooo");
  }
  const name={
    name:"saravanan",
    age:20,
  };
  console.log("age="+name.age);
  return (
    
    <div className='screen'>
    <h1>name:{name.name}</h1>
    <button onClick={yaro}>presss me</button>
    <button onClick={()=>console.log("....CONGRAJULATION .....")}> dont click</button>
    <button onClick={bhaii}> touch </button>  
     </div> 
  );
}

export default App
