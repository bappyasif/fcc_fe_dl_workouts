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
            decimalFlag: false,
            tokenizedStack: []
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleFocusOnDisplay = this.handleFocusOnDisplay.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
    }

    handleDisplay(evt) {
        if (evt.target.value == 0) {
            this.setState({ display: '' })
        } else if (evt.target.value == '0.') {
            this.setState({ display: '.' })
        } else {
            this.setState({ display: this.state.display ? this.state.display + evt.target.value : evt.target.value })
        }
    }

    handleClear(evt) { this.setState({ display: 0, v1: 0, v2: 0, calculation: 0, operator: [] }) }

    handleFocusOnDisplay(evt) {
        this.setState({ display: '' })
    }

    handleEquals(evt) {
        this.tokenizeEquation();
        // this.extractTokensFromStack()
        // this.calculateExpressionFromStack();
        // this.setState({ display: this.state.calculation, v1: 0, v2: 0, calculation: 0, operator: [] })

        // let postfixExpr = infixToPostFix('2+3-6*5/7');

    }

    tokenizeEquation() {
        // console.log(this.state.display, "??")
        // let tokenized = this.state.display.split(/[+|\-|*|\/]/)
        // this.setState({ tokenizedStack: tokenized })
        // console.log(tokenized, "isit")

        let tokenized =  this.readjustUserProvidedExpression();

        let postfixExpr = infixToPostFix(tokenized);
        let evaluatePostfix = postfixEvaluator(postfixExpr);
        console.log(evaluatePostfix, "<><>")
        this.setState({ display: evaluatePostfix })
    }

    readjustUserProvidedExpression() {
        let test = [];
        let temp = '';
        for (let idx = 0; idx <= this.state.display.length - 1; idx++) {
            if (!["+", "-", "*", "/"].includes(this.state.display[idx])) {
                temp += this.state.display[idx];
                console.log("if", this.state.display[idx], temp )
            } else {
                console.log("else")
                test = test.concat(temp, this.state.display[idx]);
                temp = ''
            }

            if (idx == this.state.display.length - 1) {
                test.push(temp);
                temp = ''
            }
        }
        console.log(test, "whata!!")
        return test
    }

    extractTokensFromStack() {
        console.log(this.state.tokenizedStack,)
        let a = this.state.tokenizedStack.pop();
        let op = this.state.tokenizedStack.pop();
        let b = this.state.tokenizedStack.pop();
        console.log(a, op, b, this.state.tokenizedStack.length, "after!!")
        // let calculation = this.calculateStack(a,b, op)
        // console.log(calculation)
        // this.setState({calculation: calculation})
        return [a, b, op]
    }

    calculateStack(operand1, operand2, operator) {
        let calculation = 0;
        if (operator) {
            switch (operator) {
                case "+":
                    calculation = Number(operand1) + Number(operand2)
                    return calculation
                case "-":
                    calculation = Number(operand1) - Number(operand2)
                    return calculation
                case "*":
                    calculation = Number(operand1) * Number(operand2)
                    return calculation
                case "/":
                    calculation = Number(operand1) / Number(operand2 ? operand2 : alert('no dividing by zero!!'))
                    return calculation
                default: return alert('somethings wrong!!')
            }
        }
    }


    componentDidMount() {
        this.handleFocusOnDisplay();
    }

    componentDidUpdate(prevProps, prevState) {
        // this.calculateExpressionFromStack();
        // // console.log(prevState.tokenizedStack.length == this.state.tokenizedStack.length, prevState.tokenizedStack.length, this.state.tokenizedStack.length)
        // if (prevState.tokenizedStack.length != this.state.tokenizedStack.length) {

        //     while (this.state.tokenizedStack.length >= 3) {
        //         let [a, b, op] = [...this.extractTokensFromStack()]
        //         let calculation = this.calculateStack(a, b, op)
        //         console.log(calculation, "??")
        //         this.setState({ calculation: calculation, tokenizedStack: this.state.tokenizedStack.push(calculation) })
        //         console.log("here!!", prevState.tokenizedStack.length, this.state.tokenizedStack.length, this.state.calculation, a, b, op, this.state.calculation)

        //         if (this.state.tokenizedStack.length <= 1) {
        //             alert(this.state.tokenizedStack[0])
        //         }
        //     }
        // } else if (this.state.tokenizedStack.length == 2) {
        //     alert("wrong expression!!")
        // }
        // this.extractTokensFromStack()
    }

    render() {
        // let postfixExpr = infixToPostFix('2+3-6*5/7');
        // let evaluatePostfix = postfixEvaluator(postfixExpr);
        // console.log(evaluatePostfix, "here!!", postfixExpr)
        return (
            <div>
                <h4>expression based calculator implementation</h4>
                <PresentationalLogic
                    changeDisplay={this.handleDisplay} display={this.state.display} clear={this.handleClear} equals={this.handleEquals} />
            </div>
        )
    }
}

export default ExpresssionBasedCalculatorImplementation
