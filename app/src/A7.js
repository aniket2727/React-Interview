

// this code is about the props and useState



import Recat, { useState } from 'react';

import A6 from './A6'



const A7 = () => {

    const [data,setdata]=useState("aniket")
    const [data1,setdata1]=useState("kadam");


    return (
        <div>
            <h1>this is state and props</h1>
            <A6  props={{data,data1}}/>
        </div>)
}

export default A7;