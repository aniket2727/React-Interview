import { useEffect } from "react";



const Mycomponets = () => {

    const fetchData = (callback) => {

        setTimeout(() => {
            const result="get data";
            callback(result)
        }, 2000);
        
    }


    useEffect(() => {
        
        const handlecallback= (result) => {
            console.log(result)
        }

        fetchData(handlecallback)
    })


    return (
        <div>
            <h1>call backs</h1>
        </div>
    )

}



export default Mycomponets;