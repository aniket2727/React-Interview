


//   child to parent data transfer

import { useState } from "react"



const Childdata1 = ({ gdata }) => {

    const handledata=()=>{
        gdata(10, 20)

    }

    return (
        <div>
            <h1>child </h1>
            <button onClick={handledata}>add</button>
        </div>
    )

}



const Parentxyz = () => {
    const [s, sets] = useState(0)
    function data(a, b) {
        sets(a + b);
    }
    return (
        <div>
            <h1>the sum is {s}</h1>
            <Childdata1 gdata={data} />
        </div>
    )
}



export default Parentxyz;