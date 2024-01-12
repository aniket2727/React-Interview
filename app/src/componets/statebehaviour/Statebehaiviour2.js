



import React from 'react'
import { useState } from 'react'

const Statebehaiviour2 = () => {
    const [data,setData]=useState(0)
    const handleonclick=()=>{
           setData(prev=>prev+1)
           setData(prev=>prev+1)
           setData(prev=>prev+1)
    }
  return (
    <div>
             <button onClick={handleonclick}>{data}</button>
    </div>
  )
}

export default Statebehaiviour2
