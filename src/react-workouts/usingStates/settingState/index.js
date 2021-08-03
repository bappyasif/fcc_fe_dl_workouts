import React, { Component } from 'react'

class SettingState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'initial state',
            text: "hello",
            visibility: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClick02 = this.handleClick02.bind(this);
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    handleClick() {
        this.setState({name: 'React Rocks!!'})
    }
    
    handleClick02() {
        this.setState({text: 'You Clicked!!'})
    }

    toggleVisibility() {
        this.setState(prevState => ({
            visibility: !prevState.visibility
        }))
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>click here!!</button>
                <button onClick={this.handleClick02}>click here!!</button>
                <h4>{this.state.name}</h4>
                <h4>{this.state.text}</h4>
                <button onClick={this.toggleVisibility}>toggle here!!</button>
                {this.state.visibility ? <h4>now you see me!!</h4> : <h4>now you dont!!</h4>}
            </div>
        )
    }
}

export default SettingState