import React, { useState } from 'react'
import PresentationalLogics from '../presentational';

function Clock25Plus5() {
    let [breakTime, setBreakTime] = useState(5);
    let [sessionTime, setSessionTime] = useState(25);
    let [timerStatus, setTimerStatus] = useState(false);
    let [resetTimer, setResetTimer] = useState(25);
    let [timer, setTimer] = useState(resetTimer);

    let handleClicks = (evt) => {
        // let clickedItem = evt.target.parentNode.parentNode.id || evt.target.parentNode.parentNode.parentNode.id;
        let clickedItem = evt.target.id || evt.target.parentNode.id || evt.target.parentNode.parentNode.id;
        // console.log(clickedItem);
        if (clickedItem == 'break-increment') {
            setBreakTime(breakTime + 1)
            // console.log('break increment!!')
        } else if (clickedItem == 'break-decrement') {
            // console.log('break decrement!!')
            setBreakTime(breakTime - 1 != -1 ? breakTime - 1 : 1)
        } else if (clickedItem == 'session-increment') {
            // console.log('session increment!!')
            setSessionTime(sessionTime + 1)
        } else if (clickedItem == 'session-decrement') {
            // console.log('session decrement!!')
            setSessionTime(sessionTime - 1 != -1 ? sessionTime - 1 : 1)
        } else if (clickedItem == 'start_stop') {
            console.log('start-pause', timerStatus)
            setTimerStatus(!timerStatus)
            // beginTimer(sessionTime);
            // beginTimer();
            testTimer()
            // testingTimer()
        } else if (clickedItem == 'reset') {
            console.log('reset')
            // setResetTimer(resetTimer);
            // let formattedTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            // console.log(formattedTime)
            setTimer(resetTimer);
            setSessionTime(resetTimer);
        }
    }


    let counter = 11;
    let timeout;
    let tick = () => {
        counter--;
        console.log(counter);
        if(counter <= 0) {
            clearInterval(timeout)
        }
    }

    let pause = () => clearInterval(timeout)

    let resume = () => timeout = setInterval(tick, 1000);

    let testTimer = () => {
        if(!timerStatus) {
            resume();
            counter = 4;
            return 
        } else {
            pause();
        }
    }

    let counter = 60;
    let tick = () => {
        counter--;
        console.log(counter);
    }

    let stop = () => clearInterval(tick)

    let testTimer = () => {
        if(!timerStatus) {
            return
        } else {
            setInterval(tick, 1000);
            if(counter <= 0) stop()
        }
        // else stop()
    }

    let t, count=11;
    let showCount = () => console.log(count);
    let countDown = () => {
        showCount();
        if(!timerStatus) pause()
        if(count <= 0) {
            
        } else{
            count--;
            t = setTimeout(countDown, 1000)
        }
    }
    let pause = () => clearTimeout(t)

    let countDown = () => {
        let paused = false;
        let count = 11;
        setInterval(() => {
            if (paused) return
            count--;
            console.log(count)
        }, 1000)
    }

    // let count = 60;
    // let time = 2;
    // let testingTimer = () => {
    //     setInterval(() => {
    //         if (timerStatus) {
    //             clearInterval(timer);
    //             // setTimerStatus(!timerStatus)
    //             return

    //         } else {
    //             count--;
    //         setTimer(`${count}`)
    //         setTimerStatus(!timerStatus)
    //         }
    //         // if(count <= 0) {
    //         //     clearInterval(timer);
    //         //     setTimerStatus(!timerStatus)
    //         // }
    //         // setTimer(`${time - 1 ? time - 1 : '00'}:${count < 10 ? '0' + count : count}`)
    //     }, 1000)
    // }

    // let time = 2;
    // let beginTimer = (time) => {

    //     let count = 60;
    //     let timer = setInterval(() => {
    //         if (!timerStatus) {
    //             count--;
    //             if (count == 0) {
    //                 count = 60;
    //                 time--;
    //             }
    //             // setTimer(`${time - 1 ? time - 1 : '00'}:${count < 10 ? '0' + count : count}`)
    //             // if (time <= 0) {
    //             //     clearInterval(timer)
    //             //     setTimer('00:00')
    //             // }
    //         } else {
    //             clearInterval(timer);
    //             setTimerStatus(!timerStatus)
    //             console.log(time, count, timerStatus, timer, "!!");
    //         }

    //         // time--;
    //         setTimer(`${time - 1 ? time - 1 : '00'}:${count < 10 ? '0' + count : count}`)
    //         // console.log(secs, 'time!!')
    //         if (time <= 0) {
    //             clearInterval(timer)
    //             setTimer('00:00')
    //         }

    //     }, 1000)
    // }

    // let beginTimer = time => {
    //     // console.log(time, time*60*60)
    //     // let secs = time*60;
    //     // let count = 60;
    //     // console.log(millis, "??")
    //     let timer = setInterval(() => {
    //         // time -= 1;
    //         // secs --;
    //         // if (!timerStatus) {
    //         //     count--;
    //         //     if (count == 0) {
    //         //         count = 60;
    //         //         time--;
    //         //     }
    //         // } else {
    //         //     clearInterval(timer)
    //         //     // setTimerStatus(!timerStatus)
    //         // }

    //         count--;
    //         if (count == 0) {
    //             count = 60;
    //             time--;
    //         } 

    //         // time--;
    //         setTimer(`${time - 1 ? time - 1 : '00'}:${count < 10 ? '0' + count : count}`)
    //         // console.log(secs, 'time!!')
    //         if (time <= 0) {
    //             clearInterval(timer)
    //             setTimer('00:00')
    //         }

    //     }, 1000)
    // }


    return (
        <div className='inner-container'>
            <PresentationalLogics
                breakTime={breakTime}
                sessionTime={sessionTime}
                handleClicks={(evt) => handleClicks(evt)}
                timerStatus={timerStatus}
                timer={timer}
            />
        </div>
    )
}

