import React, { useEffect } from 'react';

const Objectopertions = () => {
    const data={
        name:"aniket kadam",
        age:"2000",
        status:"relationship",
        job:"software developer"
    }

    // Get keys and values from the data object
    const keys_values = Object.keys(data);
    const values = Object.values(data);

    useEffect(() => {
        // Log keys and values before deletion
        console.log(keys_values); // Output: ["name", "age", "status", "job"]
        console.log(values); // Output: ["aniket kadam", "2000", "relationship", "software developer"]

        // Delete the 'age' property from the data object
        delete data.age;

        // Log keys and values after deletion
        console.log("delete effect", keys_values); // Output: ["name", "age", "status", "job"]
        console.log("delete effect", values); // Output: ["aniket kadam", "2000", "relationship", "software developer"]
        // As you can see, keys_values and values arrays remain the same after deletion

    }, []);

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
