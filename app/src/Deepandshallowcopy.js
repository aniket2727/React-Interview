import React from 'react';
import _ from 'lodash';

const DeepAndShallowCopy = () => {
  const originalObject = { a: 1, b: { c: 2 } };
  const shallowCopy = { ...originalObject };
  shallowCopy.b.c = 3;
  const originalObject2 = { a: 1, b: { c: 2 } };
  const deepCopy = _.cloneDeep(originalObject2);
  deepCopy.b.c = 3;

  return (
    <div>
      <h1>This is the original copy: {JSON.stringify(originalObject)}</h1>
      <h1>This is the shallow copy: {JSON.stringify(shallowCopy)}</h1>
      <h1>This is the original copy: {JSON.stringify(originalObject2)}</h1>
      <h1>This is the deep copy: {JSON.stringify(deepCopy)}</h1>
    </div>
  );
};

export default DeepAndShallowCopy;
