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

    // calculateValues(operator, states) {
    //     console.log(states, "is it")
    //     switch (operator) {
    //         case '+':
    //             // this.setState({calculation: Number(states.firstOperand) + Number(states.secondOperand)})
    //             console.log(this.state, states, 'before')
    //             states.calculation = Number(states.firstOperand) + Number(states.secondOperand)
    //             states.display = states.firstOperand = states.calculation;
    //             states.secondOperand = states.calculation = 0;
    //             // this.setState({display: states.display})
    //             console.log(this.state, states, 'after')
    //             // return Number(states.firstOperand) + Number(states.secondOperand);
    //             // return states.calculation;
    //             // return states.display;
    //             return states;
    //         case '-':
    //             return Number(states.firstOperand) - Number(states.secondOperand);
    //         case '*':
    //             return Number(states.firstOperand) * Number(states.secondOperand);
    //         case '/':
    //             return Number(states.firstOperand) / (states.secondOperand != 0 ? states.secondOperand : alert('no dividing by zero'));
    //         default: false;
    //     }
    // }

    calculateValues(operator) {
        switch (operator) {
            case '+':
                console.log(Number(this.state.firstOperand) + Number(this.state.display));
                return Number(this.state.firstOperand) + Number(this.state.display);
            case '-':
                return Number(states.firstOperand) - Number(states.secondOperand);
            case '*':
                return Number(states.firstOperand) * Number(states.secondOperand);
            case '/':
                return Number(states.firstOperand) / (states.secondOperand != 0 ? states.secondOperand : alert('no dividing by zero'));
            default: false;
        }
    }

    handleEquals(evt) {
        // this.setState({display: this.calculateValues('=')})
        console.log(this.state, 'equals!!', this.calculateValues('='))
        // this.setState({display: })
    }

    // handleDisplay(evt) {
    //     if(typeof evt.target.value != 'number') {
    //         this.setState({operator: evt.target.value, display: 0 })
    //     }
    //     if(!this.state.firstOperand) {
    //         this.setState({ firstOperand: this.state.display})
    //     } else {
    //         this.setState({ secondOperand: this.state.display})
    //         console.log('2ndhere!!', this.state)
    //     }

    //     if(this.state.firstOperand && this.state.secondOperand) {
    //         console.log('here!!')
    //     }
        
    //     // this.setState({ display: 0 })
    //     // console.log(this.state.operator)
    // }

    handleDisplay(evt) {
        this.setState({ firstOperand: this.state.display })
        this.setState({ display: 0 })
        // if (['+', '-', '*', '/', '='].includes(evt.target.value)) {
        //     if (!this.state.firstOperand) {
        //         this.setState({ firstOperand: this.state.display })
        //         this.setState({ display: 0 })
        //     } else {
        //         if (!this.state.secondOperand && RTCErrorEvent.target.value == '=') {
        //             console.log('here!!', evt.target.value)
        //             this.setState({ secondOperand: this.state.display })
        //             // this.setState({ display: this.calculateValues(evt.target.value) })
        //             // this.setState(prevState => ({ display: this.calculateValues(evt.target.value, prevState) }))
        //             this.setState(prevState => ({ display: this.calculateValues(evt.target.value, prevState)['display'] }))
        //             // this.setState({display: this.state.calculation})
        //             // console.log('here!!', evt.target.value, this.state.secondOperand,'??', this.state.firstOperand)
        //         } else {
        //             console.log('calc')
        //             this.setState(prevState => ({ display: this.calculateValues(evt.target.value, prevState) }))
        //         }
        //     }
        // } else {
        //     this.setState({ display: evt.target.value })
        // }
    }

    handleClear(evt) {
        this.setState({ calculation: 0, display: 0 })
    }

    handleFocusOnDisplay(evt) {
        this.setState({ display: '' })
    }

    handleDigits(evt) {
        console.log(evt.target.value);
        // this.setState({ display: this.state.display + evt.target.value })
        // if(this.state.display.length == 0 && evt.target.value == 0) {
        //     alert('no leading zeros allowed')
        // } else {
        //     this.setState({ display: this.state.display + evt.target.value }) 
        // }
        // this.setState({ display: this.state.display + evt.target.value })
        this.setState({ display: this.state.display == 0 ? '' + evt.target.value : this.state.display + evt.target.value })
        // if(this.state.display == '') this.setState({display: 0})
    }

    componentDidMount() {
        this.handleFocusOnDisplay();
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
