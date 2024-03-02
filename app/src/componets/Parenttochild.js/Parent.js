
//sending data from parent to child

import React, { useState } from 'react'
import Childcomponets from './Childcomponets'
const Parent = () => {
    const [count,setcount]=useState(1)
  return (
    <div>

    <Childcomponets
    value={count}
    callback={()=>setcount(count+1)}

    />
      
    </div>
  )
}

export default Parent
