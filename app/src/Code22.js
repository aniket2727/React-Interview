import React from 'react';
import './code.css'; // Import your CSS file


const Code22 = () => {
  const toggleBlackAndWhite = () => {
    document.body.classList.toggle('black-and-white');
  };

  return (
    <div>
      <button onClick={toggleBlackAndWhite}>Toggle Black and White Mode</button>
      <h1>This is a black and white mode example</h1>
      <p>All content on the screen will be displayed in black and white when the mode is on.</p>
    </div>
  );
};

export default Code22;

