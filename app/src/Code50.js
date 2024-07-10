

// code is written by the aniket kadam
// largest differance



const LargetsDiiferncecompoenst=()=>{

    const handleproblem=()=>{

    
        const a=[1,2,10,6,5]
        var diff=Math.abs(a[0]-a[1])
        for(let i=1;i<a.length-2;i++){
            if(diff<Math.abs(a[i]-a[i+1])){
                diff=Math.abs(a[i]-a[i+1])
            }
        }
        return diff;
    }
    const result=handleproblem();
    console.log("result",result);
    return(
        <div>
           <h1>Largets differance into the componets </h1>
        </div>
    )
}


export default LargetsDiiferncecompoenst;
