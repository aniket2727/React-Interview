import React, { useState } from 'react';

const PracticeComponets = () => {
    const [data, setData] = useState(["aniket", "kadam", "mangoo", "apple", "tiger", "lion"]);
    const newData = [...data];
    const result = newData.splice(1, 3);
    console.log("The selected items are", result);



    const originalArray = ['apple', 'banana', 'cherry', 'date'];
    const splicedArray = originalArray.splice(1, 2, 'mango', 'orange');
    console.log("splice opertaions",splicedArray); 


    const slicedArray = originalArray.slice(1, 3);
    console.log("we have slice opertaions",slicedArray);


    return (
        <div>
           
        </div>
    );
}

export default PracticeComponets;
