


// this is debouncing code

import { useEffect, useState } from "react"




export const Handledebigging = () => {
    const [data, setdata] = useState(['aniket', 'kadam', 'sanket'])

    const [text, settext] = useState('')
    const [result, setresult] = useState([])

    useEffect(() => {

        const timeoutid = setTimeout(() => {
            var result = data.filter(item =>
                item.includes(text)
            )
            setresult(result)
        }, 2000)

        return () => clearTimeout(timeoutid)
    }, [text])

    console.log("this is result",result)

    return (
        <div>
            <h1>this is debigging</h1>
            <input placeholder="write what wabt to find" onChange={(e) => settext(e.target.value)} />
        </div>
    )
}

