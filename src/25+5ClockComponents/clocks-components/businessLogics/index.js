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
  let [timer, setTimer] = useState(0);
  let [timeReamining, setTimeRemaining] = useState(undefined);
  let [breakTimerStatus, setBreakTimerStatus] = useState(false);
  let [timerFlag, setTimerFlag] = useState(false);
  let [audioPlaying, setAudioPlaying] = useState(false);
  let [isSessionTimeChanged, setIsSessionTimeChanged] = useState(false);

  let timerID, breakTimerID, flagged= true, timerLabel;

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
      setIsSessionTimeChanged(false);
    } else if (clickedItem == "session-decrement") {
      setSessionTime(sessionTime > 1 ? sessionTime - 1 : 1);
      setIsSessionTimeChanged(false);
    } else if (clickedItem == "start_stop") {
      if (timerFlag) {
        setBreakTimerStatus(!breakTimerStatus);
      } else {
        setTimerStatus(!timerStatus);
      }
    } else if (clickedItem == "reset") {
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
      stoppingAudio();
    }
  };

  useEffect(() => {
    timerLabel = document.querySelector("#timer-label");
    if (timerStatus) {
      timerID = setInterval(() => {
        tick();
        if (timeReamining == 0) {
          timerLabel.textContent = "break begins";
          setTimerFlag(true);
          playingAudio();
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
          timerLabel.textContent = "break ends";
          setTimer("00:00");
          playingAudio();
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

  let timeConversion = () => {
    let inSeconds;

    if (breakTimerStatus) {
      inSeconds = timeReamining ? timeReamining : breakTime * 60;
    } else {
      if(!isSessionTimeChanged) {
        setIsSessionTimeChanged(true);
        inSeconds = sessionTime * 60;
      } else {
        inSeconds = timeReamining ? timeReamining : sessionTime * 60;
      }
    }

    let secondsToDisplay = inSeconds % 60;

    let minutesRemaining = (inSeconds - secondsToDisplay) / 60;

    let minutesToDisplay = minutesRemaining % 60;

    setTimeRemaining(inSeconds - 1);

    return { secs: secondsToDisplay, mins: minutesToDisplay };
  };

  useEffect(() => {
    setBreakTime(5);
    setTimer(
      sessionTime < 10 ? "0" + sessionTime + ":00" : sessionTime + ":00"
    );
  }, [sessionTime]);

  return (
    <div className="inner-container">
      <PresentationalLogics
        breakTime={breakTime}
        sessionTime={sessionTime}
        handleClicks={(evt) => handleClicks(evt)}
        timerStatus={timerStatus}
        breakTimerStatus={breakTimerStatus}
        timer={timer}
        isPlaying={audioPlaying}
      />
    </div>
  );
}

export default Clock25Plus5;
