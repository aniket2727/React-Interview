



import React from 'react'
import { json } from 'react-router-dom'
const A4=()=>{
    const originalclone=
    {
        name:"aniket",
        age:"1000"
    }
    const deepclone=JSON.parse(JSON.stringify(originalclone))

    console.log("this is deep clone",deepclone)
  return(
    <div> <h1>this is deep clone </h1>
    </div>
  )
}


export default A4;