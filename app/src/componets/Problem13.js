
//  best time to but and sell stocks

import React, { useState } from 'react'

const Problem13 = () => {


    var data=[9,3,5,13,5,6]
    var len=data.length;
    var min=data[0]
    var max=0


    if (!prices || prices.length === 1) {
        return 0;
    }
    for (var i=0;i<len;i++){
        min=Math.min(data[i],min)
        max=Math.max(max,data[i]-min)
    }
    console.log(`min is ${min} and max is ${max}`)
  return (
    <div>
         <h1> have a good day from greatest progrmmer from all time</h1>
    </div>
  )
}

export default Problem13
