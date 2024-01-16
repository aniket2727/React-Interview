



import React, { useEffect, useRef } from 'react'

const Useref1 = () => {


    const count=useRef(0);
    useEffect(()=>{
           const intervalid= setInterval(()=>{

            count.current=+1
            console.log(count.current)

            },5000)
            return () => clearInterval(intervalid);
        })
    
  return (
    <div>
      <h1>..............timer is runnig</h1>
    </div>
  )
}

export default Useref1
