import React from 'react';

// Stateless functional component
const Greeting = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>{props.message}</p>
    </div>
  );
};

export default Greeting;
