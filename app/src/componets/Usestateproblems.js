

// how the workng of usestate
import React from 'react'
import { useState } from 'react'

const Usestateproblems = () => {
    
    const [count,setcount]=useState(1)
    const [count1,setcount1]=useState(1)

    const handleincrease =()=>{
        //here value of count changes by 2 every time
        setcount(count+2);
        setcount(count+2);
    }


    const handleincreasebyprev=()=>{
         //here value of count changes by 8 every time
        setcount1(prev=>prev+2);
        setcount1(prev=>prev+2);
        setcount1(prev=>prev+2);
        setcount1(prev=>prev+2);

    }
  return (
    <div>

    <button onClick={handleincrease}>increase</button>
    <h1>{count}</h1>

    <button onClick={handleincreasebyprev}>increase</button>
    <h1>{count1}</h1>

      
    </div>
  )
}

export default Usestateproblems
