

// react coding questions

import React, { useState } from 'react'

// name of the props and the name at the sending data  must be the same
//  parent to child data transfer

const Child=({data})=>{

    return(
        <div>
          <h1>this is the child componets </h1>
          <h1>my nam is {data}</h1>
        </div>
    )
}

const Codingquestions=()=>{

    const[data,setData]=useState('Aniket');
    return(
        <div>
        <h1>this is coding questions </h1>
        <Child data={data} />
        </div>
    )
}


export default Codingquestions;