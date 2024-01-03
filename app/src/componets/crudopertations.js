import React, { useState } from 'react';
import './allcss.css';

const Crudopertations = () => {
  const [data, setdata] = useState([
    { name: 'aniket', age: 10 },
    { name: 'om', age: 10 },
    { name: 'sakshi', age: 10 },
    { name: 'suraj', age: 10 }
  ]);

  const deleteData = (name) => {
    let selectedData = data.filter((item) => item.name !== name);
    setdata(selectedData);
  };

  const showData = () => {
    console.log(data);
  };

  return (
    <div className='main'>
      <div className='headers'>
        <h1>name</h1>
        <h1>age</h1>
      </div>

      <div>
        {data.map((item, index) => (
          <div className='content' key={index}>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
            <button onClick={() => deleteData(item.name)}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crudopertations;
