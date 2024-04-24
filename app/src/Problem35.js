


//   this is coding questions


import React from 'react'
const Displayallchar=()=>{
    // for (let i=65;i<90;i++){
    //     console.log(String.fromCharCode(i))
    // }


    // console.log('a'.charCodeAt(0))
    // console.log(NaN===null)
    // console.log(undefined===null)
    // const data={name:"aniket"}
    // const data2={name:"aniket"}
    // console.log("comparision",data===data2)

    const data=[]
    for(let i=65;i<90;i++){
        data.push(String.fromCharCode(i))

    }



    console.log(data)

       return(
        <div>
           <h1>this is char problems</h1>
        </div>
    )
}




export default Displayallchar;