import React, { useState, useCallback } from 'react';
import ChildH from './ChildH';

const ParentH = () => {
    const [data, setData] = useState(0);
    const [count,setcount]=useState(0)
    // useCallback memoizes the handlecount function
    const handlecount = useCallback(() => {
        setData(prevData => prevData + 1);
        console.log("re render")
    }, [count]); // Dependency array is empty since handlecount doesn't depend on any external variables

    return (
        <div>
            <h1>this is data{data}</h1>
            <h1>this is count{count}</h1>
            <button onClick={()=>setcount(count+1)}>count</button>
            <ChildH send={handlecount}/>
        </div>
    );
}

export default ParentH;
