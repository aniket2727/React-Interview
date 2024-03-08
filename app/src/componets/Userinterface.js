
// fixed navbar means postions is fixed

import React from 'react'

const Userinterface = () => {


    const navbarstyle = {
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'space-evenly',
        position:'fixed',
        top:0,
        width:'100%',
        zIndex:1000,
    }


    const bodystyle={
        height:'100000px'
    }
    return (
        <div>

            <div style={navbarstyle}>
                <h1>name</h1>
                <h1>contact</h1>
                <h1>about</h1>
            </div>

            <div style={bodystyle}>
                <h1>this is body</h1>
            </div>

        </div>
    )
}

export default Userinterface
