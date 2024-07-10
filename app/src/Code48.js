


// code is written by the aniket kadam
// count vovel

const VovelComponet=()=>{

    const handleveovel=()=>{
        const a="aniket vijay kadam";
        var count=0;
        for(let i=0;i<a.length-1;i++){
            if(a[i]==='a' || a[i]==='e' || a[i]==='i' || a[i]==='u' || a[i]==='o'){
                count++;
            }
        }
        return count;
    }

    const result=handleveovel();
    console.log("the result is ",result);
    return(
        <div>
          <h1>count  the vovel</h1>
        </div>
    )
};


export default VovelComponet;
