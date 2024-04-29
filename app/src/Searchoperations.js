import React, { useState } from 'react';

const Searchoperations = () => {
    const [selected, setSelected] = useState([]);
    const [data, setData] = useState(['mango', 'pinapple', 'banana', 'termeric', 'orange']);
    const [displayOptions, setDisplayOptions] = useState([]);
    const [checked, setChecked] = useState([]);

    const handleRouter = (e) => {
        const searchedItems = e.target.value;

        // Clear selected if search input is empty
        if (searchedItems === '') {
            setSelected([]);
            return;
        }

        // Filter the data after a delay
        setTimeout(() => {
            const result = data.filter(item => item.includes(searchedItems));
            setSelected(result);
        }, 500);
    };

    const handleAdd = (item) => {
        setDisplayOptions(prev => ([...prev, item]));
    };

    const handleChecked = (e) => {
        const item = e.target.value;
        if (checked.includes(item)) {
            const updatedChecked = checked.filter(check => check !== item);
            setChecked(updatedChecked);
        } else {
            setChecked(prev => [...prev, item]);
        }
    };



    const  handleDelete=(deleted)=>{

        let a=displayOptions.filter(item=>item!==deleted)
        setDisplayOptions(a)

    }

    return (
        <div>
            <h1>The Search Operations</h1>
            <input placeholder='Enter the name' onChange={handleRouter} />
            {selected.length > 0 ? (
                selected.map((item, index) => (
                    <div key={index}>
                        <span onClick={() => handleAdd(item)}>{item}</span>
                    </div>
                ))
            ) : (
                <div>No results found</div>
            )}

            <div>
                {displayOptions && (
                    displayOptions.map((item, index) => (
                        <div key={index} style={{ display: 'flex' }}>
                            <input type='checkbox' onClick={handleChecked} value={item} />
                            <p>{item}</p>
                            {checked.includes(item) && <hr />} {/* Conditionally render horizontal line after checked item */}
                            <button onClick={()=>handleDelete(item)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Searchoperations;
