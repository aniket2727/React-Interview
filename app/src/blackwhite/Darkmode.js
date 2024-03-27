



import react, { useState } from 'react'

const Darkmode=()=>{

    const [state,setState]=useState(true)
    const handlechange=()=>{
        setState(!state)
    }
    

    return(
        <div style={{background:state ? 'red':'green'}}>
             <button onClick={handlechange}>{state ? 'convert to  light mode ':'convert to dark mode'}</button>
            <h1>this is dark and light mode</h1>
        </div>
    )
}


export default Darkmode;