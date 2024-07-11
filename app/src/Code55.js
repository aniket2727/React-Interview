


//  code is written by aniket kadam
// remove extra spaces 

const Removeextraspace=()=>{
    const handleextraspace=()=>{
        const a="   aniket kadam is    prime code  ";
        const result = a.trim().replace(/\s+/g, ' ');

        return result;
      
    }
    const result=handleextraspace();
    console.log(result);
    return(
        <div>
           <h1>remove extra spaces</h1>
        </div>
    )
}


export default Removeextraspace;
