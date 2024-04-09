



// what is promises;
// interview quesions


const HandlePromises = () => {
   
    

    const firstpromises = new Promise((resolve, reject) => {

        setTimeout(() => {
            const temp = true;

            if (temp) {
                resolve("  first code resolve code")

            } else {
                reject("first code reject code");
            }
        }, 2000)
    })



    firstpromises.then(result => {
        console.log(result)
    })
    .catch(error => {
            console.log("the error is ", error)
        })


    const Secondhandlepromises=()=>{

       return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            const data=false;

            if(data){
                resolve("second resolve");
            }
            else{
                reject("second  reject");
            }
        },2000)

       })
    }  
    
    
     Secondhandlepromises().then((result)=>{
        console.log("2",result)
    }).catch((error)=>{
        console.log("the eror is",error)
    })

    return (
        <div>
            <h1>this is promises</h1>
        </div>
    )

   
}



export default HandlePromises;