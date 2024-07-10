


// code is wriiten by the aniket kadam
// reverse sentence


const ReverseSentence = () => {
    const functionA = () => {
      const a = "coding is easy";
      const arr = a.split(' ');
      let i = 0;
      let j = arr.length - 1;
      while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
      }
      return arr;
    };
    const result = functionA();
    console.log("Reversed sentence:", result.join(' '));
    return (
      <div>
        <h1>Sentence Reverse</h1>
        <p>The reversed sentence is: {result.join(' ')}</p>
      </div>
    );
  };
  
export default ReverseSentence;
