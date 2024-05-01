


//   use  ref for the counter

import { useRef } from "react";


const A41=()=>{


    const countref=useRef(0);
    const handleclick=()=>{
        countref.current+=1;
        console.log(countref.current)

    }
    return(
        <div>
           <h1>the use ref</h1>
           <h1>{countref.current}</h1>
           <button onClick={handleclick}>increase</button>
        </div>
    )
}



export default A41;