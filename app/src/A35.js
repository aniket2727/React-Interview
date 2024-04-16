
// best time to buy the stocks  
// leetcode problems
const Besttimetobuy = () => {
    function besttime(data) {
        let min = Infinity;
        let max = 0;
        for (let i = 0; i < data.length; i++) {

            min = Math.min(min, data[i])
            const current = data[i] - min;
            max = Math.max(current, max)
        }
        return max;
    }

    const data = [7, 1, 3, 5, 8, 6];
    const result = besttime(data)
    console.log(result);
    return (
        <div>
           <h1>data</h1>
        </div>
    )
}



export default Besttimetobuy;