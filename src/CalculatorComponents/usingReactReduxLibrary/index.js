import React from "react";
import { Component } from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { additionReducer, divisionReducer, multiplicationReducer, subtractionReducer } from "./reducers";
import { combinedStore } from "./stores";
import PresentationalLogic from '../usingReact/presentational';

class CalculatorComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            display: '',
            calculation: 0,
            firstOperand: '',
            secondOperand: '',
            operator: [],
            decimalFlag: false,
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleFocusOnDisplay = this.handleFocusOnDisplay.bind(this);
        this.handleDigits = this.handleDigits.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
    }

    handleDisplay = (evt) => {
        console.log(evt.target.value)
    }
    handleClear = () => {}
    handleFocusOnDisplay = () => {}
    handleDigits(evt) {
        console.log(evt.target.value);
        if(evt.target.value == '.') {
            if(!this.state.decimalFlag) {
                console.log(this.state.display + evt.target.value, '!!')
                this.setState({ 
                    display: this.state.display == '0.'
                    ? '' + evt.target.value 
                    : this.state.display + evt.target.value, 
                    decimalFlag: true 
                })
            }
        } else {
            this.setState({ 
                display: this.state.display == '' || this.state.display == 0
                ? '' + evt.target.value
                : this.state.display + evt.target.value 
            })
        }
    }
    handleEquals = () => {}

    render() {
        console.log(this.props)
        return (
            <div>
                <PresentationalLogic
                    handleDisplayChange={this.handleDisplay}
                    display={this.state.display}
                    calculation={this.state.calculation}
                    clear={this.handleClear}
                    digits={this.handleDigits}
                    equals={this.handleEquals}
                />
            </div>
        )
    }
}

let mapStateToProps = (state, ownProps) => {
    console.log(ownProps, 'here!!')
    return {
        display: state
    }
}

let mapDispatchToProps = (dispatch, ownProps) => {
    let choosedDispatch = ownProps.ADD 
    ? (v1, v2) => dispatch(additionReducer(v1, v2)) 
    : ownProps.SUBTRACT 
    ? (v1, v2) => dispatch(subtractionReducer(v1, v2)) 
    : ownProps.MULTIPLY 
    ? (v1, v2) => dispatch(multiplicationReducer(v1, v2)) 
    : (v1, v2) => dispatch(divisionReducer(v1, v2))

    return {
        handleOperations: choosedDispatch
    }
}

let WrapperComponent = connect(mapStateToProps, mapDispatchToProps) (CalculatorComponent);

export class CalculatorWithReactRedux extends React.Component {
    render() {
        return(
            <Provider store={combinedStore}>
                <h4>using react redux library</h4>
                <WrapperComponent />
            </Provider>
        )
    }
}
