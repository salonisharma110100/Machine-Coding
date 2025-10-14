//Objective:
//Build a functional Timer/Stopwatch using React that allows the user to start, pause, resume, and reset the timer.

import { useState, useEffect } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const convertFormat = (time) => {
        const minute = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const miliseconds = Math.floor((time % 1000) / 10);
        return `${minute.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${miliseconds.toString().padStart(2, '0')}`;
    }

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => setTime(prev => prev + 10), 10);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>{convertFormat(time)}</h1>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <button onClick={() => setIsRunning(true)} disabled={isRunning}>Start</button>
                <button onClick={() => setIsRunning(false)} disabled={!isRunning}>Pause</button>
                <button onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch;
