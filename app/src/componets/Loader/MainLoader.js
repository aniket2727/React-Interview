import React, { useEffect, useState } from 'react';

const MainLoader = () => {
    const [data, setData] = useState([]);
    const [range, setRange] = useState(5);
    const [selectedData, setSelectedData] = useState([]);

    useEffect(() => {
        handleGetData();
    }, []);

    const handleGetData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const newData = await response.json();
            setData(newData);
            refreshData(newData.products); // Automatically refresh after fetching new data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const refreshData = (newProducts) => {
        if (range + 5 < newProducts.length) {
            setRange(range + 5);
            var start = range;
            var end = range + 5;
        } else {
            // Reset to the beginning if there are not enough new products
            setRange(5);
            start = 0;
            end = 5;
        }
    
        const select = newProducts.slice(start, end);
        setSelectedData(select);
    };
    
    return (
        <div className='main-display'>
            {selectedData.map((item, index) => (
                <div key={index}>
                    <p>{item.title}</p>
                </div>
            ))}

            <div>
                <button onClick={handleGetData}>Refresh</button>
            </div>
        </div>
    );
};

export default MainLoader;
