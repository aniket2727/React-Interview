


// code is written aniket kadam
// convert first  letter Capital

const ConvertCapital=()=>{

    const handlecapital=()=>{
        const a="aniket kadam is great coder"
        const arr=a.split(' ');

        const capitalLetter=arr.map((item)=>{
            return item.charAt(0).toUpperCase() + item.slice(1)
        })

        return capitalLetter.join(' ');
    }

    const result=handlecapital();
    console.log("the result ",result)
    return(
        <div>
          <h1> covert this letter to capital</h1>
        </div>
    )
}


export default ConvertCapital;