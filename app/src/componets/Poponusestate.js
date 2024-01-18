


// pop opertations on the usestate

import React from 'react'
import { useState } from 'react';
const Poponusestate = () => {
    const [myArray, setMyArray] = useState([1, 2, 3, 4, 5]);

    const popElement=()=>{
        setMyArray((prev)=>{
            const result=[...prev.slice(-0,-1)]
            return result
        })
    }
  return (
    <div>
         <p>Array: {JSON.stringify(myArray)}</p>
      <button onClick={popElement}>Pop Element</button>
      
    </div>
  )
}

export default Poponusestate
