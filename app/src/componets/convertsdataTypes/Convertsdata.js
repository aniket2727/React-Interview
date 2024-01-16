


import React from 'react'

const Convertsdata = () => {


    // convertings "123" to 123
    let numericString = "123";
    let numericValue = parseInt(numericString, 10); 
    console.log(numericValue)


    // convert abc to 666768


    let data="ABC";
    let ascii=[]
    for(let i=0;i<data.length;i++){
         ascii.push(data.charCodeAt(i))
    }
    
    let rresult=ascii.join('')


    console.log(rresult)
    return (
        <div>

        </div>
    )
}

export default Convertsdata
