import React, { useState } from 'react';
import './Problem24.css'; // Import a CSS file for styling

const Problem24 = () => {
  const [booklist, setBooklist] = useState(['book1', 'book2', 'book3']);
  const [addbook, setAddbook] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSelectBook = () => {
    const selectedBooks = booklist.filter((book) =>
      book.toLowerCase().includes(inputText.toLowerCase())
    );

    if (selectedBooks.length > 0) {
      setAddbook((prevAddbook) => [...prevAddbook, selectedBooks[0]]);
      setInputText('');
    }
  };

  return (
    <div>
      <h1>Problem number 24</h1>
      <div className="input-container">
        {addbook.map((item, index) => (
          <div key={index} className="selected-book">
            {item}
          </div>
        ))}
        <input
          placeholder="Find the book"
          value={inputText}
          onChange={handleInputChange}
          list="bookSuggestions"
        />
      </div>
      <datalist id="bookSuggestions">
        {booklist
          .filter((book) =>
            book.toLowerCase().includes(inputText.toLowerCase())
          )
          .map((book, index) => (
            <option key={index} value={book} />
          ))}
      </datalist>
      <button onClick={handleSelectBook}>Select</button>
    </div>
  );
};

export default Problem24;
