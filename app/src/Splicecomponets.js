import React, { useState, useEffect } from 'react';

const Splicecomponets = () => {
  // Define state to hold an array of data
  const [data, setData] = useState(["aniket", "kadam", "king kong", "multiple offline"]);

  const addItemAtIndex = () => {
    // Create a copy of the original array
    const newData = [...data];
    // Add "tiger" to the end of the array
    newData.push("tiger");
    // Add "item created" at index 2
    newData.splice(2, 0, "item created");
    // Update state with the modified array
    setData(newData);
  };

  

  // Call addItemAtIndex when the component mounts
  useEffect(() => {
    addItemAtIndex();
  }, []);

  // Log the state after it's updated and remove an element
  useEffect(() => {
    console.log("after the removing", data);
  
  }, [data]);

  return null;
}

export default Splicecomponets;
