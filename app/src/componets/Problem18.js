




// password hide and show problems
import React, { useState } from 'react'

const Problem18 = () => {
    const [flag, setflag] = useState(true)
    const handleShow = () => {
        setflag(!flag)
    }
    return (
        <div className='main-class'>
            <input type={flag ? 'text' : 'password'} placeholder="enter password" />
            <button onClick={handleShow}>{flag ? 'hide' : 'show'}</button>
        </div>
    )
}

export default Problem18
