

import React from 'react'

const Code13 = () => {
    function introduce(name, age) {
        console.log(`I am ${name} and I am ${age} years old.`);
    }
    
    introduce.call(null, 'Alice', 25);  // Output: "I am Alice and I am 25 years old."
    introduce.apply(null, ['Alice', 25]);  // Output: "I am Alice and I am 25 years old."
    
  return (
    <div>
      
    </div>
  )
}

export default Code13
