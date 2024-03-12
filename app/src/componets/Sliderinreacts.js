


import React, { useState } from 'react'
import './slider.css'
const Sliderinreacts = () => {
    const [state, setstate] = useState(1)
    const [image, setimage] = useState([
        { "image": "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "image": "https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "image": "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "image": "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "image": "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ])

    const handleincrease = () => {
        if (state < 4) {
            setstate(state + 1)
        }

    }


    const handledecrease = () => {
        if (state > 0) {
            setstate(state - 1)
        }

    }
    return (
        <div className='mainslider'>
            <button onClick={handledecrease}>increase</button>
            {
                <div >
                    {
                        image.map((item, index) => (
                            state === index &&
                            <div key={index} className='images'>
                                <img src={item.image} alt='image' />
                            </div>

                        ))
                    }
                </div>

            }

        <button onClick={handleincrease}>descrease</button>

        </div>
    )
}

export default Sliderinreacts
