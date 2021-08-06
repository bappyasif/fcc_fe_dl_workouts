import React, { Component } from 'react'
import StoreContainer from './store/storeContainer'

/** As applications grow in size and scope, managing shared data becomes much more difficult. Redux is defined as a "predictable state container for JavaScript apps" that helps ensure your apps work predictably, and are easier to test. */
/** Here we'll cover fundamentals of Redux stores, actions, reducers and middleware to manage data throughout our application. */
class ContainerForReduxWorkouts extends Component {
    render() {
        return (
            <div>
                <StoreContainer />                
            </div>
        )
    }
}

export default ContainerForReduxWorkouts
