// Drive.js
import Folder from "./Folder";
import { useState } from "react";
// ...

const Drive = ({ driveName, folders }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDrive = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <div onClick={toggleDrive} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          {isOpen ? '📂 ' : '📁 '}
          {driveName}
        </div>
        {isOpen && folders && (
          <div style={{ marginLeft: '20px' }}>
            {folders.map((folder) => (
              <Folder key={folder.name} name={folder.name} files={folder.files} />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  // ...


  export default Drive
  