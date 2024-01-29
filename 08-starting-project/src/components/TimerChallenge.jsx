import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title = 'Test Title', targetTime = 1}) {
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
    const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;
    const timer = useRef();
    const dialog = useRef();
    if(remainingTime <= 0) {
        handleStop();

    }
    function handleStart() {
        timer.current = setInterval( () => {
            setRemainingTime( prevRemainingTime => prevRemainingTime - 10 );
        }, 10);
    }
    function handleReset() {
        setRemainingTime( targetTime * 1000 );
    }
    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }
    return <>
        <ResultModal ref={dialog} targetTime={targetTime} onReset={handleReset} remainingTime={remainingTime} />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : null}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart }>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    </>
}