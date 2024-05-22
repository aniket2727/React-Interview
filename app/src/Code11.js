


import React from 'react'

const Code11 = () => {

    const createData=()=>{
        const name='aniket';

        return{
            display:()=>{
                console.log("my name is ",name)
            }
        }
    }

    const data=createData();

    data.display();
  return (
    <div>
      
    </div>
  )
}

export default Code11
