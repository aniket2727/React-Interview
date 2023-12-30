import React from 'react';

const Problem12 = () => {
  var arr = [1, 2, 3, 4, 5];
  const result = 7;
  var data = new Map(); // Use Map instead of an object

  // Creating the map
  arr.forEach((item, index) => {
    if (!data.has(item)) {
      data.set(item, index);
    }
  });

  // Finding pairs and logging them
  const pairs = [];
  arr.forEach((value, index) => {
    var temp = result - value;
    if (data.has(temp) && data.get(temp) !== index) {
      pairs.push({ first: arr[index], second: arr[data.get(temp)] });
    }
  });

  return (
    <div>
      {pairs.map((pair, index) => (
        <div key={index}>
          <p>{`Pair ${index + 1}: ${pair.first} and ${pair.second}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Problem12;
