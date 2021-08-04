import React, { Component } from 'react'
import PassingCallbacks from './passCallbacks'
import PassingProps from './passProps'

class ContainerForUsingProps extends Component {
    render() {
        return (
            <div>
                <PassingProps />
                <hr />
                <PassingCallbacks />
                <hr />
            </div>
        )
    }
}

export default ContainerForUsingProps
