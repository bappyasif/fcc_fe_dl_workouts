import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import PresentationalLogics from '../presentational';
// import TimerComponent from '../timer/legacyIndex';
// let afterConversionInSeconds = 110;
let flagged = false;
function Clock25Plus5() {
    let [breakTime, setBreakTime] = useState(0);
    let [sessionTime, setSessionTime] = useState(0);
    let [timerStatus, setTimerStatus] = useState(false);
    // let [resetTimer, setResetTimer] = useState(25);
    let [timer, setTimer] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [timeReamining, setTimeRemaining] = useState(undefined);

    let timerID;

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
        } else if (clickedItem == "reset") {
            setTimer("00:00");
            setSessionTime(25);
            setBreakTime(5);
            setTimeRemaining(undefined);
            setTimerStatus(false);
        }
    };

    useEffect(() => {
        if (timerStatus) {
            timerID = setInterval(() => {
                let timeObject = timeConversion();

                setTimer(`${timeObject.mins < 10 ? '0' + timeObject.mins : timeObject.mins} : ${timeObject.secs < 10 ? '0' + timeObject.secs : timeObject.secs}`)

                if (timeReamining == 0) {
                    setTimer("00:00");
                    setTimeRemaining(undefined);
                    setTimerStatus(false);
                    return clearInterval(timerID)
                } 
            }, 500)
        }
        return () => clearInterval(timerID)
    }, [!timerStatus, timeReamining])

    let timeConversion = () => {
        let inSeconds = timeReamining ? timeReamining : sessionTime * 60;
        
        let secondsToDisplay = inSeconds % 60;

        let minutesRemaining = (inSeconds - secondsToDisplay) / 60;
       
        let minutesToDisplay = minutesRemaining % 60;

        setTimeRemaining(inSeconds-1)

        return {secs: secondsToDisplay, mins: minutesToDisplay}
    }


    useEffect(() => {
        setSessionTime(25);
        setBreakTime(5);
        setTimer('')
    }, [])

    return (
        <div className='inner-container'>
            <PresentationalLogics
                breakTime={breakTime}
                sessionTime={sessionTime}
                handleClicks={(evt) => handleClicks(evt)}
                timerStatus={timerStatus}
                timer={timer}
            />
            {/* <button onClick={() => startTimer()}>start</button>
            <button onClick={() => stopTimer()}>stop</button> */}
            {minutes} : {seconds}
        </div>
    )
}

export default Clock25Plus5