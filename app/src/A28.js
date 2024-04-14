

// this is 2 sum problem


//leetcode problems

import React from 'react';


const Twosum = () => {
    const add = () => {
        const data = [1, 2, 3, 4, 5, 6, 7]
        const target_sum = 100;
        const map = {

        }
        for (let i = 0; i < data.length; i++) {
            let temp = Math.abs(target_sum - data[i]);

            if (map[temp]) {
                return 1
            }
            else {
                map[data[i]] = 1
            }

           
        }
        
        return -1;
       
    }

    const result = add();
    console.log(result)
    return (
        <div>
            <h1>this is 2 sum </h1>
        </div>
    )
}




export default Twosum;