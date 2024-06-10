

// code is written by the aniket kadam
// git child to parent data transfer


import React, { useState } from 'react'

const Childparent=({funt})=>{

    const handledata=()=>{
         funt()
    }
    
    return(
        <div>
         <h1>this is child   componets</h1>
         <button onClick={handledata}>add</button>
        </div>
    )
}

export  const ParentComponets=()=>{
    
    const[data,setData]=useState(1);
    const addData=()=>{
        setData(data+1);
    }
    return(
        <div>
         <h1>this is parent componets </h1>
         <h1>the value of the data is {data}</h1>
         <Childparent funt={addData} />
        </div>
    )
};






