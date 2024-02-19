import React, { useState } from 'react';

const UseStateTricks = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 6]);

  // Select the first 3 elements using the slice method
  const firstThree = data.slice(0, 3);

  // Select the last element
  const lastElement = data[data.length - 1];

  // Delete the last element
  const newDataAfterDelete = data.slice(0, -1);

  // Add 7 to the last
  const newDataAfterAddition = [...data, 7];

  // Get the first element
  const [firstElement] = data;

  // Add the first element to the array
  const newDataAfterAddFirstElement = [firstElement, ...data];

  const positionToAdd = 2;
  const elementToAdd = 7;

  const newData = [...data.slice(0, positionToAdd), elementToAdd, ...data.slice(positionToAdd)];


  return (
    <div>
      <h1>This is useState</h1>
      <p>Original Data: {JSON.stringify(data)}</p>
      <p>First Three Elements: {JSON.stringify(firstThree)}</p>
      <p>Last Element: {lastElement}</p>
      <p>Data After Deleting Last Element: {JSON.stringify(newDataAfterDelete)}</p>
      <p>Data After Adding 7 to the Last: {JSON.stringify(newDataAfterAddition)}</p>
      <p>Data After Adding First Element: {JSON.stringify(newDataAfterAddFirstElement)}</p>
      <p>Data : {JSON.stringify(newData)}</p>
    </div>
  );
};

export default UseStateTricks;
