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
                    {/* <div id='timer-label'>{props.sessionTime < 10 ? '0'+props.sessionTime : props.sessionTime}:00</div> */}
                    <div id='timer-label'>{props.sessionTime}</div>
                    {/* <div id='time-left'>{props.timer < 10 ? '0'+props.timer+':00' : props.timer+':00'}</div> */}
                    <div id='time-left'>{props.timer}</div>
                </div>
                <div id='clock-controls'>
                    {/* <button id='start_stop' onClick={props.handleClicks}>{(!props.timerStatus || props.breakTimerStatus) ? <FaPlayCircle /> : <FaPauseCircle />}</button> */}
                    <button id='start_stop' onClick={props.handleClicks}>{showPlayOrPause(props)}</button>
                    <button id='reset' onClick={props.handleClicks}><MdReplay /></button>
                </div>
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
