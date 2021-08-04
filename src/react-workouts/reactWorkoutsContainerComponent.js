import React, { Component } from 'react'
import ContainerForLifecycleMethods from './usingLifecycles/containerForLifecycleMethods'
import ContainerForUsingProps from './usingProps/containerForUsingProps'
import ContainerForUsingStates from './usingStates/containerForUsingStates'
import ContainerForStylesComponents from './usingStyles/ContainerForStylesComponents'

export class ReactWorkoutsContainerComponent extends Component {
    render() {
        return (
            <div>
                <h4>React Playground!!</h4>
                <ContainerForUsingStates />
                <ContainerForUsingProps />
                <ContainerForLifecycleMethods />
                <ContainerForStylesComponents />
            </div>
        )
    }
}

export default ReactWorkoutsContainerComponent
