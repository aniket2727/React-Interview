


import React from 'react'

const ParentT = ({data}) => {

    const {name,age}=data;
    console.log(data)
  
    console.log("this is data",name)
    console.log("this is age",age)
  return (
    <div>
       <h1>this is parent</h1>
    </div>
  )
}

export default ParentT
