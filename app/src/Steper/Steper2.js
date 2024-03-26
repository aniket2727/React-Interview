


import React, { useState } from 'react'

const Steper2 = ({ steps }) => {
    const [count, setcount] = useState(0)

    const handleprev = () => {
      
         setcount(count-1)
    }

    const handlenext = () => {
        setcount(count+1)
    }

    return (
        <div>
            <div className='steps'>
                {
                    steps.map((item, index) => (
                        <div key={index} style={{
                            display: 'inline-block',
                            border:'1 px solid red',
                            margin: '10px', padding: '10px', cursor: '10px',
                            background:index===count ? '#007bff': index < count ? '#28a745' : '#fff',
                            color: index === count|| index < count ? '#fff' : '#000'
                        }}  onClick={() => count(index)}>
                            {index + 1}
                        </div>
                    ))
                }
            </div>
            <div className="step-content">
            {steps[count]}
        </div>
            {
                count>0  && <button onClick={handleprev}>pre</button>
            }
            {
                count<steps.length && <button onClick={handlenext}>next</button>
            }
           
        </div>
    )
}

export default Steper2
