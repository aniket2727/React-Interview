import React, { useState, useEffect } from 'react';

function Problem5() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Callback function for fetching data
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the callback function to initiate the data fetching
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return <div>{data ? <p>{data}</p> : <p>Loading...</p>}</div>;
}

export default Problem5;
