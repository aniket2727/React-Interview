




import React, { useState } from 'react'

const Statemain = () => {
    const [data,setData]=useState(0)
    const handleonclick=()=>{
           setData(data+1)
           setData(data+1)
           setData(data+1)
    }
  return (
    <div>
         <button onClick={handleonclick}>{data}</button>
    </div>
  )
}

export default Statemain
