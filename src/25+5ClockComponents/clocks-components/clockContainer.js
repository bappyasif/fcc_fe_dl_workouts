import React, { Component } from 'react'
import Clock25Plus5 from './businessLogics'
import AnotherCountdownTimerExample from './timer/anotherExample'
import CountdownApp from './timer/exampleCountdown'

class ClockContainer extends Component {
    render() {
        return (
            <div className='outer-container'>
                <h4>Clock25Plus5</h4>
                <Clock25Plus5 />
                {/* <CountdownApp /> */}
                {/* <AnotherCountdownTimerExample /> */}
            </div>
        )
    }
}

export default ClockContainer
