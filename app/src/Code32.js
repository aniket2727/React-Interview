

// the post operations in react js 
// this code is written by aniket kadam

import React from 'react'

const Postdata=()=>{
    const handlepostdata=async()=>{
          console.log("this is event is called");

           const rawResultapi=await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'post',
            body:JSON.stringify({
                title:'prime case',
                body:'bar',
                userId: 1
            }),
            headers:{
                'Content-Type':'application/json;charset=UTF-8'
            }
        })
        const result= await rawResultapi.json();
        console.log("the result is",result)
        }
    return(
        <div>
           <h1>this is post opreations</h1>
           <button onClick={handlepostdata}>add data</button>
        </div>
    )
}


export default Postdata;