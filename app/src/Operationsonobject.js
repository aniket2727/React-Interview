import React, { useState } from 'react';

const OperationsOnObject = () => {
  const [data, setData] = useState([
    { number: 1, name: "anikets", fullname: "aniket kadaam", skill: [{ skills: "sports" }] },
    { number: 2, name: "anikets", fullname: "aniket kadaam", skill: [{ skills: "sports" }] },
    { number: 3, name: "anikets", fullname: "aniket kadaam", skill: [{ skills: "sports" }] },
    { number: 4, name: "anikets", fullname: "aniket kadaam", skill: [{ skills: "sports" }] },
    { number: 5, name: "anikets", fullname: "aniket kadaam", skill: [{ skills: "sports" }] }
  ]);

  // Update the objects in the data array by adding a new skill
  const updatedData = data.map((item) => ({
    ...item,
    skill: [...item.skill, { skills: "newSkill" }]
  }));

  // Add data at the first and last positions
  const newData = [
    { number: 0, name: "firstData", fullname: "first data", skill: [{ skills: "firstSkill" }] },
    ...updatedData,
    { number: 6, name: "lastData", fullname: "last data", skill: [{ skills: "lastSkill" }] }
  ];

  // Using slice method to select the last item
  const lastDataUsingSlice = data.slice(-1)[0];

  // Accessing the last item directly using index
  const lastDataDirectAccess = data[data.length - 1];

  return (
    <div>
      <h1>Last Data Using Slice: {JSON.stringify(lastDataUsingSlice)}</h1>
      <h1>Last Data Direct Access: {JSON.stringify(lastDataDirectAccess)}</h1>
      <h1>Data:</h1>
      <ul>
        {newData.map((item) => (
          <li key={item.number}>
            {item.name} - Skills: {item.skill.map((skill, index) => (
              <span key={index}>{skill.skills}, </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OperationsOnObject;
