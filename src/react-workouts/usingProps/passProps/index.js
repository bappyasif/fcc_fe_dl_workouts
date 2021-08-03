import React, { Component } from 'react'

class PassingProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'CamperBot'
        }
    }
    
    render() {
        return (
            <div>
                <Navbar name={this.state.name}/>               
            </div>
        )
    }
}

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h4>Name: {this.props.name}</h4>
            </div>
        )
    }
}


export default PassingProps
