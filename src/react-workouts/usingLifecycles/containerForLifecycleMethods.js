import React, { Component } from 'react'
import CompDidMount from './compDidMount'
import ShouldCompUpdate from './shouldCompUpdate'

class ContainerForLifecycleMethods extends Component {
    render() {
        return (
            <div>
                <CompDidMount />
                <hr />
                <ShouldCompUpdate />
                <hr />
            </div>
        )
    }
}

export default ContainerForLifecycleMethods
