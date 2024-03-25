



import react, { useCallback, useState } from 'react'
const Usecallback=()=>{
    const [data,setdata]=useState(0)
    const result=useCallback(()=>{
        return 10
    },[])
    return(
        <div>
           <h1>this is call back</h1>
           <h1>{result()}</h1>
        </div>
    )
}


export default Usecallback;