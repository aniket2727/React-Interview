import React from 'react';

const ChildParentcompoents = ({ data }) => {
    console.log(data); // Check if data is received properly
    return (
        <div>
            <h2>Data from Parent:</h2>
            <ul>
                {data && data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChildParentcompoents;
