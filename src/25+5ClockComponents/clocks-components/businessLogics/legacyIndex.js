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
        if (counter <= 0) {
            clearInterval(timeout)
        }
    }

    let pause = () => clearInterval(timeout)

    let resume = () => timeout = setInterval(tick, 1000);

    let testTimer = () => {
        if (!timerStatus) {
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
        if (!timerStatus) {
            return
        } else {
            setInterval(tick, 1000);
            if (counter <= 0) stop()
        }
        // else stop()
    }

    let t, count = 11;
    let showCount = () => console.log(count);
    let countDown = () => {
        showCount();
        if (!timerStatus) pause()
        if (count <= 0) {

        } else {
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
 /**
 *
 *
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

            // setBreakTimerStatus(!breakTimerStatus);

            // if(setTest) {
            //     console.log(breakTimerStatus, "break here?!")
            //     setBreakTimerStatus(!breakTimerStatus);
            // }
            // else {
            //     console.log('sesson timer');
            //     setTimerStatus(!timerStatus);
            // }
        } else if (clickedItem == "reset") {
            setTimer("00:00");
            setSessionTime(25);
            setBreakTime(5);
            setTimeRemaining(undefined);
            setTimerStatus(false);
            setBreakTimerStatus(false);
        }
    };

    useEffect(() => {
        if (timerStatus) {
            timerID = setInterval(() => {
                // let timeObject = timeConversion();
                // setTimer(`${timeObject.mins < 10 ? '0' + timeObject.mins : timeObject.mins} : ${timeObject.secs < 10 ? '0' + timeObject.secs : timeObject.secs}`)
                tick();

                if (timeReamining == 0) {
                    flagged = true;
                    setTest(true);
                    setTimer("00:00");
                    setTimeRemaining(undefined);
                    setTimerStatus(false);
                    setBreakTimerStatus(true);
                    return clearInterval(timerID)
                }
            }, 500)
        }
        return () => clearInterval(timerID)
    }, [!timerStatus, timeReamining])

    useEffect(() => {
        // console.log(breakTimerStatus, "here?!")
        if (breakTimerStatus) {
            breakTimerID = setInterval(() => {
                // console.log('before!!', timeReamining, breakTime)
                tick();
                // let timeObject = timeConversion();

                // setTimer(`${timeObject.mins < 10 ? '0' + timeObject.mins : timeObject.mins} : ${timeObject.secs < 10 ? '0' + timeObject.secs : timeObject.secs}`)
                // console.log('after!!', timeReamining, breakTime);
                if (timeReamining == 0) {
                    setBreakTimerStatus(false);
                    flagged = false;
                    setTest(false);
                    setTimeRemaining(undefined);
                    clearInterval(breakTimerID)
                }
                // return () => clearInterval(timerID)
            }, 500)
        }
        return () => clearInterval(breakTimerID)
    }, [breakTimerStatus, timeReamining])

    let tick = () => {
        let timeObject = timeConversion();

        setTimer(
            `${timeObject.mins < 10 ? "0" + timeObject.mins : timeObject.mins} : ${
              timeObject.secs < 10 ? "0" + timeObject.secs : timeObject.secs
            }`
          );
    }

    let timeConversion = () => {
        // let inSeconds = timeReamining ? timeReamining : sessionTime * 60;
        let inSeconds;

        if (breakTimerStatus) {
            inSeconds = timeReamining ? timeReamining : breakTime * 60;
        } else {
            inSeconds = timeReamining ? timeReamining : sessionTime * 60;
        }

        let secondsToDisplay = inSeconds % 60;

        let minutesRemaining = (inSeconds - secondsToDisplay) / 60;

        let minutesToDisplay = minutesRemaining % 60;

        setTimeRemaining(inSeconds - 1)
        // console.log(inSeconds, timeReamining, '??')

        return { secs: secondsToDisplay, mins: minutesToDisplay }
    }
 *
 *
     useEffect(() => {
        if (timerStatus) {
            timerID = setInterval(() => {
                let timeObject = timeConversion();

                setTimer(`${timeObject.mins < 10 ? '0' + timeObject.mins : timeObject.mins} : ${timeObject.secs < 10 ? '0' + timeObject.secs : timeObject.secs}`)

                if (timeReamining == 0) {
                    setTimer("00:00");
                    setTimeRemaining(undefined);
                    setTimerStatus(false);
                    setBreakTimerStatus(true);
                    return clearInterval(timerID)
                }
            }, 500)
        }

        if (breakTimerStatus) {
            breakTimerID = setInterval(() => {
                console.log('before!!', timeReamining, breakTime)
                // tick();
                let timeObject = timeConversion();

                setTimer(`${timeObject.mins < 10 ? '0' + timeObject.mins : timeObject.mins} : ${timeObject.secs < 10 ? '0' + timeObject.secs : timeObject.secs}`)
                console.log('after!!', timeReamining, breakTime);
                if (timeReamining == 0) clearInterval(breakTimerID)
                // return () => clearInterval(timerID)
            }, 500)
        }
        return () => clearInterval(timerID)
    }, [!timerStatus, breakTimerStatus, timeReamining])

    let tick = () => {
        let timeObject = timeConversion();

        setTimer(`${timeObject.mins < 10 ? '0' + timeObject.mins : timeObject.mins} : ${timeObject.secs < 10 ? '0' + timeObject.secs : timeObject.secs}`)
    }
 
 * 
 * 
     useEffect(() => {
        if (timerStatus) {
            timerID = setInterval(() => {
                let timeObject = timeConversion();

                // console.log(timeReamining, "??", flagged, sessionTime)

                // setTimer(`${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`)
                setTimer(`${timeObject.mins < 10 ? '0' + timeObject.mins : timeObject.mins} : ${timeObject.secs < 10 ? '0' + timeObject.secs : timeObject.secs}`)

                // console.log(timeReamining, "??", flagged, sessionTime, timer, timeObject.mins, timeObject.secs)


                // clocks stops at 2 cycles before it's supposed time which is 0   (timeObject.mins == 0 && timeObject.secs == 1 )|| 
                if (timeReamining == 0) {
                    setTimer("00:00");
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

        // setTimeRemaining(inSeconds > 0 ? inSeconds-1 : 60)
        setTimeRemaining(inSeconds-1)

        // console.log("<><>", inSeconds, timeReamining);

        // if(timeReamining == 0) {
        //     setTimer("00:00");
        //     console.log("here", inSeconds, timeReamining);
        //     setTimerStatus(false);
        // }

        return {secs: secondsToDisplay, mins: minutesToDisplay}
    }
 * 
 * 
 useEffect(() => {
        if (timerStatus) {
            timerID = setInterval(() => {
                let timeObject = timeConversion();

                // console.log(timeReamining, "??")
                // if(timeReamining == 0) flagged = true;
                console.log(timeReamining, "??", flagged, sessionTime)
                // clocks never stops, keeps on running
                // if (timeReamining < 0) clearInterval(timerID)

                // setTimer(`${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`)
                setTimer(`${timeObject.mins < 10 ? '0' + timeObject.mins : timeObject.mins} : ${timeObject.secs < 10 ? '0' + timeObject.secs : timeObject.secs}`)

                // clocks stops at 2 cycles before it's supposed time which is 0
                if (timeReamining == 0 && flagged) {
                    setTimerStatus(false);
                    return clearInterval(timerID)
                } 
            }, 500)
        }
        return () => clearInterval(timerID)
    }, [!timerStatus, timeReamining])

    let timeConversion = () => {
        // let inSeconds = timeReamining ? time : time * 60;
        let inSeconds = timeReamining ? timeReamining : sessionTime * 60;
        // let inSeconds = time;
        let secondsToDisplay = inSeconds % 60;
        let minutesRemaining = (inSeconds - secondsToDisplay) / 60;
        let minutesToDisplay = minutesRemaining % 60;

        setTimeRemaining(inSeconds > 0 ? inSeconds-1 : 60)
        // if(inSeconds > 59) {
        //     console.log('what now?!', inSeconds, timeReamining)
        //     flagged = true;
        //     // setSessionTime(0)
        // }
        return {secs: secondsToDisplay, mins: minutesToDisplay}

        // if(inSeconds-1 < 0 || timeReamining-1 == 0) {
        //     console.log(inSeconds-1,"here!!", secondsToDisplay, minutesToDisplay)
        //     setTimerStatus(false)
        // }

        // console.log(inSeconds == 0 ? 60 : inSeconds-1, "!!", inSeconds-1, inSeconds, timerStatus, "<>", inSeconds-1 <= 0 ? 59 : inSeconds-1, 'mins', minutesToDisplay)
        // setTimeRemaining(inSeconds-1 < 0 ? 60 : inSeconds-1);
        // setTimeRemaining(inSeconds == 0 ? 60 : inSeconds-1);
        // setSeconds(secondsToDisplay)
        // setMinutes(minutesToDisplay)

        // these two setters has a time difference of 1`2s 
        // setTimer(`${minutesToDisplay < 10 ? '0' + minutesToDisplay : minutesToDisplay} : ${secondsToDisplay < 10 ? '0' + secondsToDisplay : secondsToDisplay}`)
        // setTimer(`${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`)

    }
 * 
 * 
     useEffect(() => {
        if (timerStatus) {
            timerID = setInterval(() => {
                timeConversion();

                console.log(timeReamining, "??")
                if(timeReamining == 0) flagged = true;
                // clocks never stops, keeps on running
                // if (timeReamining < 0) clearInterval(timerID)

                // clocks stops at 2 cycles before it's supposed time which is 0
                if (timeReamining == 1) {
                    setTimerStatus(false);
                    return clearInterval(timerID)
                } 
            }, 500)
        }
        return () => clearInterval(timerID)
    }, [!timerStatus, timeReamining])

    let timeConversion = () => {
        // let inSeconds = timeReamining ? time : time * 60;
        let inSeconds = timeReamining ? timeReamining : sessionTime * 60;
        // let inSeconds = time;
        let secondsToDisplay = inSeconds % 60;
        let minutesRemaining = (inSeconds - secondsToDisplay) / 60;
        let minutesToDisplay = minutesRemaining % 60;

        // if(inSeconds-1 < 0 || timeReamining-1 == 0) {
        //     console.log(inSeconds-1,"here!!", secondsToDisplay, minutesToDisplay)
        //     setTimerStatus(false)
        // }

        console.log(inSeconds == 0 ? 60 : inSeconds-1, "!!", inSeconds-1, inSeconds, timerStatus, "<>", inSeconds-1 <= 0 ? 59 : inSeconds-1, 'mins', minutesToDisplay)
        // setTimeRemaining(inSeconds-1 < 0 ? 60 : inSeconds-1);
        setTimeRemaining(inSeconds == 0 ? 60 : inSeconds-1);
        setSeconds(secondsToDisplay)
        setMinutes(minutesToDisplay)

        if(inSeconds == 59  && minutesToDisplay > 0 && flagged) {
            console.log(inSeconds-1,"here!!", secondsToDisplay, minutesToDisplay)
            // setTimerStatus(false)
            flagged = false;
        }

        // if(secondsToDisplay == 0 && minutesToDisplay == 0) {
        //     console.log(inSeconds-1,"here!!", secondsToDisplay, minutesToDisplay)
        //     setTimerStatus(false)
        // }

        // const newTime = timeReamining - 1;
        // setTimeRemaining(newTime);
       


        // console.log(seconds, minutes, "why is it running twice on each interval or not!?", secondsToDisplay, minutesToDisplay, timer)

        // these two setters has a time difference of 1`2s 
        setTimer(`${minutesToDisplay < 10 ? '0' + minutesToDisplay : minutesToDisplay} : ${secondsToDisplay < 10 ? '0' + secondsToDisplay : secondsToDisplay}`)
        // setTimer(`${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`)

    }
 * 
 * 
 useEffect(() => {
        if (timerStatus) {
            timerID = setInterval(() => {
                timeConversion(timeReamining || sessionTime);
                // timeReamining--; // direct change of state, must be always avoided
                
                // safer approach
                // const newTime = timeReamining - 1;
                // setTimeRemaining(newTime);
                // newTime--;


                // clocks never stops, keeps on running
                // if (timeReamining < 0) clearInterval(timerID)

                // clocks stops at 2 cycles before it's supposed time which is 0
                if (timeReamining <= 0) {
                    setTimerStatus(false);
                    return clearInterval(timerID)
                } else {
                    return
                }
            }, 500)
        }
        return () => clearInterval(timerID)
    }, [!timerStatus, timeReamining])
 *
 *
 // useEffect(() => {

    //     if (timerStatus) {
    //         // timeConversion(2);
    //         timerID = setInterval(() => {
    //             // timeConversion(timeReamining || sessionTime * 60);
    //             timeConversion(timeReamining > 0 ? timeReamining : sessionTime * 60);
    //             // timeConversion(timeReamining);
    //             setTimer(`${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`)
    //             // timeReamining--;
    //             // if(timeReamining < 1) {
    //             //     setTimerStatus(false);
    //             // }
    //             // setTimer(`${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`)
    //             if (timeReamining == 0) {
    //                 setTimerStatus(false);
    //                 return clearInterval(timerID)
    //             }
    //             // timeConversion(timeReamining || sessionTime);
    //             // timeReamining--;
    //         }, 100)
    //     }
    //     return () => clearInterval(timerID)
    // }, [timerStatus, timeReamining])

    // let timeConversion = (time) => {
    //     // let inSeconds = timeReamining ? time : time * 60;
    //     let inSeconds = time;
    //     let secondsToDisplay = inSeconds % 60;
    //     let minutesRemaining = (inSeconds - secondsToDisplay) / 60;
    //     let minutesToDisplay = minutesRemaining % 60;

    //     // console.log(inSeconds, "sdasjd")
    //     // if(inSeconds < 1) {
    //     //     setTimerStatus(false);
    //     //     console.log(inSeconds, "sdasjd")
    //     // }

    //     inSeconds--;
    //     if(inSeconds != -1) {
    //         setTimeRemaining(inSeconds);
    //         setSeconds(secondsToDisplay)
    //         setMinutes(minutesToDisplay)
    //     } else {
    //         console.log(inSeconds, "sdasjd")
    //         clearInterval(timerID)
    //     }
    //     // setTimeRemaining(inSeconds);
    //     // setSeconds(secondsToDisplay)
    //     // setMinutes(minutesToDisplay)

    //     // setTimer(`${minutesToDisplay < 10 ? '0' + minutesToDisplay : minutesToDisplay} : ${secondsToDisplay < 10 ? '0' + secondsToDisplay : secondsToDisplay}`)
    // }
 */


/**
 * 
 * 
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
            // timeConversion(timeReamining || sessionTime);
            // timeConversion(2);
            // return timerStatus ? startTimer() : stopTimer();
        } else if (clickedItem == "reset") {
            setTimer("00:00");
            setSessionTime(25);
            setBreakTime(5);
            setTimeRemaining(0);
            setTimerStatus(false);
        }
    };

    /**
     * 
     * 
     Personally I would try to decouple:
        * timer-handling with start/pause/stop
        * and actual logic done on timer events
     

     useEffect(() => {
        if (timerStatus) {
            // timeConversion(2);
            timerID = setInterval(() => {
                timeConversion(timeReamining || sessionTime);
                // if(timeReamining != -1) {
                //     timeConversion(timeReamining || sessionTime);
                // }
                timeReamining--;
                // setTimer(timeReamining);
                // console.log(timeReamining, "??!!", timerStatus)
                // if(timeReamining < 0 && !timerStatus) {
                //     setTimeRemaining(0)
                //     setTimer("00:00");
                //     setTimerStatus(!timerStatus)
                // }
                // if (timeReamining < 0) clearInterval(timerID)
                if (timeReamining < 0) {
                    // setTimeRemaining(0)
                    // setTimer("00:00");
                    // setTimerStatus(!timerStatus)
                    return clearInterval(timerID)
                }
            }, 100)
        }
        return () => clearInterval(timerID)
    }, [!timerStatus, timeReamining])

        let timeConversion = (time) => {
        let inSeconds = timeReamining ? time : time * 60;
        // let inSeconds = time;
        let secondsToDisplay = inSeconds % 60;
        let minutesRemaining = (inSeconds - secondsToDisplay) / 60;
        let minutesToDisplay = minutesRemaining % 60;

        setTimeRemaining(inSeconds);
        setSeconds(secondsToDisplay)
        setMinutes(minutesToDisplay)

        // if (inSeconds) {
        //     setTimeRemaining(inSeconds);
        //     setSeconds(secondsToDisplay)
        //     setMinutes(minutesToDisplay)
        // } else {
        //     setTimeRemaining(0)
        //     setTimer("00:00");
        //     setTimerStatus(!timerStatus)
        // }
        // console.log(seconds, minutes, "is it??", secondsToDisplay, minutesToDisplay, timer)
        // setTimer(`${minutes} : ${seconds}`)
        setTimer(`${minutesToDisplay < 10 ? '0' + minutesToDisplay : minutesToDisplay} : ${secondsToDisplay < 10 ? '0' + secondsToDisplay : secondsToDisplay}`)
        // return { seconds: secondsToDisplay, minutes: minutesToDisplay, inSeconds }
    }
 *
 *
     useEffect(() => {
        if (timerStatus) {
            // timeConversion(2);
            timerID = setInterval(() => {
                timeConversion(timeReamining || 2);
                timeReamining--;
                // setTimer(timeReamining);
                if (timeReamining <= 0) clearInterval(timerID)
            }, 500)
        }

        return () => clearInterval(timerID)
    }, [timerStatus, timeReamining])

    // let tick = () => {
    //     timeConversion(2);
    //     timeReamining--;
    //     setTimer(timeReamining);
    //     if(timeReamining <= 0) clearInterval(timerID)
    // }

    useEffect(() => {
        setSessionTime(25);
        setBreakTime(5);
        setTimer('')
    }, [])

    // let tick = () => {
    //     // timeConversion(timeReamining || sessionTime * 60);
    //     if (timeReamining) {
    //         timeConversion(timeReamining || 2);
    //         setTimer(`${minutes} : ${seconds}`)
    //         timeReamining--;
    //         console.log('here!!', timeReamining)
    //     }
    //     if (timeReamining <= 110) stopTimer()
    // }

    let timeConversion = (time) => {
        let inSeconds = timeReamining ? time : time * 60;
        // let inSeconds = time;
        let secondsToDisplay = inSeconds % 60;
        let minutesRemaining = (inSeconds - secondsToDisplay) / 60;
        let minutesToDisplay = minutesRemaining % 60;
        setTimeRemaining(inSeconds);
        setSeconds(secondsToDisplay)
        setMinutes(minutesToDisplay)
        console.log(seconds, minutes, "is it??", secondsToDisplay, minutesToDisplay, timer)
        // setTimer(`${minutes} : ${seconds}`)
        setTimer(`${minutesToDisplay} : ${secondsToDisplay}`)
        // return { seconds: secondsToDisplay, minutes: minutesToDisplay, inSeconds }
    }
 *
 *
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
    // let [timerDisplay, setTimerDisplay] = useState(resetTimer);

    // const [clock, setClock] = useState(sessionLength * 60)
    // const [isClockRunning, setIsClockRunning] = useState(false)
    // const [isSessionCycle, setIsSessionCycle] = useState(true)
    // const [isCountdownFinished, setIsCountdownFinished] = useState(false)

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
            return timerStatus ? startTimer() : stopTimer();
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


     let startTimer = () => setInterval(tick, 1000)

     let stopTimer = () => clearInterval(startTimer);


     // const formatTime = (time) => {
     //     const min = Math.floor(time / 60)
     //     const sec = Math.floor(time % 60)
     //     return {
     //       min: min < 10 ? `0${min}` : min,
     //       sec: sec < 10 ? `0${sec}` : sec,
     //     }
     //   }
     //   useEffect(() => {
     //     if (clock === 0) {
     //       setIsSessionCycle(!isSessionCycle)
     //       setClock(isSessionCycle ? breakLength * 60 : sessionLength * 60)
     //       setIsCountdownFinished(true)
     //       audioRef.current.play()
     //       const timeout = setTimeout(() => {
     //         setIsCountdownFinished(false)
     //       }, 2000)
     //     }
     //     if (isClockRunning && !isCountdownFinished) {
     //       const clockInt = setInterval(() => {
     //         setClock(clock - 1)
     //       }, 1000)
     //       return () => clearInterval(clockInt)
     //     }
     //   }, [isClockRunning, clock, isCountdownFinished])

     useEffect(() => {

         if (timerStatus) {
             timeConversion(timeReamining || 2);
             startTimer();
         }
         // console.log('here!!', timeReamining)
     }, [timerStatus])

     useEffect(() => {
         setSessionTime(25);
         setBreakTime(5);
         setTimer('')
     }, [])

     let tick = () => {
         // timeConversion(timeReamining || sessionTime * 60);
         if (timeReamining) {
             timeConversion(timeReamining || 2);
             setTimer(`${minutes} : ${seconds}`)
             timeReamining--;
             console.log('here!!', timeReamining)
         }
         if (timeReamining <= 110) stopTimer()
     }

     let timeConversion = (time) => {
         let inSeconds = timeReamining ? time : time * 60;
         // let inSeconds = time;
         let secondsToDisplay = inSeconds % 60;
         let minutesRemaining = (inSeconds - secondsToDisplay) / 60;
         let minutesToDisplay = minutesRemaining % 60;
         setTimeRemaining(inSeconds);
         setSeconds(secondsToDisplay)
         setMinutes(minutesToDisplay)
         console.log(seconds, minutes, "is it??", secondsToDisplay, minutesToDisplay, timer)
         setTimer(`${minutes} : ${seconds}`)
         return { seconds: secondsToDisplay, minutes: minutesToDisplay, inSeconds }
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
             <button onClick={() => stopTimer()}>stop</button>
             {minutes} : {seconds}
         </div>
     )
 }

 export default Clock25Plus5

 *
 *
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
            // if (!timerStatus) {
            //     // timeConversion(sessionTime);
            //     // timeConversion(timeReamining || sessionTime * 60);
            //     // timeConversion(timeReamining || sessionTime);
            //     // setTimeRemaining(timeConversion(sessionTime).inSeconds)
            //     // console.log(timeConversion(sessionTime).inSeconds)
            //     stopTimer()
            //     startTimer()
            // } else {
            //     // stopTimer()
            //     console.log('stopped!!')
            // }
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


     let startTimer = () => setInterval(tick, 1000)

     let stopTimer = () => clearInterval(tick);

     useEffect(() => {
         startTimer()
     }, [timerStatus])

     let tick = () => {
         timeConversion(timeReamining || sessionTime * 60);
         // timeReamining--;
         // console.log(timeReamining, "<>", minutes, seconds);
         // setTimer(`${minutes} : ${seconds}`)
         // if (timeReamining <= 0) stopTimer()

         // stopTimer()
         if (timeReamining && timerStatus) {
             timeReamining--;
             console.log(timeReamining, "<>", minutes, seconds);
             setTimer(`${minutes} : ${seconds}`)
             if (timeReamining <= 0) stopTimer()
         }
         // else {
         //     stopTimer()
         // }
     }

     let timeConversion = (time) => {
         // let inSeconds = time * 60;
         let inSeconds = time;
         let secondsToDisplay = inSeconds % 60;
         let minutesRemaining = (inSeconds - secondsToDisplay) / 60;
         let minutesToDisplay = minutesRemaining % 60;
         setTimeRemaining(inSeconds);
         setSeconds(secondsToDisplay);
         setMinutes(minutesToDisplay);
         return { seconds: secondsToDisplay, minutes: minutesToDisplay, inSeconds }
     }
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