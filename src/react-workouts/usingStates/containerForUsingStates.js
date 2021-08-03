import React, { Component } from 'react'
import ControlledForm from './controlledForm'
import ControlledInput from './controlledInput'
import PassingProps from '../usingProps/passProps'
import SettingState from './settingState'
import SimpleCounter from './simpleCounter'

class ContainerForUsingStates extends Component {
    render() {
        return (
            <div>
                <SettingState />
                <hr />
                <SimpleCounter />
                <hr />
                <ControlledInput />
                <hr />
                <ControlledForm />
                <hr />
            </div>
        )
    }
}

export default ContainerForUsingStates
