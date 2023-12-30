import React, { useState } from 'react';

const Problem16 = () => {
    const [str1, setStr1] = useState('');
    const [str2, setStr2] = useState('');
    const [isAnagram, setIsAnagram] = useState(false);

    const checkAnagram = () => {
        const sortedStr1 = str1.split('').sort().join('');
        const sortedStr2 = str2.split('').sort().join('');

        setIsAnagram(sortedStr1 === sortedStr2);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter string 1"
                value={str1}
                onChange={(e) => setStr1(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Enter string 2"
                value={str2}
                onChange={(e) => setStr2(e.target.value)}
            />
            <br />
            <button onClick={checkAnagram}>Check Anagram</button>
            <h1>{isAnagram ? 'The strings are anagrams' : 'The strings are not anagrams'}</h1>
        </div>
    );
};

export default Problem16;
