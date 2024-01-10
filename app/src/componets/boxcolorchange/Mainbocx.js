













// this code current not workings




import React, { useState, useEffect } from 'react';
import '../allcss.css';

const Mainbox = () => {
  const repetitions = 10;
  const [displayBlocks, setDisplayBlocks] = useState(Array(repetitions).fill('white'));
  const [greenCount, setGreenCount] = useState(0);

  const toggleButton = (index) => {
    // If all boxes are already green, reset to white
    if (greenCount === repetitions) {
      setDisplayBlocks(Array(repetitions).fill('white'));
      setGreenCount(0);

      // Reset to white after a delay
      setTimeout(() => {
        setDisplayBlocks(Array(repetitions).fill('white'));
      }, 1000); // Adjust the delay as needed
    } else {
      // Turn the clicked box green
      const updatedBlocks = [...displayBlocks];
      updatedBlocks[index] = 'green';
      setDisplayBlocks(updatedBlocks);

      // Update the count of green boxes
      setGreenCount(greenCount + 1);
    }
  };

  return (
    <div className='main-box'>
      {Array(repetitions).fill().map((_, i) => (
        <div
          key={i}
          className={`block ${displayBlocks[i]}`}
          onClick={() => toggleButton(i)}
        />
      ))}
    </div>
  );
};

export default Mainbox;
