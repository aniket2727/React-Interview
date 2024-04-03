


// this code about the local ans seesoion storege ito the  javascript


import React from 'react'
const A6=()=>{

    localStorage.setItem("name","aniket")
    const data=localStorage.getItem("name");
    console.log(data)

    // how to delete this name key


    localStorage.removeItem("name")
    const data2=localStorage.getItem("name");
    console.log(data2)  // output is null
   

    // for the clearing the all local strorage we can we   localStorage.clear();


    // code for the sesiion stoorage


    sessionStorage.setItem("name","sanket");
    const data3=sessionStorage.getItem("name");
    console.log("for the session storege",data3)
    return(
        <div>
          <h1>this is seesion and local storage problems</h1>
        </div>
    )
}



export default A6;