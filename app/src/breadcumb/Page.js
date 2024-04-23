


import React from 'react'

const Page = ({item}) => {
  return (
    <div>
    <ol>
       {
        item.map((item,index)=>(
            <li key={index} className={`breadcrumb-item ${index===item.length-1 ?'active':''}`}>
            {
                index===item.length-1?(item.label):(  <a href={item.url}>{item.label}</a>)
            }
            </li>
        ))
       }
    </ol>
      
    </div>
  )
}

export default Page
