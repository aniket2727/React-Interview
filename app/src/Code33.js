

//  patch and delete apis 
// this code is written by the aniket kadam

import React from 'react'

const PatchandDeleteapis = () => {

    const handleDelete = async () => {

        const rawResult = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'delete'
        })

        const result = await rawResult.json();
        console.log(result);
    }


    const handlepatch = async () => {
        console.log("patch is called")
        try {
            const rawResultpatch = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PATCH',
                body: JSON.stringify({
                        title: 'foo',
                    }),
                headers: {
                    'Content-type': 'application-json',
                }
            })
            const result = await rawResultpatch.json();
            console.log(result);

        }
        catch (error) {
            console.log("the error is", error)
        }

    }
    return (
        <div>
            <h1>this is patch and delete operations</h1>
            <button onClick={handleDelete} >delete</button>
            <button onClick={handlepatch}>patch</button>
        </div>
    )
}


export default PatchandDeleteapis;