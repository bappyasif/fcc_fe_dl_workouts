// Extract Local State into Redux

import React from "react";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";

// As Redux is connected, we need to extract the state management out of the DisplayMessages component and into Redux instead of doing it from that Component

// In the Presentational component, first, remove the messages property in the local state

// These messages will be managed by Redux.

// Next, modify the submitMessage() method so that it dispatches submitNewMessage() from this.props, and pass in the current message input from local state as an argument

// Because we removed messages from local state, remove the messages property from the call to this.setState() here as well

// Finally, modify the render() method so that it maps over the messages received from props rather than state.

// our component still tracks user input locally in its own state.

// we can see how Redux provides a useful state management framework on top of React

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
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

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    //   messages: []
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
    this.setState((state) => ({
      input: '',
    //   messages: state.messages.concat(state.input)
    }));
    this.props.submitNewMessage(this.state.input)
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {
        //   this.state.messages.map( (message, idx) => {
        //       return (
        //          <li key={idx}>{message}</li>
        //       )
        //     })
        this.props.messages.map( (message, idx) => {
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
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper02 extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
export default AppWrapper02;