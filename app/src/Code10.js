import React from 'react';

const Code10 = () => {
    
    var name = "kadam";
    const data = {
        name: "aniket",
        display() {
            console.log("name is", this.name);
        }
    };

    data.display();
    return (
        <div>
        </div>
    );
};

export default Code10;
