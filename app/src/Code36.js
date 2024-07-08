


// code is written by the aniket kadam

import React from 'react'
import { useState } from 'react';
const DeleteData = () => {
    const[data,setData]=useState(['aniket','kadam','vijay','om','sakshi']);

    const handleDelete=(item)=>{
        const selected=data.filter(a=>a!==item);
        setData(selected);
        console.log('the list is',data)
    }
    return (
        <div>
            <h1>Program</h1>
            {
                data.map((item,index)=>(
                    <div key={index}>
                      <h1>{item}</h1>
                      <button onClick={()=>handleDelete(item)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
};


export default DeleteData;