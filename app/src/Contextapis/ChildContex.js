// Child.js
import React, { useContext } from 'react';
import mycontext from './Context';

const Child = () => {
    const result = useContext(mycontext);
    return (
        <div>
            <h1>this is child</h1>
            <h1>this is result {result}</h1>
        </div>
    );
};

export default Child;
