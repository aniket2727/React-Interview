



import React, { useEffect } from 'react'
import { useState } from 'react'
const DataD = () => {
    const [searchdata, setsearchdata] = useState([])
    const [issearching,setissearching]=useState([])
    const [selected,setselected]=useState([])

    const [alldata, setalldata] = useState([
        { name: "aniket" },
        { name: "om" },
        { name: "pratik" },
        { name: "suraj" },
        { name: "vijay" },
        { name: "aditya" }])

        useEffect(()=>{

            const asysnsearch=async()=>{

               try{
                setTimeout(()=>{
                    const result= alldata.filter(item=>
                         item.toLowerCase().includes(searchdata.toLowerCase())
                     )
                     setsearchdata(result);
                     setissearching(false);
                 },500)
               }catch(error){
                setissearching(false)
                console.log(error)

               }

            }


        },[searchdata])
    return (
        <div>
            <h1>This is debounging practice</h1>
            <input placeholder='enter name' value={searchdata} onChange={(e) => setsearchdata(e.target.value)} />
        </div>
    )
}

export default DataD;