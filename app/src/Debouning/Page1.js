import React, { useState, useEffect } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // Function to perform search operation
    const search = async () => {
      try {
        setIsSearching(true);
        // Simulating asynchronous API call with setTimeout
        setTimeout(() => {
          // Simulating search results
          const results = [
            "apple",
            "banana",
            "orange",
            "pineapple",
            "grape",
            "kiwi"
          ].filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSearchResults(results);
          setIsSearching(false);
        }, 500); // Debounce time in milliseconds
      } catch (error) {
        console.error("Error fetching search results: ", error);
        setIsSearching(false);
      }
    };

    // Call search function when searchTerm changes
    if (searchTerm !== '') {
      search();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isSearching && <p>Loading...</p>}
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
