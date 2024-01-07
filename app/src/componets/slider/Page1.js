import React, { useEffect, useState } from 'react';
import './page.css';

const Page1 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsname, setProductName] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            return data.products; // Assuming products is an array in your response
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    const handleButtons = async (item) => {
        if (item === -1 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (item === 0 && currentPage < 4) {
            setCurrentPage(currentPage + 1);
        } else if (item > 0 && item <= 5) {
            setCurrentPage(item);
        }

        try {
            const products = await fetchData();
            const start = (currentPage - 1) * 6;
            const end = start + 6;
            const selectedItems = products.slice(start, end);
            const selectedTitles = selectedItems.map(product => product.title);
            setProductName(selectedTitles);
            console.log('The selected product titles are:', selectedTitles);
        } catch (error) {
            console.error('Error handling buttons:', error);
        }
    };

    useEffect(() => {
        handleButtons(0); // Initial fetch when the component mounts
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className='main'>
            <div className='main-display'>
                {/* Display the selected product titles */}
                {productsname.map((title, index) => (
                    <div key={index}>
                        <p>{title}</p>
                    </div>
                ))}
            </div>
            <div className='main-button'>
                <button onClick={() => handleButtons(-1)} className={currentPage === 1 ? 'disabled' : ''}>
                    Prev
                </button>
                {[1, 2, 3, 4, 5].map((page, index) => (
                    <div key={index + 1}>
                        <button
                            className={currentPage === page ? 'selected' : ''}
                            onClick={() => handleButtons(page)}
                        >
                            {page}
                        </button>
                    </div>
                ))}
                <button onClick={() => handleButtons(0)} className={currentPage === 4 ? 'disabled' : ''}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Page1;
