import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import PresentationalLogics from "../presentational";
// import TimerComponent from '../timer/legacyIndex';
// let afterConversionInSeconds = 110;
let flagged = false;
function Clock25Plus5() {
  let [breakTime, setBreakTime] = useState(0);
  let [sessionTime, setSessionTime] = useState(25);
  let [timerStatus, setTimerStatus] = useState(false);
  // let [resetTimer, setResetTimer] = useState(25);
  let [timer, setTimer] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [timeReamining, setTimeRemaining] = useState(undefined);
  let [breakTimerStatus, setBreakTimerStatus] = useState(false);
  let [timerFlag, setTimerFlag] = useState(false);
  let [breakIncrement, setBreakIncrement] = useState(false);
  let [breakDecrement, setBreakDecrement] = useState(false);
  let [sessionIncrement, setSessionIncrement] = useState(false);
  let [sessionDecrement, setSessionDecrement] = useState(false);
  let [audioPlaying, setAudioPlaying] = useState(false);
  let [audioUrl, setAudioUrl] = useState(
    "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
  );

  let timerID, breakTimerID, flagged, timerLabel;
  let url = "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg";

  let playingAudio = () => {
    let audioElem = document.querySelector("#beep");
    audioElem.play();
  };

  let stoppingAudio = () => {
    let audioElem = document.querySelector("#beep");
    audioElem.pause();
    audioElem.currentTime = 0;
  };

  let handleClicks = (evt) => {
    let clickedItem =
      evt.target.id ||
      evt.target.parentNode.id ||
      evt.target.parentNode.parentNode.id;
    if (clickedItem == "break-increment") {
      setBreakTime(breakTime < 60 ? breakTime + 1 : breakTime);
    } else if (clickedItem == "break-decrement") {
      setBreakTime(breakTime > 1 ? breakTime - 1 : 1);
    } else if (clickedItem == "session-increment") {
      setSessionTime(sessionTime < 60 ? sessionTime + 1 : sessionTime);
    } else if (clickedItem == "session-decrement") {
      setSessionTime(sessionTime > 1 ? sessionTime - 1 : 1);
    } else if (clickedItem == "start_stop") {
      if (timerFlag) {
        setBreakTimerStatus(!breakTimerStatus);
      } else {
        setTimerStatus(!timerStatus);
      }
      //   toggleButtonsWithDisable();
    } else if (clickedItem == "reset") {
      // setTimer(25);
      // setTimer("00:00");
      timerLabel = document.querySelector("#timer-label");
      timerLabel.textContent = "Session Timer";
      setAudioPlaying(false);
      setTimer(0);
      setSessionTime(25);
      setBreakTime(5);
      setTimeRemaining(undefined);
      setTimerStatus(false);
      setBreakTimerStatus(false);
      setTimerFlag(false);
      toggleButtonsWithDisable();
      stoppingAudio();
    }
  };

  useEffect(() => {
    toggleButtonsWithDisable();
    timerLabel = document.querySelector("#timer-label");
    if (timerStatus) {
      timerID = setInterval(() => {
        tick();

        if (timeReamining == 0) {
          // timerLabel = document.querySelector('#timer-label');
          timerLabel.textContent = "break begins";
          setTimerFlag(true);
        //   setAudioPlaying(true);
          playingAudio();
          // setTimer(0);
          setTimer("00:00");
          setTimeRemaining(undefined);
          setTimerStatus(false);
          setBreakTimerStatus(true);
          return clearInterval(timerID);
        }
      }, 200);
    }
    return () => clearInterval(timerID);
  }, [!timerStatus, timeReamining]);

  useEffect(() => {
    timerLabel = document.querySelector("#timer-label");
    if (breakTimerStatus) {
      breakTimerID = setInterval(() => {
        tick();
        if (timeReamining == 0) {
          // timerLabel = document.querySelector('#timer-label');
          timerLabel.textContent = "break ends";
          setTimer("00:00");
          playingAudio();
          // setTimer(sessionTime < 10 ? '0' + sessionTime + ':00' : sessionTime + ':00');
          setBreakTimerStatus(false);
          setAudioPlaying(true);
          setTimerFlag(false);
          setTimerStatus(true);
          setTimeRemaining(undefined);
          clearInterval(breakTimerID);
        }
      }, 200);
    }
    return () => clearInterval(breakTimerID);
  }, [breakTimerStatus, timeReamining]);

  let tick = () => {
    timerLabel = document.querySelector("#timer-label");
    timerLabel.textContent = "Timer Begins";
    let timeObject = timeConversion();

    setTimer(
      `${timeObject.mins < 10 ? "0" + timeObject.mins : timeObject.mins}:${
        timeObject.secs < 10 ? "0" + timeObject.secs : timeObject.secs
      }`
    );
  };

  let toggleButtonsWithDisable = () => {
    console.log(timerStatus, breakTimerStatus, "what what?!");
    if (timerStatus || breakTimerStatus) {
      setBreakIncrement(true);
      setBreakDecrement(true);

      setSessionIncrement(true);
      setSessionDecrement(true);
    } else {
      setBreakIncrement(false);
      setBreakDecrement(false);

      setSessionIncrement(false);
      setSessionDecrement(false);
    }
  };

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

    setTimeRemaining(inSeconds - 1);
    // console.log(inSeconds, timeReamining, '??')

    return { secs: secondsToDisplay, mins: minutesToDisplay };
  };

  useEffect(() => {
    timerLabel = document.querySelector("#timer-label");
    // setSessionTime(25);
    setBreakTime(5);
    // setTimer("00:00");
    setTimer(
      sessionTime < 10 ? "0" + sessionTime + ":00" : sessionTime + ":00"
    );
  }, [sessionTime]);

  // useEffect(() => {
  //     // setSessionTime(25);
  //     setBreakTime(5);
  //     // setTimer("00:00");
  //     setTimer(sessionTime < 10 ? '0'+sessionTime+':00' : sessionTime+':00');
  // }, [])

  return (
    <div className="inner-container">
      <PresentationalLogics
        breakTime={breakTime}
        sessionTime={sessionTime}
        handleClicks={(evt) => handleClicks(evt)}
        timerStatus={timerStatus}
        breakTimerStatus={breakTimerStatus}
        timer={timer}
        breakIncrement={breakIncrement}
        breakDecrement={breakDecrement}
        sessionIncrement={sessionIncrement}
        sessionDecrement={sessionDecrement}
        isPlaying={audioPlaying}
      />
      {/* <button onClick={() => startTimer()}>start</button>
            <button onClick={() => stopTimer()}>stop</button> */}
      {minutes} : {seconds}
    </div>
  );
}

export default Clock25Plus5;
