

//   this code is written by the aniket kadam
//  this code is about to the promises



const Code59=()=>{

    const prom1=Promise.resolve("this is first promises");
    const prom2=Promise.resolve("this is second promises");
    const prom3=Promise.reject("this is third promises");
    const prom4=Promise.reject("this forth promises");

    const handleAllpromises=()=>{

        const res1=Promise.all([prom1,prom2]);
        const res2=Promise.all([prom3,prom4]);

        return Promise.allSettled([res1,res2])

    }

    handleAllpromises().then((result)=>{
        console.log("the result is ",result);
    }).catch((error)=>{
        console.log("the result is",error);
    })


    return(
        <div>
           <h1>promises</h1>
        </div>
    )
}


export default Code59;