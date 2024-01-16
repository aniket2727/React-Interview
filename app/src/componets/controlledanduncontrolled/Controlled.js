


import React, { useState } from 'react'

const Controlled = () => {

    const[data,setdata]=useState(0)
    const handleInputChange = (event) => {
        setdata(event.target.value);
      };
    
  return (
    <div>
      <h1>this is controlled</h1>
      <input
      type="text"
      value={data}
      onChange={handleInputChange}
    />
      <button onClick={()=>setdata(data+1)}>increase </button>
    </div>
  )
}

export default Controlled
