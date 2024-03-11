import React, { useState } from 'react';

const SearchandselecetOptions = () => {
  const [data, setData] = useState(['python', 'react', 'node js', 'java', 'sql', 'typescript']);
  const [inputData, setinputData] = useState('');
  const [selected, setselected] = useState([]);
  const [suggestions, setsuggestions] = useState([]);

  const handlesuggestions = () => {
    console.warn('handle suggestion is called');

    if (inputData === '') {
      setsuggestions([]);
    } else {
      var result = data.filter((item) => item.toLowerCase().includes(inputData.toLowerCase().trim()));
      setsuggestions(result);
      console.log(suggestions);
    }
  };

  let timeoutId;

  const handleInputChange = (e) => {
    setinputData(e.target.value);

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      if (e.target.value !== '') {
        handlesuggestions();
      } else {
        setsuggestions([]);
      }
    }, 500);
  };

  const handlesubmit = () => {
    if (inputData === '') {
      setinputData('');
    } else {
      setselected((prev) => [...prev, inputData]);
      setinputData('');
    }
    console.log(selected);
  };

  const handleSelectedData = (event) => {
    setselected((prev) => [...prev, event]);
    setinputData('')
    setsuggestions([])
  };

  const handledeleteData = (event) => {
    var result = selected.filter((item) => item !== event);
    setselected(result);
  };

  return (
    <div>
      <input
        placeholder='enter your input'
        value={inputData}
        onChange={handleInputChange}
      />
      {suggestions &&
        suggestions.map((item, index) => (
          <div key={index}>
            <h1 onClick={() => handleSelectedData(item)}>{item}</h1>
          </div>
        ))}
      {selected && (
        <div>
          {selected.map((item, index) => (
            <h1 key={index} onClick={() => handledeleteData(item)}>
              {item} delete it
            </h1>
          ))}
        </div>
      )}
      <button onClick={handlesubmit}>submit</button>
    </div>
  );
};

export default SearchandselecetOptions;
