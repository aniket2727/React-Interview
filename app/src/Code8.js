import React, { useEffect } from 'react';

const Code8 = () => {
   
    Array.prototype.first = function() {
        return this[0];
    }

   
    useEffect(() => {
        const numbers = [1, 2, 3, 4, 5];
        console.log(numbers.first()); // Output: 1
    }, []); 

    return (
        <div>
            Check the console for the output.
        </div>
    );
}

export default Code8;
