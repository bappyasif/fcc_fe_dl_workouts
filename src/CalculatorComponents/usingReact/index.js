import React, { Component } from 'react'
import '../styling/index.css';
import PresentationalLogic from './presentational';

class CalculatorWithReactLibrary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            display: 0,
            calculation: 0,
            firstOperand: '',
            secondOperand: '',
            operator: ''
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleFocusOnDisplay = this.handleFocusOnDisplay.bind(this);
        this.handleDigits = this.handleDigits.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
    }

    calculateValues(op) {
        switch (op || this.state.operator) {
            case '+':
                // return op ? Number(this.state.calculation) + Number(this.state.display) : Number(this.state.firstOperand) + Number(this.state.display) 
                return Number(this.state.firstOperand) + Number(this.state.display);
            // return Number(this.state.firstOperand) + Number(this.state.display);
            case '-':
                return Number(this.state.firstOperand) - Number(this.state.display);
            case '*':
                return Number(this.state.firstOperand) * Number(this.state.display);
            case '/':
                return Number(this.state.firstOperand) / (this.state.display != 0 ? this.state.display : this.showError);
            case '=':
                return this.state.calculation
            default: false;
        }
    }

    showError() {
        alert('no dividing by zero');
        this.setState({ display: this.state.firstOperand })
    }

    handleEquals(evt) {
        this.setState({ display: this.calculateValues() })
    }

    handleDisplay(evt) {
        if (typeof evt.target.value != 'number') {
            this.setState({ operator: evt.target.value, display: 0 })
        }
        if (!this.state.firstOperand) this.setState({ firstOperand: this.state.display })
        // if(this.state.firstOperand) this.setState({ secondOperand: this.state.display, calculation: this.calculateValues()})
        // if (this.state.firstOperand) this.setState({ firstOperand: this.calculateValues(), calculation: this.calculateValues() })
        if (this.state.firstOperand) this.setState({ firstOperand: this.state.display, calculation: this.calculateValues('+') })
    }

    handleClear(evt) {
        this.setState({ calculation: 0, display: 0 })
    }

    handleFocusOnDisplay(evt) {
        this.setState({ display: '' })
    }

    handleDigits(evt) {
        console.log(evt.target.value);
        this.setState({ display: this.state.display == 0 ? '' + evt.target.value : this.state.display + evt.target.value })
    }

    componentDidMount() {
        this.handleFocusOnDisplay();
    }

    shouldComponentUpdate(props, state) {
        console.log(props, state)
        // if(state.firstOperand && state.secondOperand) this.setState({display: this.calculateValues(state.firstOperand, state.secondOperand)})
        // this.setState({display: this.calculateValues(state.firstOperand, state.secondOperand)})
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
