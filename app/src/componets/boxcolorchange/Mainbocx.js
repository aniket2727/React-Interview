import React, { useState, useEffect } from 'react';
import '../allcss.css';

const Mainbox = () => {
  const repetitions = 10;
  const [displayBlocks, setDisplayBlocks] = useState(Array(repetitions).fill('white'));
  const [greenCount, setGreenCount] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  const toggleButton = (index) => {
    // If all boxes are already green, reset to white
    if (greenCount === repetitions) {
      setDisplayBlocks(Array(repetitions).fill('white'));
      setGreenCount(0);
      setIsResetting(false);
    } else {
      // Turn the clicked box green
      const updatedBlocks = [...displayBlocks];
      updatedBlocks[index] = 'green';
      setDisplayBlocks(updatedBlocks);

      // Update the count of green boxes
      setGreenCount(greenCount + 1);
    }
  };

  useEffect(() => {
    // Check if all boxes are green
    if (greenCount === repetitions && !isResetting) {
      // Set a flag to indicate that the reset animation is in progress
      setIsResetting(true);

      // Reset each box to white with a delay for each
      displayBlocks.forEach((_, index) => {
        setTimeout(() => {
          const updatedBlocks = [...displayBlocks];
          updatedBlocks[index] = 'white';
          setDisplayBlocks(updatedBlocks);

          // If this is the last box, reset the flag after its delay
          if (index === repetitions - 1) {
            setTimeout(() => {
              setIsResetting(false);
              setGreenCount(0);
            }, (repetitions - index) * 1000);
          }
        }, (repetitions - index) * 1000); // Adjust the delay as needed
      });
    }
  }, [greenCount, displayBlocks, repetitions, isResetting]);

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
