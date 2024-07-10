


// code is writen by aniket kadam

//swap the latters 


const SwaplettersComponets=()=>{

    const handleswapletterscomponets=()=>{
        let a="My Name Is Aniket Kadam";
        let swapeedString=''
        for(let i=0;i<a.length-1;i++){
            for(let j=0;j<i.legth-1;j++){
                if(i[j].toUpperCase){
                    swapeedString+=i[j].toLowercase();   
                }
                else{
                    swapeedString+=i[j].toUpperCase();
                }
            }

        }

        return swapeedString;


    }
    const result=handleswapletterscomponets();
    console.log("the result is",result)
    return(
        <div>
           <h1>Swap the letters </h1>
        </div>
    )
};


export default SwaplettersComponets;