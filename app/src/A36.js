


import React from 'react'

const A36 = () => {


    function mergeArrays(arr1, arr2) {
        // Initialize pointers for both arrays and the merged array
        let i = 0;
        let j = 0;
        let mergedArray = [];
    
        // Iterate through both arrays until one of them is exhausted
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                // Add the smaller element to the merged array and increment pointer i
                mergedArray.push(arr1[i]);
                i++;
            } else {
                // Add the smaller element to the merged array and increment pointer j
                mergedArray.push(arr2[j]);
                j++;
            }
        }
    
        // Add any remaining elements from arr1 to the merged array
        while (i < arr1.length) {
            mergedArray.push(arr1[i]);
            i++;
        }
    
        // Add any remaining elements from arr2 to the merged array
        while (j < arr2.length) {
            mergedArray.push(arr2[j]);
            j++;
        }
    
        // Return the merged sorted array
        return mergedArray;
    }
    
    // Example usage:
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4, 6, 8];
    const merged = mergeArrays(arr1, arr2);
    console.log(merged); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div>
      
    </div>
  )
}

export default A36
