
// code is written by the aniket kadam
// swap randomaly



const Swaprandomlly=()=>{

    const handleswap=()=>{
        const a=[1,2,3,4,5,6]
        for(let i=a.length-1;i>=0;i--){
            const r=Math.random();
            const idx=Math.floor(r*(i+1));
            var temp=a[i];
            a[i]=a[idx];
            a[idx]=temp
        }

        return a;
    }
    const result=handleswap();
    console.log(result)
    return(
        <div>
        <h1>swap randomally</h1>
        </div>
    )
}


export default Swaprandomlly;