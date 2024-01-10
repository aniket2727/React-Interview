



import React, { useState, useEffect } from 'react';

const ProgressBar = ({ total, interval, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + interval);
      } else {
        clearInterval(intervalId);
        onComplete();
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [progress, interval, onComplete]);

  return (
    <div style={{ width: '100%', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden' }}>
      <div
        style={{
          width: `${progress}%`,
          height: '30px',
          backgroundColor: '#4CAF50',
          textAlign: 'center',
          lineHeight: '30px',
          color: 'white',
        }}
      >
        {`${progress.toFixed(2)}%`}
      </div>
    </div>
  );
};

// Example usage
const Handleprogress = () => {
  const handleComplete = () => {
    console.log('Progress complete!');
    // Add any logic you want to execute when the progress is complete
  };

  return (
    <div>
      <h1>React Progress Bar</h1>
      <ProgressBar total={100} interval={10000} onComplete={handleComplete} />
    </div>
  );
};

export default Handleprogress;
