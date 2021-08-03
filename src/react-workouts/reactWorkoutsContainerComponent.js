import React, { Component } from 'react'
import ContainerForUsingProps from './usingProps/containerForUsingProps'
import ContainerForUsingStates from './usingStates/containerForUsingStates'

export class ReactWorkoutsContainerComponent extends Component {
    render() {
        return (
            <div>
                <h4>React Playground!!</h4>
                <ContainerForUsingStates />
                <ContainerForUsingProps />
            </div>
        )
    }
}

export default ReactWorkoutsContainerComponent
