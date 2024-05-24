

import React from 'react'

const Code18 = () => {
    const person = {
        name: 'Alice',
        greet: function() {
          console.log(`Hello, my name is ${this.name}`);
        }
      };
      
      const greet = person.greet.bind(person);
      greet(); // Output: Hello, my name is Alice

      function multiply(a, b) {
        return a * b;
      }
      
      const multiplyByTwo = multiply.bind(null, 2);
      console.log(multiplyByTwo(5)); // Output: 10
      
      
  return (
    <div>
      
    </div>
  )
}

export default Code18
