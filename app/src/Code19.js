import React from 'react'



// this is related to the call
const Code19 = () => {
    function greet(greeting, punctuation) {
        console.log(greeting + ', my name is ' + this.name + punctuation);
      }
      
      const person = { name: 'Alice' };
      
      greet.call(person, 'Hello', '!'); // Output: Hello, my name is Alice!
      
  return (
    <div>
      
    </div>
  )
}

export default Code19
