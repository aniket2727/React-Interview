


import React from 'react'
import { useRef } from 'react';

const Useref = () => {
 // Create a ref object
 const inputRef = useRef(null);

 const handleClick = () => {
   // Access the DOM node using .current property
   inputRef.current.focus();
 };

 return (
   <div>
     {/* Assign the ref object to the input element */}
     <input ref={inputRef} type="text" />
     <button onClick={handleClick}>Focus Input</button>
   </div>
 );
}

export default Useref
