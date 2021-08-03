import React, { Component } from 'react'

class PassingCallbacks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             inputValue: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({inputValue: evt.target.value})
    }
    
    render() {
        return (
            <div>
                <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
                <RenderInput input={this.state.inputValue} />
            </div>
        )
    }
}

class GetInput extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h4>get input:</h4>
                <input 
                    value={this.props.input} 
                    onChange={this.props.handleChange} 
                />
            </div>
        )
    }
}

class RenderInput extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h4>input rendered:</h4>
                <p>{this.props.input}</p>
            </div>
        )
    }
}

export default PassingCallbacks
