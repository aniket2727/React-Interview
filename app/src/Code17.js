import React from 'react';

const Code17 = () => {

    function outerfun() {
        const name = "aniket";

        function innerfun() {
            console.log("the name is", name);
        }

        return innerfun; // Return the function itself, not its result
    }

    const innerFunction = outerfun(); // Call outerfun and get the returned innerfun
    innerFunction(); // Call the returned innerfun function

    return (
        <div>
            {/* You can add more JSX here if needed */}
        </div>
    );
}

export default Code17;
