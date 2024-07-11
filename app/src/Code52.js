import React, { useEffect } from 'react';

const AnagramComponents = () => {
  const handleAnagram = () => {
    const a = "abcdeg";
    const b = "degabc";

    const sortedA = a.split('').sort().join('');
    const sortedB = b.split('').sort().join('');
    
    console.log("The values of sortedA and sortedB are", sortedA, sortedB);
    
    if (sortedA === sortedB) {
      console.log("Anagram");
    } else {
      console.log("Not anagram");
    }
  };

  useEffect(() => {
    handleAnagram();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <h1>Anagram Problem</h1>
    </div>
  );
};

export default AnagramComponents;
