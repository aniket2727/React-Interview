

//  code is wrirren by the aniket kadam
// simple form



import React, { useState } from 'react'


const Code34=()=>{
    const[data,setData]=useState('');

    

    const addData=(e)=>{
        e.preventDefault();
        console.log("the data is ",data);
        setData('')

    }
    return(
        <div>
           <h1>Program</h1>
             <form onSubmit={addData}>
               <input placeholder='addData' id='info' onChange={(e)=>setData(e.target.value)}/>
               <button type='submit'>Submit</button>
             </form>
        </div>
    )
}


export default Code34;