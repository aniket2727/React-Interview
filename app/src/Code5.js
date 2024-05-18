import React from 'react'


// finding the exicution time of code

const Code5 = () => {

    var a=new Date().getTime();
    console.log(1+2);
    var b=new Date().getTime();
    console.log("the time exicutions",b-a)
 
    function call(){
        console.log("this is call ")
    }

    console.time()
    call()
    console.timeEnd()
  return (
    <div>
      
    </div>
  )
}

export default Code5
