


// this is code is related to the usememeo

import React, { useMemo, useState } from 'react'



const Handleusememo=({Handleusememo})=>{


    const [count,setcount]=useState(0)
    const [text,settext]=useState('')


    const handleExpensice=(count,text)=>{
        console.log("this is exprensive functions");
        return text.toUpperCase() +"-"+count


    }

    const resultusememeo=useMemo(()=>handleExpensice(count,text),[count,text])
    return(
        <div>
          <h1>this is usememo</h1>
          <input placeholder='enter data' onChange={(e)=>settext(e.target.value)}/>
          <button onClick={()=>setcount(count+1)}>increase</button>
          <h1>this is count {count}</h1>
          <h1>this is text{text}</h1>
          <h1>{resultusememeo}</h1>
        </div>
    )
}



export default Handleusememo;