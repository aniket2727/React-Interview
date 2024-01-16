




// shallow and deep copy



import React from 'react'
import { json } from 'react-router-dom'

const Shallowanddeep = () => {


    // shallow copy and the deep copy
    const data=[1,2,3,4,5,6]
    const shallowcopy=[...data]


    const dataObject={a:1,b:2,c:3}
    const shallowdata={...dataObject}
     
    console.log(shallowcopy)
    console.log(shallowdata)

    // deep copy 
    const a=[1,2,3,4,4]
    const numbers={a:1,b:2}

    const deepcopy1=JSON.parse(JSON.stringify(a))
    const deepcopy=JSON.parse(JSON.stringify(numbers))



    console.log(deepcopy)
    console.log(deepcopy1)
  return (
    <div>
      
    </div>
  )
}

export default Shallowanddeep
