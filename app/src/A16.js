// In your main file where you compose components

import React from 'react';



import withAPICall from './A18';
import MyComponent from './A17';

// Wrap MyComponent with withAPICall
const MyComponentWithAPI = withAPICall(MyComponent, 'https://jsonplaceholder.typicode.com/todos/1');

const Appapi= () => {
  return (
    <div>
      <MyComponentWithAPI />
    </div>
  );
};

export default Appapi;
