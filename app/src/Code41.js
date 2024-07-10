


// code is written by the aniket kadam
// radios buttons




import { useState } from "react";

const RadiosComponents = () => {
  const [data, setData] = useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  }

  return (
    <div>
      <h1>Radio Buttons</h1>
      <label>
        <input
          type="radio"
          name="option"
          value="on"
          checked={data === "on"}
          onChange={handleChange}
        />
        On
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value="off"
          checked={data === "off"}
          onChange={handleChange}
        />
        Off
      </label>
      <p>Selected Option: {data}</p>
    </div>
  );
}

export default RadiosComponents;



