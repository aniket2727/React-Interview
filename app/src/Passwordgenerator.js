



//  password generator in react

import { useState } from "react";




const Passwordgenerator = () => {


    const [lenght,setlenght]=useState(8);
    const [password,setpassword]=useState('')
    const [uppercase,setuppercase]=useState(false);
    const [lowercase,setlowercase]=useState(true);
    const [interger,setinteger]=useState(false);
    const [signs,setsigns]=useState(false)

    
    const generatePassword=()=>{
        let combo=`${uppercase?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":""}`+
                  `${interger?"1234567890":""}`+
                  `${signs?"!@#$%^&*(^":""}`+ "acsshdshfheruhfwkncshryewcdbczxbcuwes";

        let p=""          

        for(let i=0;i<lenght;i++){
            const randomindex=Math.floor(Math.random()*combo.length)
            p+=combo[randomindex]

        }      
        
        setpassword(p)
    }

    const handlerequiredment = (setter) => (e) => {
        setter(e.target.checked);
      };
    

    const handlelenght=(e)=>{
        setlenght(parseInt(e.target.value))

    }
    return (
        <div>
            <h1>password generator</h1>

            <h1>create new password</h1>
            <h2>enter the lenght</h2>
            <input placeholder="enter lenght" type='number' value={lenght} onChange={handlelenght} />  <br/>

            <h2>want uppercase</h2>
            <input type="checkbox" checked={uppercase}  onChange={handlerequiredment(setuppercase)} />

            <h2>want integer</h2>
            <input type="checkbox"  checked={interger} onChange={handlerequiredment(setinteger)}/>

            <h2>want sign</h2>
            <input type="checkbox"  checked={signs} onChange={handlerequiredment(setsigns)}/>


            <button onClick={generatePassword}>Generate Password</button>
            {password && (
              <div>
                <h2>Your Password:</h2>
                <input type="text" value={password} readOnly />
              </div>
            )}



        </div>
    )
}



export default Passwordgenerator;
