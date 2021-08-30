import React, { useEffect, useRef, useState } from 'react'
const STATUSES = {
    STARTED: 'started',
    STOPPED: 'stopped',
}

function TimerComponent(props) {
    let [status, setStatus] = useState(props.timerStatus)
    let [secondsRemaining, setSecondsRemaining] = useState(props.initialTime)

    let secondsToDisplay = secondsRemaining % 60;
    let minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
    let minutesToDisplay = minutesRemaining % 60;
    let hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60

    console.log(props.timerStatus)
    if(status) setStatus(STATUSES.STARTED)
    else if(!status) setStatus(STATUSES.STARTED)

    let intervalCallback = () => {
        if(secondsRemaining > 0) {
            setSecondsRemaining(secondsRemaining - 1)
        } else {
            setStatus(STATUSES.STOPPED)
        }
    }

    let intervalDelay = STATUSES.STARTED ? 1000 : null

    // using custom hook useInterval
    useInterval(intervalCallback, intervalDelay)

    // let countdownDisplay = () => `${doubleDigits(hoursToDisplay)} : ${doubleDigits(minutesToDisplay)} : ${doubleDigits(secondsToDisplay)}`
    // let countdownDisplay = () => props.handleTimerDisplay(`${doubleDigits(hoursToDisplay)} : ${doubleDigits(minutesToDisplay)} : ${doubleDigits(secondsToDisplay)}`)
    // let countdownDisplay = props.handleTimerDisplay(`${doubleDigits(hoursToDisplay)} : ${doubleDigits(minutesToDisplay)} : ${doubleDigits(secondsToDisplay)}`)
    props.handleTimerDisplay(`${doubleDigits(hoursToDisplay)} : ${doubleDigits(minutesToDisplay)} : ${doubleDigits(secondsToDisplay)}`)

    // return (countdownDisplay)
}


// custom hook for timer
function useInterval(cb, delay) {
    console.log(cb, delay)
    let savedCallback = useRef();

    // remember callback
    useEffect(() => {
        savedCallback.current = cb
        // only re renders when cb changes
    }, [cb])

    // interval setup
    useEffect(() => {
        let tick = () => {
            savedCallback.current()
        }

        if(delay != null) {
            let intervalID = setInterval(tick, delay);
            return () => clearInterval(intervalID)
        }
    }, [delay])
}

// padding strings on screen
let doubleDigits = num => String(num).padStart(2, '0');

export default TimerComponent
