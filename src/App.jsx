import React from 'react';
import './App.css'
import Comp from './Comp'
function App() {
 
  const name={
    name:"saravanan",
    age:20,
  };


  console.log("age="+name.age);

  
  return (
    
    <div>  
      <h1>name:{name.name}</h1>
      <div id='button'>
        <button onClick={()=>alert("click is clicked")}>click</button>
        <button onDoubleClick={()=>alert("2click is clicked")}>2clicked</button>
      </div>
       
       
      <div id='container'>
        <Comp  name="saravanan" Age="20" FriendName="vicky" FAge="20"/>
      </div>
    
   
     </div> 
  );
}

export default App
