import React from "react";
import { Component } from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";

import { combinedStore } from "./stores";
import { manageActions, manageAdditions, manageClear, manageDecimal, manageDivision, manageEquals, manageMultiplications, manageOperators, manageSubtraction } from "./actions";
import PresentationalLogic from "../../usingReact/presentational";

class CalculatorComponent extends Component {

    constructor(props) {
        super(props)

        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleFocusOnDisplay = this.handleFocusOnDisplay.bind(this);
        this.handleDigits = this.handleDigits.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
    }

    handleDisplay = (evt) => {
        if (typeof evt.target.value != 'number') {
            console.log(evt.target.value)
            if (evt.target.value == '+') this.props.dispatchAdd(evt.target.value)
            if (evt.target.value == '-') this.props.dispatchSubtract(evt.target.value)
            if (evt.target.value == '*') this.props.dispatchMultiply(evt.target.value)
            if (evt.target.value == '/') this.props.disptachDivide(evt.target.value)
            if (evt.target.value == '.') this.props.disptachDecimal()
        }

    }
    handleClear = () => { this.props.dispatchClear() }
    handleFocusOnDisplay = () => { }
    handleDigits(evt) {

        let checks = (this.props.source.display == '' || this.props.source.display == 0)
        ? '' + evt.target.value
        : this.props.source.display + evt.target.value
    this.props.dispatchSource(checks)
    }

    handleEquals = () => {
        this.props.dispatchEquals();
    }

    render() {
        console.log(this.props, "!!")
        return (
            <div>
                <PresentationalLogic
                    handleDisplayChange={this.handleDisplay}
                    display={this.props.source.display}
                    calculation={this.props.source.display}
                    clear={this.handleClear}
                    digits={this.handleDigits}
                    equals={this.handleEquals}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        source: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        dispatchAdd: (value) => dispatch(manageAdditions(value)),
        dispatchSubtract: (value) => dispatch(manageSubtraction(value)),
        dispatchMultiply: (value) => dispatch(manageMultiplications(value)),
        disptachDivide: (value) => dispatch(manageDivision(value)),
        dispatchSource: (value) => dispatch(manageActions(value)),
        dispatchEquals: () => dispatch(manageEquals()),
        dispatchClear: () => dispatch(manageClear()),
        dispatchDecimal: () => dispatch(manageDecimal()),
        dispatchConsecutives: () => dispatch(manageOperators())
    }
}

let WrapperComponent = connect(mapStateToProps, mapDispatchToProps)(CalculatorComponent);

export class CalculatorWithReactRedux extends React.Component {
    render() {
        return (
            <Provider store={combinedStore}>
                <h4>using react redux library</h4>
                <WrapperComponent />
            </Provider>
        )
    }
}
