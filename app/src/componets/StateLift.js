import React, { useState } from 'react';

// Child component that receives a value and a function to update that value
const ChildComponent = ({ value, onChange }) => {
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => onChange(value + 1)}>Increment</button>
    </div>
  );
};

// Parent component that manages the shared state
const ParentComponent = () => {
  // State is lifted up to the ParentComponent
  const [sharedState, setSharedState] = useState(0);

  // Handler function to update the shared state
  const handleIncrement = (newValue) => {
    setSharedState(newValue);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent value={sharedState} onChange={handleIncrement} />
    </div>
  );
};



export default ParentComponent