import React, { useState } from 'react';

const Problem14 = () => {
    const data = [10, 7, 4, 8, 1];
    const [message, setMessage] = useState('');

    const handleData = () => {
        const a = {};
        for (const item of data) {
            if (!a[item]) {
                a[item] = 1;
            } else {
                return -1;
            }
        }
        return 1;
    };

    const checkDuplicates = () => {
        const result = handleData();
        if (result === 1) {
            setMessage('There are no duplicates');
        } else {
            setMessage('Duplicates are present');
        }
    };

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={checkDuplicates}>Check</button>
        </div>
    );
};

export default Problem14;
