import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(5); // Default duration is 5 seconds
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (timerRunning && seconds < duration) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    // Cleanup function to clear the interval when the component unmounts or when timer stops
    return () => clearInterval(intervalId);
  }, [timerRunning, seconds, duration]);

  const handleStart = () => {
    setTimerRunning(true);
  };

  const handleStop = () => {
    setTimerRunning(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setTimerRunning(false);
  };

  const handleDurationChange = (e) => {
    const newDuration = parseInt(e.target.value);
    setDuration(newDuration);
  };

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
      <input
        type="number"
        value={duration}
        onChange={handleDurationChange}
        disabled={timerRunning}
      />
      <button onClick={handleStart} disabled={timerRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!timerRunning}>
        Stop
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
