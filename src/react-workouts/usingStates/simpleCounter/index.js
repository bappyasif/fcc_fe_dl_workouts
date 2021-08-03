import React, { Component } from 'react'

class SimpleCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
        
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleIncrement() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    
    handleDecrement() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }))
    }

    handleReset() {
        this.setState({
            count: 0
        })
    }
    
    render() {
        return (
            <div>
                <button className='incr' onClick={this.handleIncrement}>increment</button>
                <button className='decr' onClick={this.handleDecrement}>decrement</button>
                <button className='reset' onClick={this.handleReset}>reset</button>
                <h4>{this.state.count}</h4>
            </div>
        )
    }
}

export default SimpleCounter
