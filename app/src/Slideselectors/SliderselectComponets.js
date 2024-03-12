import React, { useState } from 'react';
import './1.css';

const SliderselectComponets = () => {
    const initialData = [
        { name: 'John', email: 'john@example.com' },
        { name: 'Alice', email: 'alice@example.com' },
        { name: 'Bob', email: 'bob@example.com' },
        { name: 'Charlie', email: 'charlie@example.com' },
        { name: 'Diana', email: 'diana@example.com' },
        { name: 'Eva', email: 'eva@example.com' },
        { name: 'Frank', email: 'frank@example.com' },
        { name: 'Grace', email: 'grace@example.com' },
        { name: 'Henry', email: 'henry@example.com' },
        { name: 'Ivy', email: 'ivy@example.com' },
    ];

    const [userData, setUserData] = useState(initialData);
    const blockRange = Math.floor(userData.length / 2);
    const [selectedData, setSelectedData] = useState([]);

    const handleSelected = (index) => {
        let selectedData1;
        switch (index) {
            case 0:
                selectedData1 = userData.slice(0, 2);
                break;
            case 1:
                selectedData1 = userData.slice(2, 4);
                break;
            case 2:
                selectedData1 = userData.slice(4, 6);
                break;
            case 3:
                selectedData1 = userData.slice(6, 8);
                break;
            case 4:
                selectedData1 = userData.slice(8, 10);
                break;
            default:
                selectedData1 = [];
        }
        setSelectedData(selectedData1);
    };

    return (
        <div className='mainC'>
            <div className='blockC'>
                {Array.from({ length: blockRange }, (_, index) => (
                    <div key={index}>
                        <button onClick={() => handleSelected(index)}>{index + 1}</button>
                    </div>
                ))}
            </div>
            <div className='selectedData'>
                {selectedData.map((user, index) => (
                    <div key={index}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderselectComponets;
