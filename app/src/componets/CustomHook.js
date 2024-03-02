

import React, { useEffect} from 'react'

const CustomHook = () => {
   useEffect(()=>{
    console.log("this is custom hooks")
   },[])
  return (
    <div>
      
    </div>
  )
}

export default CustomHook
