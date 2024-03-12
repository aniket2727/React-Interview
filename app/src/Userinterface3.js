import React, { useState } from 'react';
import './user3.css';

const Userinterface3 = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleImageClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className='main'>
      <div className={`block1 ${isTextVisible ? 'active' : ''}`} onClick={handleImageClick}>
        {isTextVisible && (
          <div className='block2'>
            <p>This is the paragraph content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Userinterface3;
