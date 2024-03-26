import React, { useState } from 'react';

const Drive = ({ name, contents }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="drive">
      <h2 onClick={handleToggle}>{name}</h2>
      {isOpen && (
        <ul>
          {contents.map((item, index) => (
            <li key={index}>
              {item.type === 'folder' ? (
                <Drive name={item.name} contents={item.contents} />
              ) : (
                <span>{item.name}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const FolderStructure = () => {
  const drives = [
    {
      name: 'A',
      contents: [
        { type: 'file', name: 'File1.js' },
        { type: 'folder', name: 'Folder1', contents: [{ type: 'file', name: 'File2.js' }] }
      ]
    },
    {
      name: 'C',
      contents: [{ type: 'file', name: 'File3.js' }]
    },
    {
      name: 'D',
      contents: [
        { type: 'folder', name: 'Subfolder1', contents: [{ type: 'file', name: 'File5.js' }] },
        { type: 'folder', name: 'Subfolder2', contents: [{ type: 'file', name: 'File7.js' }] },
        { type: 'file', name: 'File6.js' },
        { type: 'file', name: 'File8.js' }
      ]
    },
    {
      name: 'F',
      contents: [{ type: 'file', name: 'File9.js' }, { type: 'file', name: 'File10.js' }]
    }
  ];

  return (
    <div className="folder-structure">
      {drives.map((drive, index) => (
        <Drive key={index} name={drive.name} contents={drive.contents} />
      ))}
    </div>
  );
};

export default FolderStructure;
