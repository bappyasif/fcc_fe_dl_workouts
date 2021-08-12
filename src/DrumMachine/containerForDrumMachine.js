import React, { Component } from 'react'
import DrumMachineUsingReact from './usingReact'

class ContainerForDrumMachine extends Component {
    render() {
        return (
            <div className='drum-machine-outer-container'>
                <h4>Drum Machine</h4>
                <DrumMachineUsingReact />
            </div>
        )
    }
}

export default ContainerForDrumMachine
