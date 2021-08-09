import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { Presentational } from './connectedExample';

// previously we created a Redux store to handle the messages array and created an action for adding new messages.

// The next step is to provide React access to the Redux store and the actions it needs to dispatch updates. React Redux provides its react-redux package to help accomplish these tasks.

// React Redux provides a small API with two key features: Provider and connect.

// The Provider is a wrapper component from React Redux that wraps our React app

// This wrapper then allows we to access the Redux store and dispatch functions throughout our component tree

// Provider takes two props, the Redux store and the child components of our app

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
};

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.message
            ];
        default:
            return state;
    }
};



const store = createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    submitMessage() {
        this.setState((state) => {
            const currentMessage = state.input;
            return {
                input: '',
                messages: state.messages.concat(currentMessage)
            };
        });
    }
    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input
                    value={this.state.input}
                    onChange={this.handleChange} /><br />
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {this.state.messages.map((message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
};

// const Provider = Provider
// Use this "AppWrapper" top level component to render the Provider from ReactRedux, and pass the Redux store as a prop
// Then render the DisplayMessages component as a child.
class AppWrapper extends React.Component {
    // Render the Provider below this line
    render() {
        return (
            <Provider store={store}>
                <DisplayMessages />
                <hr/>
                <Presentational />
                <hr />
                <Container/>
            </Provider>
        )
    }
    // Change code above this line
};

// Extract Local State into Redux
// As Redux is connected, we need to extract the state management out of the DisplayMessages component and into Redux instead of doing it from that Component

// React-Redux:

// Map State to Props

// The Provider component allows we to provide state and dispatch to our React components, but we must specify exactly what state and actions we want
// This way, we make sure that each component only has access to the state it needs
// we accomplish this by creating two functions: mapStateToProps() and mapDispatchToProps()
// In these functions, we declare what pieces of state we want to have access to and which action creators we need to be able to dispatch.
// Once these functions are in place, we'll see how to use the React Redux connect method to connect them to our components
// Behind the scenes, React Redux uses the store.subscribe() method to implement mapStateToProps()

let state = [];
let mapStateToProps = state => {
    return {
        messages: state
    }
}

// Map Dispatch to Props

// The mapDispatchToProps() function is used to provide specific action creators to our React components so they can dispatch actions against the Redux store
// It returns an object that maps dispatch actions to property names, which become component props
// However, instead of returning a piece of state, each property returns a function that calls dispatch with an action creator and any relevant action data
// we have access to this dispatch because it's passed in to mapDispatchToProps() as a parameter when we define the function, just like we passed state to mapStateToProps()
// Behind the scenes, React Redux is using Redux's store.dispatch() to conduct these dispatches with mapDispatchToProps()
// This is similar to how it uses store.subscribe() for components that are mapped to state
// const addMessage = (message) => {
//     return {
//         type: 'ADD',
//         message: message
//     }
// };
let mapDispatchToProps = dispatch => {
    return {
        submitNewMessage: message => dispatch(addMessage(message))
    }
}

// Connect Redux to React

// Now that we've written both the mapStateToProps() and the mapDispatchToProps() functions, we can use them to map state and dispatch to the props of one of our React components
// The connect method from React Redux can handle this task
// his method takes two optional arguments, mapStateToProps() and mapDispatchToProps()
// they are optional because we may have a component that only needs access to state but doesn't need to dispatch any actions, or vice versa
// To use this method, pass in the functions as arguments, and immediately call the result with your component, connect(mapStateToProps, mapDispatchToProps)(MyComponent)
// If we want to omit one of the arguments to the connect method, we pass null in its place.

// check out PresentationalComponent as an example

// Connect Redux to the Messages App
// Presentational Components are simply responsible for the presentation of UI and do this as a function of the props they receive. 
// By contrast, container components are connected to Redux, These are typically responsible for dispatching actions to the store and often pass store state to child components as props

const Container  =  connect(mapStateToProps, mapDispatchToProps)(DisplayMessages)

export default AppWrapper