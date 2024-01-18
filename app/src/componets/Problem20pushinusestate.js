import React from 'react'

import { useState } from 'react';

const Problem20pushinusestate = () => {
    const [myArray, setMyArray] = useState([]);
    
    const pushElement = (newElement) => {
           setMyArray((prevarry)=>[...prevarry,newElement])
    };

    const handleButtonClick=()=>{
      pushElement('data')    
    }
  return (
    <div>
      <p>Array: {JSON.stringify(myArray)}</p>
      <button onClick={handleButtonClick}>Add Element</button>
      
    </div>
  )
}

export default Problem20pushinusestate
