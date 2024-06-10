// fetch operations perform in this code
// code is written by  aniket kadam

import React, { useEffect, useState } from 'react';

const Fetchdata = () => {
    const [data, setData] = useState(null);
    const url = "https://jsonplaceholder.typicode.com/posts/1";

    useEffect(() => {
        const getdata = async () => {
            try {
                const apiresult = await fetch(url);
                const result = await apiresult.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        getdata();
    }, [url]);

    return (
        <div>
            {data ? (
                Object.entries(data).map(([key, value]) => (
                    <div key={key}>
                        <h2>{key}</h2>
                        <p>{value}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Fetchdata;
