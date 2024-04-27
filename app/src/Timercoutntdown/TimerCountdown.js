


//   this is time countdown

import { useEffect, useState } from "react";



const Timercountdown = () => {
    const[flag,setFlag]=useState(true);
    const [alltime, setAllTime] = useState(0)
    const [pause, setPause] = useState(false)
    const [reset, setReset] = useState(false);
    const [hours, setHours] = useState(0);
    const [minute, setMinute] = useState(0);
    const [seconds, setseconds] = useState(0);


    useEffect(()=>{
        let interval;

        if(!flag){
            interval=setInterval(()=>{
                if(!pause && alltime>0)
                setAllTime(prev=>prev-1)

            },1000)
        }
        else{
            clearInterval(interval)
        }

        return ()=>clearInterval(interval)


    },[flag,pause,alltime])


    const handleStartCount = () => {
        if (!(hours || minute || seconds)) {
            return setFlag(true);
        } else {
            setFlag(false);
            let timerTime = hours * 3600 + minute * 60 + parseInt(seconds);
            setAllTime(timerTime);
        }
    };

    const handlePause = () => {
        setPause(prevPause => !prevPause);
    };
     

    const handleReset = () => {
        setFlag(true);
        setHours(0);
        setMinute(0);
        setseconds(0);
        setAllTime(0);
        setReset(true);
        setPause(false);
    };



    
    return (
        <div>
        <h1>Timer Countdown</h1>
        {flag ? (
            <div>
                <h2>Enter the time</h2>
                <input placeholder="Hours" type="number" value={hours} onChange={(e) => setHours(e.target.value)} />
                <input placeholder="Minute" type="number" value={minute} onChange={(e) => setMinute(e.target.value)} />
                <input placeholder="Seconds" type="number" value={seconds} onChange={(e) => setseconds(e.target.value)} />
                <button onClick={handleStartCount}>Start</button>
            </div>
        ) : (
            <div>
                <label>Hours: {Math.floor(alltime / 3600)}</label>
                <label> Minute: {Math.floor((alltime % 3600) / 60)}</label>
                <label> Seconds: {alltime % 60}</label>
                <button onClick={handlePause}>{pause ? "Resume" : "Pause"}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        )}
        </div>
    )
}



export default Timercountdown;