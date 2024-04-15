


// leetcode robber problems



const Robberproblem = () => {

    function robberproblems(nums) {

        const n = nums.length;
        if (n === 0) return 0;
        if (n === 1) return nums[0];

        const dp = new Array(n);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }

        return dp[n - 1];
    }


    const data = [2, 7, 9, 3, 1]
    const result = robberproblems(data)
    console.log(result);
    return (
        <div>
            <h1>this is robber problems</h1>
        </div>
    )
}



export default Robberproblem;