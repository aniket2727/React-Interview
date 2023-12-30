

//what is use of useref in react
import React, { useRef, useEffect } from 'react';

function Problem1() {
  const countRef = useRef(0);

  useEffect(() => {
    // The component will not re-render when countRef.current changes
    console.log(countRef.current);
  }, []);

  return (
    <button onClick={() => (countRef.current += 1)}>
      Increment Count (without re-render)
    </button>
  );
}

export default Problem1;
