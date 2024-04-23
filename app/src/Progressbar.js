



// progersss bar code
import { useEffect, useState } from "react";

const Progressbar=()=>{


    const [progress,setProgress]=useState(0)

    useEffect(()=>{
        const interval=setInterval(()=>{

            if(setProgress>=100){
                setProgress(0)
            }
            else{
                setProgress(prev=>prev+1)
            }

        },500)
   

        return()=> clearInterval(interval)

        
    }, [progress])


    return(
        <div>
           <h1>this is progress bar code</h1>
           <h1>{progress}</h1>

           <div style={{width:'200px' , border:'1px solid black' ,borderRadius:'10px',height:'20px'}}>
             <div style={{width:`${progress}%`  ,backgroundColor:'green' ,borderRadius:'10px',height:'20px'}}>
             </div>
           </div>
        </div>
    )
}


export default Progressbar;