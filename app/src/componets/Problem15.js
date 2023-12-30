
// longest sum into the array

import React, { useState } from 'react'

const Problem15 = () => {

    const data = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const [maxSum, setMaxSum] = useState(0);

    const findMaxSubarraySum = () => {
        let currentSum = data[0];
        let maxSumSoFar = data[0];

        for (let i = 1; i < data.length; i++) {
            currentSum = Math.max(data[i], currentSum + data[i]);
            maxSumSoFar = Math.max(maxSumSoFar, currentSum);
        }

        setMaxSum(maxSumSoFar);
    }
        return (
            <div>

                {
                    data.map((item, index) => {
                        <h1 key={index}>{item}</h1>
                    })
                }
                <h1>{maxSum}</h1>
                <button onClick={findMaxSubarraySum}>maximum sum</button>
            </div>
        )
    }

    export default Problem15
