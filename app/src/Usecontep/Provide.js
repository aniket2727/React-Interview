import React, { useState } from 'react';
import MyContext from './MyContext'; // Import the context

const MyProvider = ({ children }) => {
    // Define the state you want to share across components
    const [sharedState, setSharedState] = useState('Hello, world!');

    return (
        // Provide the state to the context provider
        <MyContext.Provider value={{ sharedState, setSharedState }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
