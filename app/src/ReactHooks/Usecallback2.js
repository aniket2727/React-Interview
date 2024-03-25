import React, { useCallback, useState } from 'react';
import ChildComponent from './Childcomponets';

const Usecallback = () => {
    const [count, setCount] = useState(0);

    const increase = useCallback(() => {
        setCount(prevCount => prevCount + 1);
        console.log("increase count");
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <ChildComponent increase={increase} />
        </div>
    );
}

export default Usecallback;
