


// some object properties


// if two functions have same properties then if we add it the single copy is created;


const Handleobject=()=>{
    const data={name:"aniket",age:"10"};
    const data1={name:"aniket",age:"10"};


    const data3={...data,...data1}


    console.log("this is merged functions",data3)

    return(
        <div>this is peoperties</div>
    )
};



export default Handleobject;