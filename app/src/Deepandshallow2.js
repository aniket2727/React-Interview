import React from 'react';

const DeepAndShallow2 = () => {
  const originalObject = { a: 2, b: 3 };
  const shallowCopy = Object.assign({}, originalObject);
  const deepCopy = JSON.parse(JSON.stringify(originalObject));

  return (
    <div>
      <h1>This is shallow copy: {JSON.stringify(shallowCopy)}</h1>
      <h1>This is deep copy: {JSON.stringify(deepCopy)}</h1>
    </div>
  );
};

export default DeepAndShallow2;
