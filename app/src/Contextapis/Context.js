// Context.js
import React from "react";

const mycontext = React.createContext();

export const MyProvider = mycontext.Provider;
export const MyConsumer = mycontext.Consumer;

export default mycontext;
