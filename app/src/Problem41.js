



// move all zeores to the end of arrray;

import React from 'react'

const Movezero=()=>{

    function Movezeor(data){

        let i=0
        let j=data.length-1


        while(i<j){
            if(data[i]===0){
                let temp=data[i]
                data[i]=data[j]
                data[j]=temp
                j--;
            }

            i++;
        }


        return data;

    }

    const data=[1,0,0,2,1,2]
    const result=Movezeor(data)
    console.log(result)
    return(
        <div>
          <h1>move zeros</h1>
        </div>
    )
}



export default Movezero