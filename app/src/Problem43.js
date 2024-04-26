



// recusrive functions


import React from 'react'

const Recursive=()=>{


    function data(n){
        console.log("the value of n",n)

        if(n===0)  return  1;

       
        
        else{
              
              let temp= n*data(n-1)
              console.log("the value of temp is",temp)
              return temp;
        }
    }
     
    const result=data(3);
    console.log(result)
    return(
        <h1>recursive </h1>
    )
}

export default Recursive;