

// all operatioms run sysnchronously

//start promises end

import React from 'react'

const Promises = () => {
    console.log("start")

    const promises=new Promise((resoleve,reject)=>{
        console.log("promises")
    })

    console.log("end")
  return (
    <div>
      
    </div>
  )
}

export default Promises
