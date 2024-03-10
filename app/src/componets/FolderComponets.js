import React, { useState } from 'react';

const FolderComponents = () => {
  const [folderdata, setFolderData] = useState([
    {
      'folder1': ['text1', 'text2', 'text3'],
    },
    {
      'folder2': ['text1', 'text2', 'text3'],
    },
    {
      'folder3': ['text1', 'text2', 'text3'],
    },
  ]);

  const [count, setCount] = useState([]);

  const handleOnClick = (index) => {
    if (count.includes(index)) {
      const newCount = count.filter((item) => item !== index);
      setCount(newCount);
    } else {
      setCount((prev) => [...prev, index]);
    }
  };

  return (
    <div>
      <h1>This is folder structure</h1>
      {folderdata.map((item, index) => (
        <div key={index}>
          <h2 onClick={() => handleOnClick(index)}>{Object.keys(item)[0]}</h2>
          {count.includes(index) ? (
            <div>
              <ul>
                {item[Object.keys(item)[0]].map((text, textIndex) => (
                  <li key={textIndex}>{text}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default FolderComponents;
