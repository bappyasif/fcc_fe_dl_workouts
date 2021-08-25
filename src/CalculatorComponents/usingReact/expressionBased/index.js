import React, { Component } from 'react'
import { PresentationalLogic } from './presentationalLogic';
// import PresentationalLogic from '../presentational';
import '../../styling/anotherIndex.css';
import { infixToPostFix } from './infixToPostFix';
import { postfixEvaluator } from './postfixEvaluator';

class ExpresssionBasedCalculatorImplementation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            display: '??',
            calculation: 0,
            firstOperand: '',
            secondOperand: '',
            operator: [],
            lastOperator: '',
            decimalFlag: false,
            operatorFlag: false,
            tokenizedStack: []
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleFocusOnDisplay = this.handleFocusOnDisplay.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
        this.handleDirectUserInput = this.handleDirectUserInput.bind(this);
    }

    handleDisplay(evt) {
        if (this.state.display == '0') {
            this.setState({ display: ''+evt.target.value })
        } else if(evt.target.value == '.') {
            console.log('here!!')
            if(!this.state.decimalFlag) {
                this.setState({ display: this.state.display+evt.target.value, decimalFlag: true })
            }
        } else if(["+", "-", "*", "/"].includes(evt.target.value)) {
            if(this.state.lastOperator == evt.target.value[evt.target.value.length - 1]) {
                this.setState({ display: this.state.display, decimalFlag: false, operatorFlag: true })
            } else {
                this.setState({ display: this.state.display + evt.target.value, decimalFlag: false, lastOperator: evt.target.value[evt.target.value.length - 1] })
                // this.setState({ display: evt.target.value.substr(0, evt.target.value.length-1), decimalFlag: false, lastOperator: evt.target.value[evt.target.value.length - 1] })
            }
        } else if (evt.target.value == '0.') {
            this.setState({ display: '.' })
        } else {
            // this.setState({ display: this.state.display ? this.state.display + evt.target.value : evt.target.value })
            this.setState({ display: this.state.display + evt.target.value })
        }
    }

    handleDirectUserInput(evt) {
        this.setState({ display: evt.target.value })
    }

    handleClear(evt) { this.setState({ display: 0, v1: 0, v2: 0, calculation: 0, operator: [] }) }

    handleFocusOnDisplay(evt) {
        this.setState({ display: '' })
    }

    handleEquals(evt) {
        this.tokenizeEquation();
    }

    tokenizeEquation() {
        let tokenized = this.readjustUserProvidedExpressionForTokenization();
        let postfixExpr = infixToPostFix(tokenized);
        let evaluatePostfix = postfixEvaluator(postfixExpr);
        this.setState({ display: evaluatePostfix })
    }

    readjustUserProvidedExpressionForTokenization() {
        let test = [];
        let temp = '';
        for (let idx = 0; idx <= this.state.display.length - 1; idx++) {
            if (!["+", "-", "*", "/"].includes(this.state.display[idx])) {
                temp += this.state.display[idx];
                // console.log("if", this.state.display[idx], temp )
            } else {
                // console.log("else")
                test = test.concat(temp, this.state.display[idx]);
                temp = ''
            }

            if (idx == this.state.display.length - 1) {
                test.push(temp);
                temp = ''
            }
        }

        return test
    }

    componentDidMount() {
        this.handleFocusOnDisplay();
    }

    componentDidUpdate() {
        console.log(this.state, 'updated?!')
    }

    render() {
        return (
            <div>
                <h4>expression based calculator implementation</h4>
                <PresentationalLogic
                    changeDisplay={this.handleDisplay} display={this.state.display} clear={this.handleClear} equals={this.handleEquals} handleInput={this.handleDirectUserInput} />
            </div>
        )
    }
}

export default ExpresssionBasedCalculatorImplementation
