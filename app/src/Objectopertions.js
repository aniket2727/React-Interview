import React, { useEffect, useState } from 'react';

const Objectopertions = () => {
    // Define state to hold the data object
    const [data, setData] = useState({
        name: "aniket kadam",
        age: "2000",
        status: "relationship",
        job: "software developer"
    });

    useEffect(() => {
        // Delete the 'age' property from the data object
        delete data.age;
      
        // Update state with the modified data object
        setData({ ...data });

        // Log keys and values after deletion
        console.log("delete effect", Object.keys(data)); // Output: ["name", "status", "job"]
        console.log("delete effect", Object.values(data)); // Output: ["aniket kadam", "relationship", "software developer"]

    }, [data]); // Make sure to include data in the dependency array to avoid infinite loop

    // Iterate over the properties of the data object
    for (const item in data) {
        console.log(data[item]); // Output: "aniket kadam", "relationship", "software developer"
    }

    // Add a new property to the data object
    data["salary"]="kskksksksk";
    console.log(data); // Output: {name: "aniket kadam", status: "relationship", job: "software developer", salary: "kskksksksk"}

    return (
        <div>

        </div>
    )
}

export default Objectopertions;
