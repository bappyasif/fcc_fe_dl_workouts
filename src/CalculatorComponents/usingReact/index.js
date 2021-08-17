import React, { Component } from 'react'
import '../styling/index.css';
import PresentationalLogic from './presentational';

class CalculatorWithReactLibrary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            display: 0,
            calculation: 0
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleFocusOnDisplay = this.handleFocusOnDisplay.bind(this);
        this.handleDigits = this.handleDigits.bind(this);
    }

    handleDisplay(evt) {
        this.setState({ display: evt.target.value })
    }

    handleClear(evt) {
        this.setState({ calculation: 0, display: 0 })
    }

    handleFocusOnDisplay(evt) {
        this.setState({ display: '' })
    }

    handleDigits(evt) {
        // console.log(evt.target.value);
        this.setState({display: this.state.display+evt.target.value})
    }

    render() {
        return (
            <div>
                <PresentationalLogic handleDisplayChange={this.handleDisplay} display={this.state.display} clear={this.handleClear} focus={this.handleFocusOnDisplay} digits={this.handleDigits} />
            </div>
        )
    }
}

export default CalculatorWithReactLibrary
