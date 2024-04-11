


//    excel shhet problems in javascript


import { useEffect } from "react";

const Excelsheet=()=>{


    useEffect(()=>{

        const findrow=(data)=>{
            let count=0;
            for(let i=0;i<data.length;i++){
            
                 var value=data.charCodeAt(i)-'A'.charCodeAt(0)+1
                 console.log("char at a",'A'.charCodeAt(0)+1)
                 count=count*26+value
            }
              
            return count;

        }

        console.log(findrow("AB"))

    },[])
    return(
        <div>

           <h1>this is excel shhet rpobelsm related to leetcode</h1>
        </div>
    )
}


export default Excelsheet;