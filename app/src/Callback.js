import React from 'react';

const Callback = () => {
  const handleData = () => {
    console.log("Hey, I am king");
  };

  return (
    <div>
      <Childcomponents onClick={handleData} />
    </div>
  );
};

const Childcomponents = ({ onClick }) => {
  return (
    <button onClick={onClick}>Click me</button>
  );
};

export default Callback;
