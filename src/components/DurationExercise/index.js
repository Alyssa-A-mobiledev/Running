import React, { useState, useRef } from "react";

function DurationExercise() {
    const [time, setTime] = useState(0);
    const [isPlank, setIsPlank] = useState(false);
    const timerRef = useRef(null);

    const handleStartStop = () => {
        if (isPlank) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        } else {
            timerRef.current = setInterval(() => {
                setTime((t) => t + 1);
            }, 1000);
        }
        setIsPlank(!isPlank);
    };

    const handleReset = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTime(0);
        setIsPlank(false);
    };

    const formatTime = (t) =>
        `${Math.floor(t / 60).toString().padStart(2, "0")}:${(t % 60)
            .toString()
            .padStart(2, "0")}`;

    return (
        <div>
            <h2>Plank</h2>
            <p>Time: {formatTime(time)}</p>
            <button onClick={handleStartStop}>{isPlank ? "Stop" : "Start"}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default DurationExercise;
