import React, { useState, useRef, useEffect } from "react";

const Handleref = () => {
    const refFocus = useRef();
    const [data, setData] = useState(0);
    const [text, setText] = useState('');
    const inputRef = useRef();
    const flagRef = useRef(false);
    const countRef = useRef();
    const [value, setValue] = useState(0);

    useEffect(() => {
        refFocus.current.focus(); // Focus on input when component mounts
    }, []);

    const handleIncrease = () => {
        setData(prevData => prevData + 1); // Increment data
    };

    const toggleFlag = () => {
        flagRef.current = !flagRef.current; // Toggle flag
        console.log('Flag value:', flagRef.current);
    };

    const focusInput = () => {
        inputRef.current.focus(); // Focus on input
    };

    const handleCount = () => {
        countRef.current = value + 1; // Increment countRef
        setValue(prevValue => prevValue + 1); // Increment value
    };


    console.log("this is rendering")

    return (
        <div>
            <h1>This is countref: {countRef.current}</h1>
            <h1>{value}</h1>
            <h1>This is useRef</h1>
            <h1>{data}</h1>
            <input placeholder="Handle Ref" ref={refFocus} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleIncrease}>Add</button>
            <input ref={inputRef} />
            <button onClick={toggleFlag}>Toggle Flag</button>
            <button onClick={focusInput}>Focus Input</button>
            <button onClick={handleCount}>Increment</button>
        </div>
    );
};

export default Handleref;
