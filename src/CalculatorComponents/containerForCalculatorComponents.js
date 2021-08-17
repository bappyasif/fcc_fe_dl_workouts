import React, { Component } from 'react'
import CalculatorWithReactLibrary from './usingReact'

class ContainerForCalculatorComponents extends Component {
    render() {
        return (
            <div>
                <CalculatorWithReactLibrary />
            </div>
        )
    }
}

export default ContainerForCalculatorComponents
