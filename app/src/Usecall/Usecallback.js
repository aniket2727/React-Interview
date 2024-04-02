


import React, { useCallback, useState } from 'react'
import MajorChildcomponets from './Childcallbacj';

const Usecallback1=()=>{

    const [count,setcount]=useState(0);
    const callback1=useCallback(()=>{
          setcount(count+1)
    })
    return(
        <div>
        <h1>the value of the count {count}</h1>
        <h1>this is main parent class </h1>
        <MajorChildcomponets props={callback1}/>
        </div>
    )
}


export default Usecallback1;