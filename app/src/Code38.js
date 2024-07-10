import React, { useEffect } from 'react';

const Handlereverse = () => {
    useEffect(() => {
        const reverseString = (item) => {
            const arr = item.split('');
            console.log("Array is", arr);

            let i = 0;
            let j = arr.length - 1;
            while (i < j) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }

            // array to string
            console.log("the ans is",arr.join(''));
        };

        reverseString('aniket');
    }, []);

    return (
        <div>
            <h1>Reverse String</h1>
        </div>
    );
};

export default Handlereverse;
