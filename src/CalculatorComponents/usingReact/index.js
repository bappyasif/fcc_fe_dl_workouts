import React, { Component } from 'react'
import '../styling/index.css';
import PresentationalLogic from './presentational';

class CalculatorWithReactLibrary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            display: '',
            calculation: 0,
            firstOperand: '',
            secondOperand: '',
            operator: [],
            consecOps: 0,
            decimalFlag: false,
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleFocusOnDisplay = this.handleFocusOnDisplay.bind(this);
        this.handleDigits = this.handleDigits.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
    }

    calculateValues(v1, v2, op) {
        console.log('here!!', v1, v2)
        switch (op || this.state.operator[this.state.operator.length-1]) {
            case '+':
                // return op ? Number(this.state.calculation) + Number(this.state.display) : Number(this.state.firstOperand) + Number(this.state.display) 
                // console.log('here!!', v1, v2)
                // this.setState({operator: this.state.operator.splice(0, this.state.operator.length - 2)})
                return Number(v1) + Number(v2);
            // return Number(this.state.firstOperand) + Number(this.state.display);
            case '-':
                return Number(v1) - Number(v2);
            case '*':
                return Number(v1) * Number(v2);
            case '/':
                return Number(v1) / Number(v2);
            case '=':
                console.log('==')
                return this.state.calculation
            default: false;
        }
        // this.setState(prevState => ({operator: prevState.pop()}))
        // this.setState({operator: this.state.operator.splice(0, this.state.operator.length - 2)})
    }

    showError() {
        alert('no dividing by zero');
        this.setState({ display: this.state.firstOperand })
    }

    handleEquals(evt) {
        this.setState(prevState => {
            return {
                display: this.calculateValues(prevState.calculation ? prevState.calculation : prevState.firstOperand, prevState.display),
                calculation: this.calculateValues(prevState.calculation ? prevState.calculation : prevState.firstOperand, prevState.display),
                firstOperand: 0,
                decimalFlag: false
            }
        })
    }

    chainedCalculations(evt) {
        console.log(this.state, "chained!!")
    }

    handleDisplay(evt) {
        if (typeof evt.target.value != 'number') {
            console.log(evt.target.value)
            // console.log(consecOps)
            this.setState({operator: [...this.state.operator, evt.target.value], display: 0})
        }
        if(!this.state.firstOperand) {
            this.setState({firstOperand: this.state.display})
        }
        if(this.state.firstOperand) {
            // this.setState({calculation: this.calculateValues(this.state.firstOperand, this.state.display)})
            this.setState({calculation: this.calculateValues(this.state.calculation ? this.state.calculation : this.state.firstOperand, this.state.display)})
        }
        this.setState({decimalFlag: false})
    }

    handleClear(evt) {
        this.setState({ calculation: 0, display: 0, firstOperand: 0, operator: [], decimalFlag: false })
    }

    handleFocusOnDisplay(evt) {
        this.setState({ display: '' })
    }

    handleDigits(evt) {
        console.log(evt.target.value);
        if(evt.target.value == '.') {
            if(!this.state.decimalFlag) {
                console.log(this.state.display + evt.target.value, '!!')
                this.setState({ 
                    display: this.state.display == '0.'? '' + evt.target.value : this.state.display + evt.target.value, decimalFlag: true })
            } else {
                // console.log(this.state.display + evt.target.value, '!!')
                // this.setState({ display: this.state.display + evt.target.value })
            }
        } else {
            this.setState({ 
                display: this.state.display == '' || this.state.display == 0
                ? '' + evt.target.value
                : this.state.display + evt.target.value 
            })
        }
    }

    componentDidMount() {
        this.handleFocusOnDisplay();
    }

    shouldComponentUpdate(props, state) {
        // console.log(props, state)
        // if(state.firstOperand && state.secondOperand) this.setState({display: this.calculateValues(state.firstOperand, state.secondOperand)})
        // this.setState({display: this.calculateValues(state.firstOperand, state.secondOperand)})
        console.log(state.firstOperand == this.state.firstOperand)
        return true
    }

    componentDidUpdate() {

        console.log(this.state, 'update!!')
        // if(this.state.secondOperand) {
        //     this.setState({display: this.calculateValues(this.state.firstOperand, this.state.secondOperand, this.state.operator), secondOperand: 0})
        // }
    }

    render() {
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

export default CalculatorWithReactLibrary
