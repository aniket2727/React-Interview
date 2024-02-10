
 // to do list in react.js
import React, { useState } from 'react'

const Code = () => {

    const [data,setData]=useState('');
    const [datalist, setDatalist] = useState([]);
    const handleadd=()=>{
        setDatalist((prev) => [...prev, data]);
        setData('')
    }
  return (
    <div className='main-a'>
       <input placeholder='enter the element you want to add' value={data} onChange={(e)=>setData(e.target.value)}/>
       <button onClick={handleadd}>Push</button>
       {
           datalist&& datalist.map((item,index)=>(
               
                    <h1 key={index}>{item}</h1>
                
            ))
       }      
    </div>
  )
}

export default Code
