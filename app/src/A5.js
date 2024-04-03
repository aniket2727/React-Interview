


//  object properties 



import React from 'react'


const A5=()=>{


    const data={
        name:"aniket kadam",
        age:"100",
        add:function(name){
            console.log("my name is ",name)
        }
    }
    const obj=data;
    obj.add("sanket ")
    return(
        <div>
            <h1>object properties </h1>
        </div>
    )
}



export default A5;