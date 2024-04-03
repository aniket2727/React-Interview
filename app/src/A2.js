


import React from "react";


const A2=()=>{

    const  data={
        name:"aniket kadam",
        age:"1000",
        address:"girvi phaltan",
        friend:["anikket","sanket","om"]
    }
    const data2=Object.assign({},data)
    console.log("this is data 1",data)
    console.log("this is data2",data2)
    data2.name="sanket"
    data2.friend=["raj"]
    data.age="50000"
    console.log("data after the assign and after changing data1",data)
    console.log("data after the assign and the change values  of data2",data2)


    const originalcopy=[{
        name:"aniket kadam",
        age:"1000"
    },{
       name:'sanket jagdale',
       age:"3000"
    }]


    const shallowcopy={...originalcopy}

    shallowcopy[0].name="king kong";



    console.log("this is original copy",originalcopy);
    console.log("this is shallow copy",shallowcopy)

    return(
        <div>
          <h1>testing the object properties</h1>
        </div>
    )
}



export default A2;