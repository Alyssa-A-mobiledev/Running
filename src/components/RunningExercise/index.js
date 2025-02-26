import React, { useState, useRef } from "react";

function RunningExercise() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
    const timerRef = useRef(null);

    const formatTime = (t) =>
        `${Math.floor(t / 60).toString().padStart(2, "0")}:${(t % 60)
            .toString()
            .padStart(2, "0")}`;

    const handleStartStop = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        } else {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTime(0);
        setLaps([]);
        setIsRunning(false);
    };

    const handleRecordLap = () => {
        setLaps((prevLaps) => [...prevLaps, formatTime(time)]);
    };

    return (
        <div>
            <h2>Running Exercise</h2>
            <p>Time: {formatTime(time)}</p>
            <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleRecordLap} disabled={!isRunning}>
                Record Lap
            </button>

            {laps.length > 0 && (
                <div>
                    <h3>Lap Times:</h3>
                    <ul>
                        {laps.map((lap, index) => (
                            <li key={index}>
                                Lap {index + 1}: {lap}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default RunningExercise;
