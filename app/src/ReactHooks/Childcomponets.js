import React from 'react';

const ChildComponent = ({ increase }) => {
    return (
        <div>
            <button onClick={increase}>Increase</button>
        </div>
    );
}

export default ChildComponent;
