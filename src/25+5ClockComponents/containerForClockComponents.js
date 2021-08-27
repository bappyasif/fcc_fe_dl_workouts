import React, { Component } from 'react'
import ClockContainer from './clocks-components/clockContainer'
import "./styles/index.css";

class ContainerForClockComponents extends Component {
    render() {
        return (
            <div>
                <ClockContainer />
            </div>
        )
    }
}

export default ContainerForClockComponents
