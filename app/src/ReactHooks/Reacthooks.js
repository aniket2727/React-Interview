


import React, { useMemo, useState } from 'react'

const Reacthooks = () => {

    const [data, setdata] = useState(0);
    const [count, setcount] = useState(0)
    const [calculate, setcalculate] = useState();

    const reuslt = useMemo(() => {
        setcalculate(data * 2)
        console.log("rerender this page")
    }, [data])


    const handlechange = () => {
        setdata(data + 1)
    }

    const handleincreasecount = () => {
        setcount(count + 1)

    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={() => handlechange()}>increase data</button>
            <button onClick={() => handleincreasecount()}>increaese count</button>
        </div>
    )
}

export default Reacthooks
