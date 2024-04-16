



// claimbing staris problem
// leetcode problems


import React from 'react'





const A37 = () => {


    function P1(n){
        

        if(n===0 || n===1){
            return 1
        }

        const dp=new Array(n).fill(0);
       
        dp[0]=1
        dp[1]=1

        for(let i=0;i<n;i++){

            dp[i]=dp[i-1]+dp[i-2]

        }
        return dp[n]

    }

    const result=P1(5)
    console.log(result)
  return (
    <div>
      <h1>this is leetcode problem</h1>
    </div>
  )
}

export default A37
