import React, { useState } from 'react';
import MyPureComponent from './Purecomponets';

const Supporter = () => {
  const [value, setValue] = useState(1);

  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Update Prop</button>
      <MyPureComponent myProp={value} />
    </div>
  );
};

export default Supporter;
