



import React, { useState, useEffect } from 'react';

const Timeout = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 3000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, ); 

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Timeout;
