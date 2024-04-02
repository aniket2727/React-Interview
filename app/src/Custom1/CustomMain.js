import React, { useEffect, useState } from 'react';

// Define a custom hook for fetching data
const useCustomData = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(url);
                const jsonData = await result.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [url]);

    return data;
};

export default useCustomData;
