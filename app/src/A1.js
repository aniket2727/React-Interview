


import React from 'react'

const A1=()=>{

    const data={
        name:"aniket kadam",
        age:"100",
        address:"girvi"
    }

    const data2=data;
    console.log("name is aniket kadam",data2.name)
    data2.name='sanket'
    console.log("this is data 1",data)
    console.log("this is data2",data2)

    return(
        <div>
        <h1>this is react</h1>
        <h1>testing object properties</h1>
        </div>
    )
}


export default  A1;