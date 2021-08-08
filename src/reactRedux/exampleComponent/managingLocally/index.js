import React, { Component } from 'react'

class ManagingLocally extends Component {
    render() {
        return (
            <div>
                <DisplayMessages />
            </div>
        )
    }
}

/**
 * First, in the render() method, have the component render an input element, button element, and ul element. 
 * When the input element changes, it should trigger a handleChange() method. 
 * Also, the input element should render the value of input that's in the component's state. 
 * The button element should trigger a submitMessage() method when it's clicked.
 */

class DisplayMessages extends React.Component {
    // Change code below this line
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            messages: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    handleChange(evt) {
        this.setState({ input: evt.target.value });
    }

    submitMessage() {
        this.setState({
            messages: this.state.messages.concat(this.state.input),
            input: ''
        })
    }

    // Change code above this line
    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                { /* Render an input, button, and ul below this line */}
                <input value={this.state.input} onChange={this.handleChange} />
                <button onClick={this.submitMessage}>submit</button>
                <ul>
                    {this.state.messages.map(msg => <li key={msg}>{msg}</li>)}
                </ul>
                { /* Change code above this line */}
            </div>
        );
    }
};

export default ManagingLocally
