import React from 'react';

const Code10 = () => {
    
    var name = "kadam";
    const data = {
        name: "aniket",
        display:function() {
            console.log("name is", this.name);
        }
    };

    // const data1 = {
    //     name: "aniket",
    //     display:()=> {
    //         console.log("name is", this.name);
    //     }
    // };


    data.display();
    // data1.display();
    return (
        <div>
        </div>
    );
};

export default Code10;
