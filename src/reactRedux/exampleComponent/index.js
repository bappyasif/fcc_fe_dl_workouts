import React, { Component } from 'react'
import ManagingLocally from './managingLocally'

// first, we'll create a simple React component which allows we to input new text messages.

// These are added to an array that's displayed in the view

// Next, we'll create a Redux store and actions that manage the state of the messages array.

// Finally, we'll use react-redux to connect the Redux store with our component, thereby extracting the local state into the Redux store

class ExampleComponent extends Component {
    render() {
        return (
            <div>
                <DisplayMessages />
                <ManagingLocally />
            </div>
        )
    }
}

/**
 * Start with a DisplayMessages component. 
 * Add a constructor to this component and initialize it with a state 
 * that has two properties: input, that's set to an empty string, and messages, that's set to an empty array.
 */

class DisplayMessages extends React.Component {
    // Change code below this line
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            messages: []
        }
    }

    // Change code above this line
    render() {
        return <div />
    }
};

export default ExampleComponent
