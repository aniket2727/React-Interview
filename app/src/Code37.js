// This code is written by Aniket Kadam

import React, { useState } from 'react';

const UpdateData = () => {
    const [data, setData] = useState(['aniket', 'kadam', 'vijay']);
    const [editValues, setEditValues] = useState([...data]);

    const handleInputChange = (index, value) => {
        const newEditValues = [...editValues];
        newEditValues[index] = value;
        setEditValues(newEditValues);
        console.log("the edit values",editValues)
    };

    const handleChangeData = (index) => {
        const updatedData = data.map((item, i) => (i === index ? editValues[index] : item));
        setData(updatedData);
    };

    return (
        <div>
            <h1>Update Data</h1>
            {data.map((item, index) => (
                <div key={index}>
                    <h1>{item}</h1>
                    <input
                        placeholder='Enter name'
                        value={editValues[index]}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                    <button onClick={() => handleChangeData(index)}>Change</button>
                </div>
            ))}
        </div>
    );
};

export default UpdateData;
