import { useState, useEffect, useRef } from "react";

const Handleforms = () => {
    const refdata = useRef();

    useEffect(() => {
        refdata.current.focus();
    }, [refdata]);

    const [data, setdata] = useState({
        name: '',
        email: '', // Corrected variable name
        pass: ''
    });

    const handleinput = (e) => {
        const { name, value } = e.target;
        setdata({
            ...data,
            [name]: value,
        });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("the input is ", data);
    };

    return (
        <div>
            <h1>this is form</h1>
            <form onSubmit={handlesubmit}>
                <div>
                    <input placeholder="enter the name" type="text" onChange={handleinput} name="name" id="name" value={data.name} ref={refdata}/>
                </div>
                <div>
                    <input placeholder="enter the email" type="email" onChange={handleinput} name="email" value={data.email} id="email" />
                </div>
                <div>
                    <input placeholder="enter the password" onChange={handleinput} name="pass" value={data.pass} id="pass" type="password" />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Handleforms;
