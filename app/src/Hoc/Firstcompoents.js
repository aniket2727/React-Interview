import React, { useEffect } from 'react';

// Define a higher-order function
const withLogging = (WrappedComponent) => {
  // Return a new functional component
  return (props) => {
    useEffect(() => {
      console.log('Component is mounted');
      // Clean-up function for when the component is unmounted
      return () => {
        console.log('Component is unmounted');
      };
    }, []);

    // Render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

// Define a functional component
const MyComponent = (props) => {
  return (
    <div>
      <h1>Hello, I'm a functional component!</h1>
      <p>{props.message}</p>
    </div>
  );
};

// Wrap the functional component with the higher-order function
const MyComponentWithLogging1 = withLogging(MyComponent);

export default MyComponentWithLogging1;
