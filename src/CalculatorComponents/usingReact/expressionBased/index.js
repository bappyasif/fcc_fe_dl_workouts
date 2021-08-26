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
        } else if(evt.target.value.includes('.')) {
            if(!this.state.decimalFlag) {
                this.setState({ display: this.state.display+evt.target.value, decimalFlag: true })
            }
        } else if(["+", "-", "*", "/"].includes(evt.target.value)) {
            if(this.state.lastOperator == evt.target.value) {
                console.log('same operator')
                this.setState({ display: this.state.display, decimalFlag: false, lastOperator: evt.target.value })
            } else {
                console.log('different operator')
                let test = this.state.display.split('').pop()
                if(!/\d/.test(test)) {
                    if(test == '*' && evt.target.value == '-') {
                        console.log("here!!")
                        this.setState({display: this.state.display + evt.target.value, decimalFlag: false, lastOperator: test, operatorFlag: true})
                    } else {
                        if(evt.target.value == this.state.display[this.state.display.length -1]) {
                            this.setState({display: this.state.display, decimalFlag: false, lastOperator: evt.target.value}) 
                        } else if(this.state.operatorFlag && ["+", "-", "*", "/"].includes(evt.target.value)) {
                            // let check = this.state.display.split('')[this.state.display.length - 2]
                            // console.log(evt.target.value, test, check, "what now?!")
                            this.setState({display: this.state.display.substring(0, this.state.display.length-2) + evt.target.value, decimalFlag: false, lastOperator: evt.target.value}) 
                            // alert(">?>?")
                        } else  {
                            this.setState({display: this.state.display.substring(0, this.state.display.length-1) + evt.target.value, decimalFlag: false, lastOperator: evt.target.value})
                        }
                        // this.setState({display: this.state.display.substring(0, this.state.display.length-1) + evt.target.value, decimalFlag: false, lastOperator: evt.target.value})
                    }
                    // this.setState({display: this.state.display.substring(0, this.state.display.length-1) + evt.target.value, decimalFlag: false, lastOperator: evt.target.value})
                    // console.log("testing: ", test, evt.target.value, this.state.display);
                } else {
                    this.setState({ display: this.state.display + evt.target.value, decimalFlag: false, lastOperator: '' }) 
                }
            }
        } else if (evt.target.value == '0.') {
            this.setState({ display: '.' })
        } else {
            // this.setState({ display: this.state.display ? this.state.display + evt.target.value : evt.target.value })
            this.setState({ display: this.state.display + evt.target.value, lastOperator: '' })
        }
    }

    handleDirectUserInput(evt) {
        this.setState({ display: evt.target.value })
    }

    handleClear(evt) { this.setState({ display: 0, v1: 0, v2: 0, calculation: 0, operator: [], decimalFlag: false }) }

    handleFocusOnDisplay(evt) {
        this.setState({ display: '' })
    }

    handleEquals(evt) {
        this.tokenizeEquation();
    }

    tokenizeEquation() {
        let tokenized = this.readjustUserProvidedExpressionForTokenization();
        let postfixExpr = infixToPostFix(tokenized);
        let evaluatePostfix = postfixEvaluator(postfixExpr)[0];
        this.setState({ display: evaluatePostfix.toString(), lastOperator: '' })
    }

    readjustUserProvidedExpressionForTokenization() {
        let test = [];
        let temp = '';
        let streamLineOfOps = '';
        for (let idx = 0; idx <= this.state.display.length - 1; idx++) {
            if (!["+", "-", "*", "/"].includes(this.state.display[idx])) {
                temp += this.state.display[idx];
                // console.log("if", this.state.display[idx], temp )
            } else {
                // console.log("else")
                // streamLineOfOps += this.state.display[idx]
                // if(streamLineOfOps.length > 1 && streamLineOfOps[streamLineOfOps.length-1])
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

    // sanitizeDisplay() {
    //     let check = [];
    //     let checkFlag = false;
    //     let str = ''
    //     for(let i=0; i <= this.state.display.length - 1; i++) {
    //         if()
    //     }
    // }

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
