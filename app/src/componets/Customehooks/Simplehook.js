



import React, { useEffect, useState } from 'react'

const UseSimplehook = (initialvalue) => {
    const[initialhook,setinitialhooks]=useState(initialvalue)


    useEffect(()=>{
        console.log("this is inital state",initialhook)
    },[initialhook])
    const handlehooks=(newvalue)=>{
        setinitialhooks(newvalue)

    }
  return (
      {initialhook,setinitialhooks}
  )
}

export default UseSimplehook
