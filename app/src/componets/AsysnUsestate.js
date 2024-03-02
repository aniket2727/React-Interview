
// all the set methods in the reacts behavouus async

import React, { useState } from 'react'

const AsysnUsestate = () => {
    const [count,setcount]=useState(1);
   const handleincrease=()=>{
    setcount(count+5)
    console.log("the value of count is ",count); // here consloke output is less by 5
   }
   
  return (
    <div>
    <button onClick={handleincrease}>increase</button>
      <h1>{count}</h1>
    </div>
  )
}

export default AsysnUsestate
