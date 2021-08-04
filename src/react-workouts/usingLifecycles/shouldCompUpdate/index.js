import React, { Component } from 'react'

class ShouldCompUpdate extends Component {
    render() {
        return (
            <div>
                <ControllerComponent />
            </div>
        )
    }
}

class AddValue extends Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('should update?!');
        return nextProps.value % 2 == 0;
        // return this.props.value % 2;
        // return true
    }

    componentDidUpdate() {
        console.log('component re-rendered!!');
    }

    render() {
        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}



class ControllerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0
        }

        this.addValue = this.addValue.bind(this);
    }

    addValue() {
        this.setState(prevState => ({
            value: prevState.value + 1
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.addValue}>add value</button>
                <AddValue value={this.state.value} />
            </div>
        )
    }
}

export default ShouldCompUpdate
