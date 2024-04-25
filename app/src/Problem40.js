



import React from 'react'


const Smallproblem=()=>{

    // function ggcall(){
    //     return{
    //         success:true
    //     }
    // }
    // console.log(ggcall())   // ans :success :true



    // const obj={
    //     name:"anikket",
    //     ans:()=>{
           
    //         console.log("the name is ",this.name)

    //     }
    // }

   // obj.ans()    // we get error regardings to the undefined because arrow functions have not its own  content  ;gives eror

    //   function com(a,b){
    //        if(a==b){    // only check the values
    //         console.log("equal")
    //        }
    //        else{
    //           console.log("not equal")
    //        }
    //   }


    //   com(0,"0")    // output will be the equal



    const first={value:'10'}
    const second={value:"10"}

    console.log(first===second)
    console.log(first==second)

    return(
        <div>
          <h1>this is the javascript problems</h1>
        </div>
    )
}


export default Smallproblem;