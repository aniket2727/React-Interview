



import React, { useState } from 'react'
import File from './File'

// Folder.js

// ...

const Folder = ({ name, files }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleFolder = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <div onClick={toggleFolder} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          {isOpen ? '📂 ' : '📁 '}
          {name}
        </div>
        {isOpen && files && (
          <div style={{ marginLeft: '20px' }}>
            {files.map((file) => (
              <File key={file} name={file} />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  // ...
  

export default Folder
