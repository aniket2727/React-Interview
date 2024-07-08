


// code is written by the aniket kadam
// add data into the buckets

import React, { useState } from 'react'

const Code35=()=>{
    const[list,setLits]=useState([]);
    const[data,setData]=useState('');

    const addData=(item)=>{
        if(item!='')
        {
            setLits(prev=>[...prev,item]);
            console.log("the list is",list);

        }
         
    }
    return(
        <div>
            <h1>program</h1>
            <input placeholder='enter data' value={data} id='data' onChange={(e)=>setData(e.target.value)} />
            <button onClick={()=>addData(data)}>Add Data</button>
        </div>
    )
}


export default Code35;

