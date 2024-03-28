import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const Page2 = () => {
    const location = useLocation(); // Initialize useLocation hook
    const data = location.state.data; // Access passed data

    return (
        <div>
            <h1>Data received in Page2:</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        Name: {item.name}, Email: {item.email}, Age: {item.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page2;
