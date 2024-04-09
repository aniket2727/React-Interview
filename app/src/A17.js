import React from 'react';

const Displayfunctions = ({ data }) => {

    console.log(data)
    return (
        <div>
          <h1>this is display functions</h1>
          {
            Array.isArray(data) && data.map((item, index) => (
                <div key={index}>
                   <h1>{item.title}</h1>
                </div>
            ))
          }
        </div>
    );
}

export default Displayfunctions;
