import React, { Component } from 'react'

class CompDidMount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             activeUsers: null,
             message: ''
        }

        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleEnter() {
        this.setState(prevState => ({message: prevState.message+'you pressed ENTER key'}))
    }

    handleKeyPress(evt) {
        if(evt.keyCode == 13) this.handleEnter()
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({activeUsers: 1234})
        }, 2000)

        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }
    
    render() {
        return (
            <div>
                <h4>Active Users: {this.state.activeUsers}</h4>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default CompDidMount
