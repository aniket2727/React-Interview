


// this code is written by the aniket kadam
// select componets

import { useState } from "react";



const SelectComponets=()=>{

    const[data,setData]=useState('');
    const handleChange=(event)=>{
        setData(event.target.value)

    }
    return(
        <div>
          <h1>This is selectcomponets</h1>
          <select onChange={handleChange}>
             <option>select Options</option>
             <option value='cricket'>Cricket</option>
             <option value='football'>Football</option>
             <option value='hollyball'>Hollyball</option>
             <option value='kho kho'>kho kho</option>
          </select>

          <h1>{data}</h1>
          
        </div>
    )
}


export default SelectComponets;
