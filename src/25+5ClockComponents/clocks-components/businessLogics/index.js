import React, { useEffect, useState } from 'react'
import PresentationalLogics from '../presentational';
// import TimerComponent from '../timer/legacyIndex';
// let afterConversionInSeconds = 110;

function Clock25Plus5() {
    let [breakTime, setBreakTime] = useState(0);
    let [sessionTime, setSessionTime] = useState(0);
    let [timerStatus, setTimerStatus] = useState(false);
    // let [resetTimer, setResetTimer] = useState(25);
    let [timer, setTimer] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [timeReamining, setTimeRemaining] = useState(0)

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
        } else if (clickedItem == "reset") {
            setTimer("00:00");
            setSessionTime(25);
            setBreakTime(5);
            setTimeRemaining(0);
            setTimerStatus(false);
        }
    };

    useEffect(() => {

        if (timerStatus) {
            // timeConversion(2);
            timerID = setInterval(() => {
                // timeConversion(timeReamining || sessionTime * 60);
                timeConversion(timeReamining > 0 ? timeReamining : sessionTime * 60);
                // timeConversion(timeReamining);
                setTimer(`${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`)
                // timeReamining--;
                // if(timeReamining < 1) {
                //     setTimerStatus(false);
                // }
                // setTimer(`${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`)
                if (timeReamining == 0) {
                    setTimerStatus(false);
                    return clearInterval(timerID)
                }
                // timeConversion(timeReamining || sessionTime);
                // timeReamining--;
            }, 100)
        }
        return () => clearInterval(timerID)
    }, [timerStatus, timeReamining])

    useEffect(() => {
        setSessionTime(25);
        setBreakTime(5);
        setTimer('')
    }, [])

    let timeConversion = (time) => {
        // let inSeconds = timeReamining ? time : time * 60;
        let inSeconds = time;
        let secondsToDisplay = inSeconds % 60;
        let minutesRemaining = (inSeconds - secondsToDisplay) / 60;
        let minutesToDisplay = minutesRemaining % 60;

        // console.log(inSeconds, "sdasjd")
        // if(inSeconds < 1) {
        //     setTimerStatus(false);
        //     console.log(inSeconds, "sdasjd")
        // }

        inSeconds--;
        if(inSeconds != -1) {
            setTimeRemaining(inSeconds);
            setSeconds(secondsToDisplay)
            setMinutes(minutesToDisplay) 
        } else {
            console.log(inSeconds, "sdasjd")
            clearInterval(timerID)
        }
        // setTimeRemaining(inSeconds);
        // setSeconds(secondsToDisplay)
        // setMinutes(minutesToDisplay)

        // setTimer(`${minutesToDisplay < 10 ? '0' + minutesToDisplay : minutesToDisplay} : ${secondsToDisplay < 10 ? '0' + secondsToDisplay : secondsToDisplay}`)
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
            {/* <button onClick={() => startTimer()}>start</button>
            <button onClick={() => stopTimer()}>stop</button> */}
            {minutes} : {seconds}
        </div>
    )
}

export default Clock25Plus5
