



// this is usecall back functions



import React, { useState } from 'react'
import {useCallback} from 'react'

const Handlecallback=()=>{

    const [data,setdata]=useState(0);

    const count=useCallback(()=>{
        // this is callback fuctions
        console.log("callback is called")
        setdata(prev=>prev+1);
    },[])

    const[data1,setdata1]=useState(0);

    const handle=()=>{
         setdata1(data1+1)
    }
    return(
        <div>
        <h1>this is count {data}</h1>
        <h1>this is data2 {data1}</h1>
        <h1>this is callback functions</h1>
        <button onClick={count}>add</button>
        <button onClick={handle}>additions</button>
        </div>
    )
}


export default Handlecallback;