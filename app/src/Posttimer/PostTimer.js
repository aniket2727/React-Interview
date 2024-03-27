import React, { useState, useEffect } from 'react';

const PostTimer = () => {
    const [h, setH] = useState(0);
    const [m, setM] = useState(0);
    const [s, setS] = useState(0);
    const [statem, setStatem] = useState(false);
    const [overall, setOverall] = useState(0);

    useEffect(() => {
        if (statem && overall > 0) {
            const interval = setInterval(() => {
                setOverall(prevOverall => prevOverall - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [statem, overall]);

    const handleStart = () => {
        let overallSec = h * 60 * 60 + m * 60 + s;
        setOverall(overallSec);
        setStatem(true);
    };

    const handlePause = () => {
        setStatem(false);
    };

    const handleRestart = () => {
        setStatem(false);
        setOverall(0);
        setH(0);
        setM(0);
        setS(0);
    };

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <div>
            <h1>This is timer</h1>
            {
                !statem && overall === 0 && (
                    <>
                        <input placeholder='hour' onChange={(e) => setH(e.target.value)} />
                        <input placeholder="minute" onChange={(e) => setM(e.target.value)} />
                        <input placeholder="sec" onChange={(e) => setS(e.target.value)} />
                        <button onClick={handleStart}>Start</button>
                    </>
                )
            }
            {
                statem ? (
                    <button onClick={handlePause}>Pause</button>
                ) : (
                    <button onClick={handleRestart}>Restart</button>
                )
            }
            <h1>{formatTime(Math.floor(overall / 3600))}:{formatTime(Math.floor((overall % 3600) / 60))}:{formatTime(overall % 60)}</h1>
        </div>
    );
};

export default PostTimer;
