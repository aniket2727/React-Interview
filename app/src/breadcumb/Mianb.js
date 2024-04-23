




import React from 'react'
import Page from './Page'


const Mainb=()=>{


    const data=[{
        label:"home",url:"/"
    },{
        label:"category",url:"/category"
    },{
        label:"subcategory",url:"/subcategory"
    },{
        label:"current page"
    }]
    return(
        <div>
           <Page  item={data} />
        </div>
    )
}



export default Mainb;