import React, { useState } from 'react';

const Problem25 = () => {
    const [inputData, setInputData] = useState('');
    const [StringData, setStringData] = useState([])
    const [NumberData, setNumberData] = useState([])


    const handletype = () => {
        if (!isNaN(inputData)) {
            setNumberData([...NumberData, inputData])
          
        }
        else {
            setStringData([...StringData, inputData])
        }
    }

    return (
        <div>
            <h1>Enter data (numbers or strings)</h1>
            <input
                type='text'
                placeholder='Enter data'
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
            />

           <button onClick={handletype}>submit</button>



            <h1>String data</h1>

            {

                StringData.map((item, index) => (
                    <div key={index}>
                        <h1>{item}</h1>
                    </div>

                ))}


            <h1>intger data</h1>
            {
                NumberData.map((item, index) => (
                    <div key={index}>
                        <h1>{item}</h1>
                    </div>

                ))

            }
        </div>


    );
};

export default Problem25;
