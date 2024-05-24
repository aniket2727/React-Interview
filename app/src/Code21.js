

import React from 'react'

const Code21 = () => {
    function greet(greeting, punctuation) {
        console.log(greeting + ', my name is ' + this.name + punctuation);
      }
      
      const person = { name: 'Alice' };
      
      const greetPerson = greet.bind(person, 'Hello');
      greetPerson('!'); // Output: Hello, my name is Alice!
      
  return (
    <div>
      
    </div>
  )
}

export default Code21
