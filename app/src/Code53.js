

// code is written by aniket kadam
// sort according to the senetence

import { useEffect } from "react";



const Sortsentencewiththewordlenght=()=>{

    const handleproblem=()=>{
        const a="my name is aniket";
        const b={};
        const arr=a.split(' ');
        console.log("array us",arr)
        arr.forEach((item)=>{
             b[item]=item.length;
        });

        const sortedResult=arr.sort((i,j)=>b[i]-b[j]);
        const result=sortedResult.join(' ')
        console.log(result); 
    }

    useEffect(()=>{
        handleproblem();
    })
    return(
        <div>
           <h1>sort the senetence</h1>
        </div>
    )
}


export default Sortsentencewiththewordlenght;