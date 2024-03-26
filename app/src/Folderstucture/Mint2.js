


import React, { useState } from 'react'
const Driver=({name,content})=>{
      
    const [open,setopen]=useState(true)
    const handletoggel=()=>{
        setopen(!open)
    }
    return(
        <div>
             <h1 onClick={handletoggel}>{name}</h1>
               {
                  open &&<ul>
                  {
                    content.map((item,index)=>(
                        <li>{  typeof item==='object'?(
                            <Driver name={item.name} content={item.content}/>
                    ): <span>{item}</span>}</li>
                      
                    ))
                 }
                  </ul>
               }
        </div>
    )
}



const Mint2 = () => {

    const data=[{
        name:'folder c',
        content:['file js',{name:'pictures',content:['file2.js']}]
    },{
        name:'folder d',
        content:['amazon',{name:"images",content:["file 3"]}]
    },{
        name:"folder d",
        content:['king','kong']
    }]
  return (
    <div>
    {
        data.map((item,index)=>(
            <driver key={index} name={item.name} content={item.content}/>
        ))
    }
      
    </div>
  )
}

export default Mint2
