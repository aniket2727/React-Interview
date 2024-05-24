

import React from 'react'


// this is code related to appply
const Code20 = () => {
    function greet(greeting, punctuation) {
        console.log(greeting + ', my name is ' + this.name + punctuation);
      }
      
      const person = { name: 'Alice' };
      
      greet.apply(person, ['Hello', '!']); // Output: Hello, my name is Alice!
      
  return (
    <div>
      
    </div>
  )
}

export default Code20