export default Clock25Plus5


/**
 * 
 * 
 import React, { useEffect, useState } from 'react'
import PresentationalLogics from '../presentational';
// import TimerComponent from '../timer/legacyIndex';
// let afterConversionInSeconds = 110;

function Clock25Plus5() {
    let [breakTime, setBreakTime] = useState(5);
    let [sessionTime, setSessionTime] = useState(25);
    let [timerStatus, setTimerStatus] = useState(false);
    let [resetTimer, setResetTimer] = useState(25);
    let [timer, setTimer] = useState(resetTimer);
    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
    // let [timerDisplay, setTimerDisplay] = useState(resetTimer);
    let timerID;

    let handleClicks = (evt) => {
        // let clickedItem = evt.target.parentNode.parentNode.id || evt.target.parentNode.parentNode.parentNode.id;
        let clickedItem = evt.target.id || evt.target.parentNode.id || evt.target.parentNode.parentNode.id;
        // console.log(clickedItem);
        if (clickedItem == 'break-increment') {
            setBreakTime(breakTime + 1)
            // console.log('break increment!!')
        } else if (clickedItem == 'break-decrement') {
            // console.log('break decrement!!')
            setBreakTime(breakTime - 1 != -1 ? breakTime - 1 : 1)
        } else if (clickedItem == 'session-increment') {
            // console.log('session increment!!')
            setSessionTime(sessionTime + 1)
        } else if (clickedItem == 'session-decrement') {
            // console.log('session decrement!!')
            setSessionTime(sessionTime - 1 != -1 ? sessionTime - 1 : 1)
        } else if (clickedItem == 'start_stop') {
            console.log('start-pause', timerStatus)
            setTimerStatus(!timerStatus)
            if(!timerStatus) startTimer()
            // startTimer()
            // beginTimer(sessionTime);
            // beginTimer();
            // testTimer()
            // testingTimer()
        } else if (clickedItem == 'reset') {
            console.log('reset')
            // setResetTimer(resetTimer);
            // let formattedTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            // console.log(formattedTime)
            setTimer(resetTimer);
            setSessionTime(resetTimer);
        }
    }

    let convertTimeToSeconds = (mins, secs) => secs + mins * 60

    let startTimer = () => {
        timerID = setInterval(countdownTicks, 1000)
    }
    useEffect(() => {
        if(!timerStatus) startTimer()
        // timerID = setInterval(countdownTicks, 1000)
    }, [timer])
    // timerID = setInterval(countdownTicks, 1000)

    let countdownTicks = () => {
        let afterConversionInSeconds = convertTimeToSeconds(minutes, seconds)
        // let afterConversionInSeconds = 110;
        // console.log(afterConversionInSeconds, "!!", minutes, seconds)
        
        if(afterConversionInSeconds) {
            // seconds change
            seconds ? setSeconds(seconds-1) : setSeconds(59)

            console.log(seconds, "<>")

            // minutes chnage
            if(afterConversionInSeconds % 60 == 0 && minutes) {
                setMinutes(minutes);
            }

            setTimer(`${minutes} : ${seconds}`);
            console.log(timer, "?!", afterConversionInSeconds, "!!", minutes, seconds)
        } else {
            clearInterval(timerID)
        }
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
            <TimerComponent
                timerStatus={timerStatus}
                initialTime={2}
                handleTimerDisplay={handleTimerDisplay} /> 
                </div>
                )
            }
            
            export default Clock25Plus5
            
 */