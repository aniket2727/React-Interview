


//  this is usemomo and usecallback


import React, { useCallback, useMemo, useState } from 'react'

const A40=()=>{
    
    const [count,setcount]=useState(0)

    const memofunctions=useMemo(function(){
        let a,b;
        a=10;b=20;
        console.log(a+b)
        return 10;

    },[count])



    const usecallbackfunctions=useCallback(function(){
        console.log("this use callback is runned")
    })
    return(
        <div>
           <h1>this is usememo</h1>
           <h1>{memofunctions}</h1>
           <button onClick={usecallbackfunctions}>usecall</button>
           <button onClick={()=>setcount(count+1)}>add</button>
        </div>
    )
}


export default A40;