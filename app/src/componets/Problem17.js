import React, { useState } from 'react';

const Problem17 = () => {
    const [inputString, setInputString] = useState('');
    const [isValidPalindrome, setIsValidPalindrome] = useState(false);

    const checkValidPalindrome = () => {
        const cleanString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversedString = cleanString.split('').reverse().join('');
        setIsValidPalindrome(cleanString === reversedString);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a string"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
            />
            <br />
            <button onClick={checkValidPalindrome}>Check Valid Palindrome</button>
            <h1>{isValidPalindrome ? 'The string is a valid palindrome' : 'The string is not a valid palindrome'}</h1>
        </div>
    );
};

export default Problem17;
