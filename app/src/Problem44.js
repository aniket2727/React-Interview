import React, { useState } from 'react';

const Formproblems = () => {
    const [data, setData] = useState({
        name: "",
        email: ""
    });


    const [flag,setflag]=useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(data);

        setflag(false)


        setTimeout(()=>{
             setflag(true)
        },1000)
    };

    return (
        <div>
           <h1>The Form Problems</h1>
           <form onSubmit={handleSubmit}>
              <h1>Enter the name</h1>
              <input placeholder='enter the name' name='name' value={data.name} onChange={handleChange}/>

              <h1>Enter the email</h1>
              <input placeholder='enter the email' name='email' value={data.email} onChange={handleChange}/>

              <button  type='submit'> {flag  ?'submit':'loading'}</button>
           </form>
        </div>
    );
};

export default Formproblems;
