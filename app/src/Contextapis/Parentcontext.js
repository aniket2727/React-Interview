// Parentcontext.js
import React from "react";
import Child from "./ChildContex";
import { MyProvider } from "./Context";

const Parentcontext = () => {
    const data = "my name is aniket";
    return (
        <MyProvider value={data}>
            <Child />
        </MyProvider>
    );
};

export default Parentcontext;
