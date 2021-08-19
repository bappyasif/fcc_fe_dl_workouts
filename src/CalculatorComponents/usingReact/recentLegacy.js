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

    // calculateValues(op) {
    //     switch (op || this.state.operator) {
    //         case '+':
    //             // return op ? Number(this.state.calculation) + Number(this.state.display) : Number(this.state.firstOperand) + Number(this.state.display) 
    //             return Number(this.state.firstOperand) + Number(this.state.calculation ? this.state.calculation : this.state.display);
    //             // return Number(this.state.firstOperand) + Number(this.state.display);
    //         case '-':
    //             return Number(this.state.firstOperand) - Number(this.state.display);
    //         case '*':
    //             return Number(this.state.firstOperand) * Number(this.state.display);
    //         case '/':
    //             return Number(this.state.firstOperand) / (this.state.display != 0 ? this.state.display : this.showError);
    //         case '=':
    //             return this.state.calculation
    //         default: false;
    //     }
    // }

    calculateValues(v1, v2, op) {
        switch (op || this.state.operator) {
            case '+':
                // return op ? Number(this.state.calculation) + Number(this.state.display) : Number(this.state.firstOperand) + Number(this.state.display) 
                console.log('here!!', v1, v2)
                return Number(v1) + Number(v2);
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

    // handleEquals(evt) {
    //     // this.setState({ display: this.calculateValues() })
    //     this.setState({ 
    //         calculation: this.calculateValues(), 
    //         firstOperand: 0, 
    //         display: this.calculateValues()
    //     })
    //     // this.setState({ 
    //     //     calculation: this.calculateValues(), 
    //     //     firstOperand: 0, 
    //     //     display: this.state.calculation ? this.state.calculation : this.calculateValues()
    //     // })
    // }
    handleEquals(evt) {
        if (this.state.firstOperand && this.state.calculation) {
            this.setState({ display: this.state.calculation, firstOperand: 0, })
        } else {
            this.setState({
                calculation: this.calculateValues(this.state.firstOperand, this.state.display),
                firstOperand: 0,
                display: this.calculateValues(this.state.firstOperand, this.state.display)
            })
        }

        // this.setState({ display: this.calculateValues() })

        // this.setState({ 
        //     calculation: this.calculateValues(this.state.firstOperand, this.state.display), 
        //     firstOperand: 0, 
        //     display: this.calculateValues(this.state.firstOperand, this.state.display)
        // })

        // this.setState({ 
        //     calculation: this.calculateValues(), 
        //     firstOperand: 0, 
        //     display: this.state.calculation ? this.state.calculation : this.calculateValues()
        // })
    }

    chainedCalculations(evt) {
        console.log(this.state, "chained!!")
    }

    handleDisplay(evt) {
        if (typeof evt.target.value != 'number') {
            console.log(evt.target.value)
            this.setState({
                operator: evt.target.value,
                calculation: this.calculateValues(this.state.firstOperand, this.state.display),
                firstOperand: 0,
                display: 0
            })
        } else {
            // if (!this.state.firstOperand) this.setState({ firstOperand: this.state.display })
            // if(this.state.firstOperand) this.setState({ secondOperand: this.state.display, calculation: this.calculateValues()})
            // if (this.state.firstOperand) this.setState({ firstOperand: this.calculateValues(), calculation: this.calculateValues() })
            
            // if (this.state.firstOperand) {
            //     this.setState({
            //         firstOperand: this.state.display,
            //         calculation: this.calculateValues(
            //             this.state.calculation
            //                 ? this.state.calculation
            //                 : this.state.firstOperand,
            //             this.state.display)
            //     })
            //     this.chainedCalculations();
            // }
        }
        if (!this.state.firstOperand) this.setState({ firstOperand: this.state.display })

        if (this.state.firstOperand) {
            this.setState({
                firstOperand: this.state.display,
                calculation: this.calculateValues(
                    this.state.calculation
                        ? this.state.calculation
                        : this.state.firstOperand,
                    this.state.display)
            })
            this.chainedCalculations();
        }

    }

    // handleDisplay(evt) {
    //     if (typeof evt.target.value != 'number') {
    //         console.log(evt.target.value)
    //         this.setState({ operator: evt.target.value, display: 0 })
    //     }
    //     if (!this.state.firstOperand) this.setState({ firstOperand: this.state.display })
    //     // if(this.state.firstOperand) this.setState({ secondOperand: this.state.display, calculation: this.calculateValues()})
    //     // if (this.state.firstOperand) this.setState({ firstOperand: this.calculateValues(), calculation: this.calculateValues() })
    //     if (this.state.firstOperand) {
    //         this.setState({ firstOperand: this.state.display, calculation: this.calculateValues()})
    //         this.chainedCalculations();
    //     }
    // }

    handleClear(evt) {
        this.setState({ calculation: 0, display: 0, firstOperand: 0, operator: '' })
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


/**
 * 
 * 
 handleEquals(evt) {
        if (this.state.calculation) {
            // this.setState({calculation: this.calculateValues(this.state.firstOperand, this.state.display), display: this.calculateValues(this.state.firstOperand, this.state.display), firstOperand: 0, })
            this.setState({
                calculation: this.calculateValues(this.state.firstOperand, this.state.display),
                // display: this.state.calculation,
                // display: this.calculateValues(this.state.firstOperand, this.state.display) || this.state.calculation,
                // display: this.calculateValues(this.state.calculation, this.state.display),
                // display: this.state.calculation,
                display: this.calculateValues(this.state.firstOperand, this.state.display),
                firstOperand: 0,
            })
        } else if(this.state.calculation && this.state.display) {
            this.setState({
                calculation: this.calculateValues(this.state.calculation, this.state.display),
                // display: this.state.calculation,
                // display: this.calculateValues(this.state.firstOperand, this.state.display) || this.state.calculation,
                display: this.state.calculation,
                firstOperand: 0,
            })
        } else {
            this.setState({
                calculation: this.calculateValues(this.state.firstOperand, this.state.display),
                firstOperand: 0,
                display: this.calculateValues(this.state.firstOperand, this.state.display)
            })
        }
    }

    chainedCalculations(evt) {
        console.log(this.state, "chained!!")
    }

    handleDisplay(evt) {
        if (typeof evt.target.value != 'number') {
            console.log(evt.target.value)
            if(this.state.display) {
                this.setState({
                    operator: evt.target.value,
                    calculation: this.calculateValues(this.state.display, this.state.calculation),
                    // calculation: this.calculateValues(this.state.display, this.state.firstOperand),
                    // calculation: this.calculateValues(this.state.calculation, this.state.display),
                    // firstOperand: 0,
                    display: 0
                })
            } else {
                this.setState({
                    operator: evt.target.value,
                    calculation: this.calculateValues(this.state.calculation, this.state.display),
                    // calculation: this.calculateValues(this.state.calculation, this.state.display),
                    firstOperand: 0,
                    display: 0
                })
            }
            
        } else {

        }
        if (!this.state.firstOperand) this.setState({ firstOperand: this.state.display })

        if (this.state.firstOperand) {
            this.setState({
                // firstOperand: this.state.display,
                firstOperand: 0,
                calculation: this.calculateValues(
                    this.state.calculation
                        ? this.state.calculation
                        : this.state.firstOperand,
                    this.state.display),
                // display: this.calculateValues(this.state.calculation
                //     ? this.state.calculation
                //     : this.state.firstOperand,
                // this.state.display)
            })
            this.chainedCalculations();
        }

    }
 */