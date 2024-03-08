


import React, { useState } from 'react'

const Changebuutonscolors2 = () => {


    const [state, setState] = useState(true)


    const handlechange = () => {
        setState(!state)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <button style={ state?{ border: 'black', borderRadius: '10px', backgroundColor: 'red' }:
            {border: 'green', borderRadius: '10px', backgroundColor: 'pink'}}onClick={handlechange}>click me</button>

        </div >
    )
}

export default Changebuutonscolors2
