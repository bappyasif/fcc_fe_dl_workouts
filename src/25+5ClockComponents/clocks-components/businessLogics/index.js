import React, { useEffect, useState } from 'react'
import PresentationalLogics from '../presentational';
// import TimerComponent from '../timer/legacyIndex';
// let afterConversionInSeconds = 110;

function Clock25Plus5() {
    let [breakTime, setBreakTime] = useState(5);
    let [sessionTime, setSessionTime] = useState(25);
    let [timerStatus, setTimerStatus] = useState(false);
    let [resetTimer, setResetTimer] = useState(25);
    let [timer, setTimer] = useState(sessionTime);
    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [timeReamining, setTimeRemaining] = useState(0)
    // let [timerDisplay, setTimerDisplay] = useState(resetTimer);
    let timerID, clickedItem;

    let handleClicks = (evt) => {
        let clickedItem =
            evt.target.id ||
            evt.target.parentNode.id ||
            evt.target.parentNode.parentNode.id;
        if (clickedItem == "break-increment") {
            setBreakTime(breakTime + 1);
        } else if (clickedItem == "break-decrement") {
            setBreakTime(breakTime > 1 ? breakTime - 1 : 1);
        } else if (clickedItem == "session-increment") {
            setSessionTime(sessionTime < 60 ? sessionTime + 1 : sessionTime);
        } else if (clickedItem == "session-decrement") {
            setSessionTime(sessionTime > 1 ? sessionTime - 1 : 1);
        } else if (clickedItem == "start_stop") {
            setTimerStatus(!timerStatus);
            if (!timerStatus) {
                timeConversion(sessionTime);
                startTimer()
            }
        } else if (clickedItem == "reset") {
            setTimer("00:00");
            setSessionTime(25);
            setBreakTime(5);
        }
    };

    /**
     * 
     * 
     Personally I would try to decouple:
        * timer-handling with start/pause/stop
        * and actual logic done on timer events
     */

    let startTimer = () => setInterval(tick, 1000)

    let stopTimer = () => clearInterval(tick);

    let tick = () => {
        timeReamining--;
        console.log(timeReamining, "<>")
        if (!timeReamining) stopTimer()
    }

    let timeConversion = (time) => {
        let inSeconds = time * 60 * 60;
        let secondsToDisplay = inSeconds % 60;
        let minutesRemaining = (inSeconds - secondsToDisplay) / 60;
        let minutesToDisplay = minutesRemaining % 60;
        return { seconds: secondsToDisplay, minutes: minutesToDisplay }
    }
    return (
        <div className='inner-container'>
            <PresentationalLogics
                breakTime={breakTime}
                sessionTime={sessionTime}
                handleClicks={(evt) => handleClicks(evt)}
                timerStatus={timerStatus}
                timer={timer}
            />
            <button onClick={() => startTimer()}>start</button>
            {minutes} : {seconds}
        </div>
    )
}

export default Clock25Plus5
