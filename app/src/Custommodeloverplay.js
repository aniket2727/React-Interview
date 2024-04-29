import React, { useState } from 'react';
import './custom.css';

const CustomModelOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ height: '1000px' }}>
      <button onClick={handleToggle}>Open Custom Model</button>

      {isOpen && (
        <div className="custom-model-overlay">
          <div className="custom-model">
            <h1>This is custom model</h1>
            <button onClick={handleToggle}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomModelOverlay;
