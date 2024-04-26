



// revers alll words 


import React from 'react'


const Reverse=()=>{


    const reversstring=(data)=>{

        const s=data.split(' ')
        
        for(let i=0;i<s.length-1;i++){
            let temp=s[i].split('').reverse().join('');
            s[i]=temp;
        }

      return s.join(' ');

    }


    const data="aniket vijay kadam";
    const result=reversstring(data);
    console.log(result);
    return(
        <div>
           <h1>reverse all</h1>
        </div>
    )
}



export default Reverse;