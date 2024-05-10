

import React from 'react'
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation, such as fetching data from a server
    setTimeout(() => {
      // Simulate successful completion
      const data = "Promise resolved successfully!";
      resolve(data);
      reject(data)
      
      // Simulate failure
      // reject(new Error("Promise rejected!"));
    }, 2000);
  });
  
  myPromise.then((result) => {
    console.log(result); // Output: Promise resolved successfully!
  }).catch((error) => {
    console.error(error); // Output: Error: Promise rejected!
  });
  

const Code2 = () => {
  return (
    <div>
      
    </div>
  )
}

export default Code2
