import React from 'react'
async function fetchData() {
    let response = await fetch('https://dummyjson.com/products/1');
    let data = await response.json();
    return data;
    
   
   

   
}

fetchData().then(data => {
    console.log("this is data",data);
}).catch(error => {
    console.error(error);
});

const Code3 = () => {

  return (
    <div>
      
    </div>
  )
}

export default Code3
