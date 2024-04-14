



//   find the longest sum in rotated array




import React from 'react';
const Longestsum=()=>{
    const sum=()=>{
        let sum=0;
        let max_sum=0;
        var data=[-4,3,-2,2,4,-1,5];


        var new_data=data.concat(data)

        for(let i=0;i<new_data.length;i++){
            
            sum=new_data[i]
            if(sum>max_sum){
                max_sum=sum;
            }

            if (sum < 0) {
                sum= 0;
            }
        }


        return max_sum;
    }


    const result=sum();
    console.log(result)
    return(
        <h1>longest sum</h1>
    )
}



export default Longestsum;