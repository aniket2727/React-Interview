


// react cooding questions

import Usestateproblems from "./componets/Usestateproblems"
import { useState } from "react"



const Displayproblem = () => {

    const data = [{
        text: "The sun dipped below the horizon, painting the sky in hues of deep orange and soft purple. As the "
    }, {
        text: "The sun dipped below the horizon, painting the sky in hues of deep orange and soft purple. As the "
    }]

    const [past, setpast] = useState({});

    const Handlestate = (index) => {
        setpast((prev) => ({
            ...prev,
            
            [index]: !prev[index]
        }))
    }
    console.log("this is past", past)
    return (


        <div>

            {
                data.map((item, index) => {
                    const temp = past[index];

                    return (
                        <div>
                        {
                            temp ? (
                            <div key={index}>
                                <h1>{item.text}</h1>
                                <button onClick={() => Handlestate(index)}>read less</button>
                            </div>
                            ) : (

                            <div key={index}>
                                <h1>{item.text.slice(0, 10)}</h1>
                                <button onClick={() => Handlestate(index)}>read more </button>
                            </div>

                            )
                        }
                        </div>

                    )


                })

            }


        </div>

    )
}




export default Displayproblem