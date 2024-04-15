



/// anagram problem nn react 
//leetcode problem



const Anagramproblem=()=>{

    function anagram(strs){

        const map=new Map();

        for(const str of strs){
            const key=str.split('').sort().join('');

            if(map.has(key)){
                map.get(key).push(str);
            }

            else{
                map.set(key,[str])
            }
        }
        return Array.from(map.values())
      

    }


    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const result=anagram(strs);
    console.log(result);
    return(
        <div>
           <h1>this is anagram problems</h1>
        </div>
    )
}



export default Anagramproblem;


