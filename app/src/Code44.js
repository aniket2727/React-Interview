


// code is writtten by the aniket kadam
// largest word in given sentence

const LargestSentenceComponents = () => {
    const handleLargestSentence = () => {
      let sentence = "coding is easy";
      const words = sentence.split(' ');
      let maxLength = 0;
  
      words.forEach(word => {
        if (word.length > maxLength) {
          maxLength = word.length;
        }
      });
  
      return maxLength;
    }
  
    const result = handleLargestSentence();
    console.log("The result is", result);
  
    return (
      <div>
        <h1>Largest word length in the given sentence</h1>
        <p>The length of the largest word is: {result}</p>
      </div>
    );
  };
  
  export default LargestSentenceComponents;
  