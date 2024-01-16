




import React from 'react'
import UseSimplehook from './Simplehook'
const Mycustomehooks = () => {

    const { initialhook, setinitialhooks } = UseSimplehook('intialhooks')
    return (
        <div>
            <div>
                <p>State from Custom Hook: {initialhook}</p>
                <button onClick={() => setinitialhooks('new value')}>Update State</button>
            </div>
        </div>
    )
}
export default Mycustomehooks
