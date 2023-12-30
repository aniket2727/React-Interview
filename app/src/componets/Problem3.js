


//  there is no rerebder whan value is ot changed
import React, { useRef } from 'react';

function Problem3() {
  const countRef = useRef(0);

  const incrementCount = () => {
    countRef.current += 1;
    console.log('Current Count:', countRef.current);
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default  Problem3;
