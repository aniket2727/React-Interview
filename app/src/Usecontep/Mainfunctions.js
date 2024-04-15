import React, { useContext } from 'react';
import MyContext   from './Contextmaker';

const MyComponent = () => {
    // Use the useContext hook to consume the context
    const { sharedState, setSharedState } = useContext(MyContext);

    // A simple event handler to update the shared state
    const handleClick = () => {
        setSharedState('Hello, React!');
    };

    return (
        <div>
            <p>{sharedState}</p>
            <button onClick={handleClick}>Update State</button>
        </div>
    );
};

export default MyComponent;
