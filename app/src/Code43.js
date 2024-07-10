


// code is written by the aniket kadam
// largest number into the string


const LargestNumbercomponets=()=>{

    const handleLargetsnumber=()=>{
         const a=[1,44,2,55,-1];

         var largets=0;

         for(var i=0;i<a.length-1;i++){
            if(a[i]>largets){
                largets=a[i];
            }
         }

         return largets
    }

    const  result=handleLargetsnumber()
    console.log("largets componets",result);
    return(
        <div>
           <h1>largets numbers into the componets</h1>
        </div>
    )
};


export default LargestNumbercomponets;

