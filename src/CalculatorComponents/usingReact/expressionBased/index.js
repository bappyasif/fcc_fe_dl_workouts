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
        let displayContent = '', decimalFlag, lastOp, operatorFlag;
        // if user input started with zero
        if (this.state.display == '0') {
            displayContent = ''+evt.target.value
            this.setState({ display: displayContent })
        // if user input started with decimal
        } else if(evt.target.value.includes('.')) {
            if(!this.state.decimalFlag) {
                displayContent = this.state.display+evt.target.value;
                decimalFlag = true;
                this.manageDisplay(displayContent, decimalFlag)
            }
        // if user input includes any operator
        } else if(["+", "-", "*", "/"].includes(evt.target.value)) {
            if(this.state.lastOperator == evt.target.value) {
                console.log('same operator')
                displayContent = this.state.display;
                decimalFlag = false;
                lastOp = evt.target.value
                this.manageDisplay(displayContent, decimalFlag, lastOp);
            } else {
                console.log('different operator')
                let test = this.state.display.split('').pop()
                if(!/\d/.test(test)) {
                    // if user input has a multiplication operator and a minus operator after that making that multiplication for a negative number
                    if(test == '*' && evt.target.value == '-') {
                        displayContent = this.state.display + evt.target.value;
                        decimalFlag = false,
                        lastOp = test,
                        operatorFlag = true;
                        this.manageDisplay(displayContent, decimalFlag, lastOp, operatorFlag)
                    } else {
                        // if user input operator is same as previously entered operator
                        if(evt.target.value == this.state.display[this.state.display.length -1]) {
                            displayContent = this.state.display;
                            decimalFlag = false;
                            lastOp = evt.target.value;
                            this.manageDisplay(displayContent, decimalFlag, lastOp)
                        // if user input operator has consecutive operators in between operands, and last entered operator is different than previously entered operator, so replacing old operator with newly added operator
                        } else if(this.state.operatorFlag && ["+", "-", "*", "/"].includes(evt.target.value)) {
                            displayContent = this.state.display.substring(0, this.state.display.length-2)+ evt.target.value;
                            decimalFlag = false;
                            lastOp = evt.target.value;
                            this.manageDisplay(displayContent, decimalFlag, lastOp)
                        // if user input has consecutive operators after a multiplication operator
                        } else  {
                            displayContent = this.state.display.substring(0, this.state.display.length-1) + evt.target.value;
                            decimalFlag = false;
                            lastOp = evt.target.value
                            this.manageDisplay(displayContent, decimalFlag, lastOp)
                        }
                    }
                // if user input is an operand
                } else {
                    displayContent = this.state.display + evt.target.value;
                    decimalFlag = false;
                    lastOp = '';
                    this.manageDisplay(displayContent, decimalFlag, lastOp);
                }
            }
        // if user input starts with 0.
        } else if (evt.target.value == '0.') {
            this.setState({ display: '.' })
        //  if user input is just a normal input, default behavior
        } else {
            this.setState({ display: this.state.display + evt.target.value, lastOperator: '' })
        }
    }

    manageDisplay(display, decimalFlag, lastOperator, operatorFlag) {
        this.setState({display, decimalFlag, lastOperator, operatorFlag})
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
