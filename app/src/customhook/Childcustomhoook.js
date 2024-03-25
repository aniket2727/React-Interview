import React from "react";
import CustomHook from "../componets/CustomHook";

const Childhook = () => {
    const url = 'https://dummyjson.com/products/1'
    const { data, error, loading } = CustomHook(url);

    console.log(data);
    console.log(error);
    console.log(loading);

    return (
        <div>
            <h1>This is page</h1>
        </div>
    );
};

export default Childhook;
