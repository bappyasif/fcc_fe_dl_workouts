import React, { Component } from 'react'
import Clock25Plus5 from './businessLogics'

class ClockContainer extends Component {
    render() {
        return (
            <div className='outer-container'>
                <h4>Clock25Plus5</h4>
                <Clock25Plus5 />
            </div>
        )
    }
}

export default ClockContainer
