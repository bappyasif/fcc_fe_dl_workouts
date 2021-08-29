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
            beginTimer(sessionTime);
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

    let beginTimer = (time) => {
        let testingTime = 2;
        let count = 60;
        let timer = setInterval(() => {
            count--;
            if (!timerStatus) {
                if (count == 0) {
                    count = 60;
                    testingTime--;
                    
                }
                setTimer(
                    `${testingTime - 1 ? testingTime - 1 : "00"}:${count < 10 ? "0" + count : count}`
                );
            }

            if (timerStatus) {
                clearInterval(timer);
                count = -4
            }

            if (testingTime <= 0) {
                clearInterval(timer);
                setTimer("00:00");
            }
        }, 1000);
    };

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
