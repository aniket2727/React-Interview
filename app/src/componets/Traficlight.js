import React, { useEffect, useState } from 'react';
import './tra.css';

const TrafficLight = () => {
    const [color, setColor] = useState('red');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeout(() => {
                setColor('red');
                console.log("red is called ")
            }, 3000);

            setTimeout(() => {
                setColor('green');
                console.log("green is called")
            }, 6000);

            setTimeout(() => {
                setColor('yellow');
                console.log("yelloow is called")
            }, 2000);
        }, 11000);

        return () => clearInterval(intervalId);
    }, []); // Add an empty dependency array to avoid infinite loop

    return (
        <div>
            {color === 'green' ? <div className='green'></div> :
                <div className='white'>

                </div>
            }
            {color === 'yellow' ? <div className='yellow'></div> :
                <div className='white'>

                </div>
            }
            {color === 'red' ? <div className='red'></div> :
                <div className='white'>

                </div>
            }

        </div>
    );
};

export default TrafficLight;
