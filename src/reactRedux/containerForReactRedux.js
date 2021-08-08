import React, { Component } from 'react'
import ExampleComponent from './exampleComponent'

// React is a view library that you provide with data, then it renders the view in an efficient, predictable way. 

// Redux is a state management framework that we can use to simplify the management of our application's state.

// Typically, in a React Redux app, we create a single Redux store that manages the state of our entire app. 

// our React components subscribe to only the pieces of data in the store that are relevant to their role.

// Then, we dispatch actions directly from React components, which then trigger store updates

// Although React components can manage their own state locally, when we have a complex app, it's generally better to keep the app state in a single location with Redux

// There are exceptions when individual components may have local state specific only to them. 

//  because Redux is not designed to work with React out of the box, we need to use the react-redux package

// It provides a way for us to pass Redux state and dispatch to our React components as props.

class ContainerForReactRedux extends Component {
    render() {
        return (
            <div>
                <h4>react-redux</h4>
                <ExampleComponent />
            </div>
        )
    }
}

export default ContainerForReactRedux
