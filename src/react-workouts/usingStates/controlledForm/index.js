import React, { Component } from 'react'

class ControlledForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input: '',
             submit: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({input: evt.target.value})
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({submit: this.state.input})
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button type='submit'>submit</button>
                </form>
                <p>{this.state.submit}</p>
            </div>
        )
    }
}

export default ControlledForm
