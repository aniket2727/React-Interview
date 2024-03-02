
//acccepting the functionn and value from parent
import React from 'react'

const Childcomponets = ({value,callback}) => {

    const handlecounter=()=>{
        callback()
    }
  return (
    <div>
    <h1>{value}</h1>
    <button onClick={handlecounter}>couter</button>
    </div>
  )
}

export default Childcomponets
