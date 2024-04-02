


import React from "react";
import Customdata from "./CustomMain";
import useCustomData from "./CustomMain";

const Caller=()=>{
    const url='https://dummyjson.com/products/1';

    const result=useCustomData(url)
    console.log(result);
    return(
        <div>
         <h1>this is caller</h1>
        </div>
    )
}



export default Caller;