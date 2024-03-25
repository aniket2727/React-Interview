

import React, { useState } from 'react'
import ParentT from './ParentT'
const Childt = () => {

    const [data,setdata]=useState(["aniket","kadam"])
    const [age,setage]=useState(10)
  return (
    <div>
      <ParentT data={{name:data,age:age}}/>
    </div>
  )
}

export default Childt
