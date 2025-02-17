import React from 'react'
import './Comp.css'
const Comp = (props) => {
  return (
    <div id='cont'>
      <h1>my name is {props.name}</h1>
    
      <h2>my age:{props.Age}</h2> 
  
      <h1>my friend name is {props.FriendName}</h1> 
    
      <h2>his age:{props.FAge}</h2>

    </div>
  )
}

export default Comp
