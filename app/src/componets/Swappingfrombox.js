

import React, { useState } from 'react'

const Swappingfrombox = () => {
    const [first, setfirst] = useState(['aniket', 'om', 'sakshi'])
    const [second, setsecond] = useState(['vijay', 'sanjay', 'suraj'])
    var data1 = []
    var data2 = []


    const handlefirst = (e) => {
        console.log(e)
        if (!data1.includes(e)) {
            data1.push(e);
        } else {
            data1.splice(data1.indexOf(e), 1);
        }
    }


    const handlesecond = (e) => {
        console.log(e)
        if (!data2.includes(e)) {
            data2.push(e);
        }
        else {
            data2.splice(data2.indexOf(e), 1);
        }
    }

    const handleswap = () => {
        if (data1.length === data2.length) {
            const result1 = first.filter(item => !data1.includes(item));
            setfirst([...result1, ...data2]);
    
            const result2 = second.filter(item => !data2.includes(item));
            setsecond([...result2, ...data1]);
        } else {
            console.log('Select an equal number of items to swap');
        }
    };

        
        

    
    return (
        <div>

            <h1>this is swapping problem</h1>
            {
                first.map((item, index) => (
                    <div key={index}>
                        {<label>{item}<input type='checkbox' onClick={() => handlefirst(item)} /></label>}
                    </div>
                ))
            }
            <br />
            <br />
            <br />

            {
                second.map((item, index) => (
                    <div key={index}>
                        {<label>{item}<input type='checkbox' onClick={() => handlesecond(item)} /></label>}
                    </div>
                ))
            }

            <br />
            <button onClick={handleswap}>swap</button>
        </div>
    )
}

export default Swappingfrombox
