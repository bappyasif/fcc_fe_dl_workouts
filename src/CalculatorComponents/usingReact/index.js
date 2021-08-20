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
            decimalFlag: false,
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleFocusOnDisplay = this.handleFocusOnDisplay.bind(this);
        this.handleDigits = this.handleDigits.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
    }

    calculateValues(v1, v2, op) {
        let calculation = 0, operatorSymbol = this.state.operator[this.state.operator.length-1];
        if(this.state.operator.length >= 2) {
            if(operatorSymbol == '-') {
                let expStr = `${Number(v1)} ${this.state.operator[this.state.operator.length-2]} ${Number(-v2)}`;
                return calculation = eval(expStr)
            }
        }
        switch (op || operatorSymbol) {
            case '+':
                calculation =  Number(v1) + Number(v2);
                return calculation;
            case '-':
                calculation =  Number(v1) - Number(v2);
                return calculation;
            case '*':
                calculation = Number(v1) * Number(v2);
                return calculation;
            case '/':
                calculation = Number(v1) / Number(v2);
                return calculation;
            default: false;
        }
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
                decimalFlag: false,
                operator: []
            }
        })
    }

    handleDisplay(evt) {
        if (typeof evt.target.value != 'number') {
            console.log(evt.target.value)
            // console.log(consecOps)
            this.setState({operator: [...this.state.operator, evt.target.value], display: 0})
            // if(this.state.operator.length >= 2) this.setState({operatorsFlag: true})
        }
        if(!this.state.firstOperand) {
            this.setState({firstOperand: this.state.display})
        }
        if(this.state.firstOperand) {
            // this.setState({calculation: this.calculateValues(this.state.firstOperand, this.state.display)})
            this.setState({
                calculation: this.calculateValues(this.state.calculation 
                    ? this.state.calculation 
                    : this.state.firstOperand, 
                    this.state.display),
                // operator: []
                })
        }
        this.setState({decimalFlag: false})
        if(this.state.operator.length > 1) this.setState({operator: [].concat(evt.target.value)})
    }

    handleClear(evt) {
        this.setState({ calculation: 0, display: 0, firstOperand: 0, operator: [], decimalFlag: false})
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

    render() {
        return (
            <div>
                {/* <h4>using redux</h4> */}
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
