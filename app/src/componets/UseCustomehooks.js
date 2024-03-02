import React, { useEffect } from 'react'
import CustomHook from './CustomHook'
const UseCustomehooks = () => {

    useEffect(()=>{
        console.log("this is useeffect")
    })

    CustomHook(()=>{
        console.log("custome hooks called")
    })
  return (
    <div>
      <h1>customehooks</h1>
    </div>
  )
}

export default UseCustomehooks
