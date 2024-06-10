


// creating the custom hooks


import React, { useEffect, useState } from 'react';
import { Await } from 'react-router-dom';


const Customhooksapis=({url})=>{

    const handleapis=async()=>{
        try{
            const result=await fetch(url);
            const data=result.json()

            return data;
        }
        catch(error){
            return error;
        }

        finally{
            return true;
        }
    }
    return(
        <div>
           <h1>this is custom hooks</h1>
        </div>
    )
}


const Customhookparent=()=>{
     
    const [data,setData]=useState([]);
    const [apierror,setapierror]=useState('');
    const [apistatus,setapistatus]=useState(true);

    const url="https://jsonplaceholder.typicode.com/posts/1"
   
    useEffect(()=>{
        const getData=async()=>{
            const {result,error,status}= Customhooksapis(url);
            setData(prev=>result);
            if(status===undefined){
                setapierror('');
            }
            else{
                setapierror(prev=>error);
        
            }

            setapistatus(prev=>status)
        }
       
        getData();
    })

    if(apierror!==''){
        return(
            <div>
               <h1>oopps something is wrong</h1>
            </div>
        )
    }
    return(
        <div>
        {
            Object.entries(data).map(([key,value])=>(
                <div key={key}>
                   <h1>{value}</h1>
                </div>
            ))
        }
           
          
        </div>
    )
}



export default Customhookparent;