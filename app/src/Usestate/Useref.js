


import React, { useRef } from 'react'

const Userefnew= () => {
  // Define a ref using useRef
  const inputRef = useRef(null);

  const handleFocus = () => {
      // Focus on the input element
      inputRef.current.focus();
  };

  return (
      <div>
          {/* Attach the ref to the input element */}
          <input placeholder='handle change' ref={inputRef} />
          {/* Call handleFocus when the button is clicked */}
          <button onClick={handleFocus}>Focus Input</button>
      </div>
  );
}

export default Userefnew
