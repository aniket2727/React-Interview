



import React, {  useRef } from 'react'

const Uncontoller = () => {
    const input=useRef()
    const handledata=()=>{
        console.log(input.current.value)
    }
  return (
    <div>
         <input type="text" ref={input} />
      <button onClick={handledata}>Get Input Value</button>
    </div>
  )
}

export default Uncontoller
