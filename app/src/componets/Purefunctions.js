import React from 'react';

// A pure function that takes props and returns JSX
const PureFunctionComponent = (props) => {
  const { value } = props;

  // This function is pure because it doesn't modify any external state,
  // it only depends on its input (props) and returns JSX.
  const calculateSquare = (num) => {
    return num * num;
  };

  return (
    <div>
      <p>Original Value: {value}</p>
      <p>Square: {calculateSquare(value)}</p>
    </div>
  );
};

export default PureFunctionComponent;
