
//event handlings into the reacts

import React from 'react'

const Problem4 = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };
    return (
        <button onClick={handleClick}>Click me</button>
    )
}

export default Problem4
