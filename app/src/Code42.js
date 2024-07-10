


//code is written by the aniket kadam



const Palindromcomponets=()=>{


    const handlepalindrom=()=>{
        const a="anzina";
        
        const arr=a.split('');
        console.log("array",arr)

        var i=0;
        var j=arr.length-1
        var temp=false;
        while(i<j){
             if(arr[i]===arr[j]){
                i++
                j--
             }
             else{
                temp=true
                break;
             }
        }

        if(temp){
            console.log("not a palindrom");
        }
        else{
            console.log("palindrom");
        }


    }

    handlepalindrom();
    return(
        <div>
          <h1>this is palindrom componets</h1>
        </div>
    )
};


export default Palindromcomponets;