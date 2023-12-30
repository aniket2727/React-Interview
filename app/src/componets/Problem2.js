import React, { useRef } from 'react';

function Problem2() {
  const mutableValueRef = useRef('initial value');

  const handleChange = () => {
    mutableValueRef.current = 'new value';
    console.log(mutableValueRef.current);
  };

  return (
    <div>
      <p>{mutableValueRef.current}</p>
      <button onClick={handleChange}>Change Value</button>
    </div>
  );
}

export default Problem2;
