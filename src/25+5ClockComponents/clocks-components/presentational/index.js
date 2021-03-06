import React from 'react'
import {FaPlay, FaStop, FaAngleUp, FaAngleDoubleUp, FaAngleDoubleDown, FaPlayCircle, FaPauseCircle} from 'react-icons/fa'
import {MdReplay, MdKeyboardArrowUp, MdVolumeUp} from "react-icons/md"

function PresentationalLogics(props) {
    return (
        <div className='clock-container'>
            <div id='top-section'>
                <div id='break-label'>
                    <div className='header-texts'>Break Session</div>
                    <div id='break-length'>{props.breakTime}</div>
                    <div className='controls-div'>
                        <button id='break-increment' onClick={props.handleClicks}><FaAngleDoubleUp /></button>
                        <button id='break-decrement' onClick={props.handleClicks}><FaAngleDoubleDown /></button>
                    </div>
                </div>
                <div id='session-label'>
                    <div className='header-texts'>Session Time</div>
                    <div id='session-length'>{props.sessionTime}</div>
                    <div className='controls-div'>
                        <button id='session-increment' onClick={props.handleClicks}><FaAngleDoubleUp /></button>
                        <button id='session-decrement' onClick={props.handleClicks}><FaAngleDoubleDown /></button>
                    </div>
                </div>
            </div>
            <div id='clock-section'>
                <div id='clock-top'>
                    <div id='timer-label'>Session Timer</div>
                    <div id='time-left'>{(!props.timer) ? props.sessionTime+":00" : props.timer}</div>
                </div>
                <div id='clock-controls'>
                    <button id='start_stop' onClick={props.handleClicks}>{showPlayOrPause(props)}</button>
                    <button id='reset' onClick={props.handleClicks}><MdReplay /></button>
                </div>
                <audio id='beep' src='https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg' autoPlay={props.isPlaying} />
            </div>
        </div>
    )
}

let showPlayOrPause = (props) => {
    if(props.breakTimerStatus) {
        return (!props.breakTimerStatus) ? <FaPlayCircle /> : <FaPauseCircle />
    } else {
        return (!props.timerStatus) ? <FaPlayCircle /> : <FaPauseCircle />
    }
}

export default PresentationalLogics
