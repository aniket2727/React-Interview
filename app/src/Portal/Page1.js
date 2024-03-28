import React, { useState } from 'react';
import './Page123.css';

const Page1 = () => {
    const [data, setData] = useState([
        { name: "aniket kadam", email: "aniketkadam@gmail.com", age: "40" },
        { name: "aniket kadam", email: "aniketkadam@gmail.com", age: "40" },
        { name: "aniket kadam", email: "aniketkadam@gmail.com", age: "40" },
        { name: "aniket kadam", email: "aniketkadam@gmail.com", age: "40" },
        { name: "aniket kadam", email: "aniketkadam@gmail.com", age: "40" }
    ]);

    const [searchdata, setsearchdata] = useState('');
    const [selected, setSelected] = useState([]);
    const [flag, setFlag] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [newEmployee, setNewEmployee] = useState({ name: "", email: "", age: "" });
    const [f,setf]=useState(false)
    const [s,setS]=useState({name:"",email:"",age:""})

    const handleAdd = () => {
        setShowModal(true);
    };

    const handleSave = () => {
        setData([...data, newEmployee]);
        setShowModal(false);
        setNewEmployee({ name: "", email: "", age: "" });
        setS({ name: "", email: "", age: "" });
        setf(false);
    };

    const handlesearch = () => {
        const result = data.filter(item => item.name.trim().toLowerCase() === searchdata.trim().toLowerCase());
        setSelected(result);
        setFlag(true);
    };

    const handledelete = (item1) => {
        const result = data.filter(item => item.name !== item1);
        setData(result);
    };
 
    const handleedit = (e) => {
        setData(data.map((item) => {
            if (item.name === e) {
                return {
                    ...item,
                    name: s.name,
                    email: s.email,
                    age: s.age,
                };
            }
            return item;
        }));
        setFlag(false); // Close the edit section after saving
    };

    return (
        <div>
            {
                f &&
                <>
                    <h1>Edit data</h1>
                    <input
                        type="text"
                        placeholder="Name"
                        value={s.name}
                        onChange={(e) => setS({ ...s, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={s.email}
                        onChange={(e) => setS({ ...s, email: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        value={s.age}
                        onChange={(e) => setS({ ...s, age: e.target.value })}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            }
            {
                flag &&
                <div className='display-data'>
                    {selected.map((item, index) => (
                        <div key={index} className='info'>
                            <h1>{item.name}</h1>
                            <button onClick={() => handleedit(item.name)}>Edit </button>
                            <button onClick={() => handledelete(item.name)}>Delete</button>
                            <h1>{item.email}</h1>  
                            <h1>{item.age}</h1>  
                        </div>
                    ))}
                    <button onClick={() => setFlag(false)}>Close</button>
                </div>
            }
            {
                !showModal &&
                <div className='main-block-display'>
                    <div className='subblock-display'>
                        <h1>Employee Portal</h1>
                        <div className='search-data'>
                            <input onChange={(e) => setsearchdata(e.target.value)} placeholder='enter employee name' />
                            <button onClick={handlesearch}>Search</button>
                            <button onClick={handleAdd}>Add Employee</button>
                        </div>
                        <div className='display-data'>
                            {data.map((item, index) => (
                                <div key={index} className='info'>
                                    <h1>{item.name}</h1>
                                    <button>Edit </button>
                                    <button onClick={() => handledelete(item.name)}>Delete</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
            {showModal &&
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Add Employee</h2>
                        <input
                            type="text"
                            placeholder="Name"
                            value={newEmployee.name}
                            onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            value={newEmployee.email}
                            onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Age"
                            value={newEmployee.age}
                            onChange={(e) => setNewEmployee({ ...newEmployee, age: e.target.value })}
                        />
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Page1;
