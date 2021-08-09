import React from 'react';
import { connect, Provider } from "react-redux";
import { createStore } from "redux";

let SHOW = 'SHOW';

let showMessage = msg => {
    return {
        type: SHOW,
        msg
    }
}

let showReducer = (state=[], action) => {
    switch(action.type) {
        case SHOW:
            return [...state, action.msg]
    }
}

let store = createStore(showReducer);

class SimpleExample extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow =  this.handleShow.bind(this);
    }

    handleShow() {
        this.props.showMessage("It's Alive!!")
    }

    render() {
        return(
            <div>
                <h4>its here!!</h4>
                <button onClick={this.handleShow}>show message</button>
                {this.props.msg ? this.props.msg.map(msg=><li key={msg+Math.random()}>{msg}</li>) : ''}
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        msg: state
    }
}

let mapDispatchToProps = dispatch => {
    return {
        showMessage: msg => dispatch(showMessage(msg))
    }
}

let Container =  connect(mapStateToProps, mapDispatchToProps) (SimpleExample);

class SampleWrapper extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Container />
            </Provider>
        )
    }
}

export default SampleWrapper