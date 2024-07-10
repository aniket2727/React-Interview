//   code is written by the aniket kadam
//   return array for even numbers


const EvenNumberComponets=()=>{

    const handleEvenNumberComponets=()=>{
        const a=[1,2,3,4,5,6];
        
        const evenResult=a.map((item)=>{
             if(item%2===0){
                return item;
             }
             else{
                 return null
             }
        })

        return evenResult;
    }

    const result=handleEvenNumberComponets();
    console.log("the result is",result);
    return(
        <div>
           <h1>Even Number componets</h1>
           <h1>{result}</h1>
        </div>
    )
};


export default EvenNumberComponets;