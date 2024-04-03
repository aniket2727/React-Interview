



//problem related to the closure


import React from 'react'
const A3=()=>{

    function parentfunctions(){
        const name="this is aniket ";

        function child(){
            console.log(name)
        }
        child()
    }
    const cl=parentfunctions();
    console.log(cl)


    return(
        <div>
          <h1>this is closure problems</h1>
        </div>
    )

}



export default A3;