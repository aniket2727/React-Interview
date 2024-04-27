


//   faq  componets   

import { useState } from "react";



const Faqcomponets = () => {

    const [data, setData] = useState([{
        questions: "what is your name",
        ans: "aniket",
        setStatus: false
    }, {
        questions: "what is hobby",
        ans: "playing cricket",
        setStatus: false

    }])


    const handledisplay = (index) => {
        setData(prev => {
            let newData = [...prev];
            newData[index] = {...newData[index], setStatus: !newData[index].setStatus};
            return newData;
        });
    }
    return (
        <div>
            <h1>this is faq componets</h1>
            {
                data.map((item, index) => (
                    <div key={index}>
                        <h1>{item.questions}</h1>
                        {
                            item.setStatus && <h1>{item.ans}</h1>
                        }

                        <button onClick={() => handledisplay(index)}>{item.setStatus ? 'hide' : 'show'}</button>
                    </div>
                ))


            }
        </div >
    )
}


export default Faqcomponets;



