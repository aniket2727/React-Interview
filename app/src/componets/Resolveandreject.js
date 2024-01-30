import React from 'react';

const Resolveandreject = () => {

    const result = new Promise((resolve, reject) => {
        const a = false;

        if (a) {
            resolve("Resolved"); // Resolving with a message or data
        } else {
            reject("Rejected"); // Rejecting with a message or data
        }
    });

    // Now you can handle the result of the promise
    result
        .then((message) => {
            console.log("Resolved: ", message);
        })
        .catch((message) => {
            console.log("Rejected: ", message);
        });

    return (
        <div>
            {/* You can render your component content here */}
        </div>
    );
}

export default Resolveandreject;
