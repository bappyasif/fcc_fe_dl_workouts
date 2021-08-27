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
                        <div id='break-increment'><FaAngleDoubleUp /></div>
                        <div id='break-decrement'><FaAngleDoubleDown /></div>
                    </div>
                </div>
                <div id='session-label'>
                    <div className='header-texts'>Session Time</div>
                    <div id='session-length'>{props.sessionTime}</div>
                    <div className='controls-div'>
                        <div id='session-increment'><FaAngleDoubleUp /></div>
                        <div id='session-decrement'><FaAngleDoubleDown /></div>
                    </div>
                </div>
            </div>
            <div id='clock-section'>
                <div id='clock-top'>
                    <div id='timer-label'>{props.sessionTime}</div>
                    <div id='time-left'>25:00</div>
                </div>
                <div id='clock-controls'>
                    <div id='start_stop'><FaPlayCircle /> <FaPauseCircle /></div>
                    <div id='reset'><MdReplay /></div>
                </div>
            </div>
        </div>
    )
}

export default PresentationalLogics
