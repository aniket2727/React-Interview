


import React, { useState } from 'react'

const ChangeButtoncoclors = () => {
    const [state, setstate] = useState(true)
    const [colors, setcolrs] = useState('black')

    const handlecolors = () => {
        setstate(!state)

        if (state) {
            setcolrs('black')

        }

        else {
            setcolrs('red')
        }

    }
    return (
        <div>
            <div style={{backgroundColor:colors,height:'200px', width:'200px'}}>
                 <h1>this is box</h1>
            </div>

            <button onClick={handlecolors}>change colors</button>

        </div>
    )
}

export default ChangeButtoncoclors
