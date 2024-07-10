


//  code is wriiten by the aniket kadam
// revsers using  map


const ReveseCompoents=()=>{
    
    const handleReversecomponets=()=>{
        const a=[1,2,3,4,5]
        const reversedArray = a.map((item, index) => a[a.length - 1 - index]);
        return reversedArray;
    }

    const result=handleReversecomponets();
    console.log(result);
   return(
    <div>
      <h1>reverse using map</h1>
      <h1>{result.join(',')}</h1>
    </div>
   )
};


export default ReveseCompoents;
