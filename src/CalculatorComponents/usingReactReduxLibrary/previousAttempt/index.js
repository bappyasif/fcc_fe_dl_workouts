import React from "react";
import { Component } from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";
// import { additionReducer, divisionReducer, multiplicationReducer, soloReducer, subtractionReducer } from "./reducers";
import { combinedStore } from "./stores";
// import PresentationalLogic from '../usingReact/presentational';
import { manageActions,  manageAdditions, manageClear, manageDivision, manageEquals, manageMultiplications, manageSubtraction} from "./actions";
import PresentationalLogic from "../../usingReact/presentational";

class CalculatorComponent extends Component {

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

    handleDisplay = (evt) => {
        // console.log(evt.target.value)
        // console.log(this.props.source.display, "??")
        if (typeof evt.target.value != 'number') {
            console.log(evt.target.value)
            // console.log(consecOps)
            // this.setState({ operator: [...this.state.operator, evt.target.value], display: 0 })
            //
            if(evt.target.value == '+') this.props.dispatchAdd(evt.target.value)
            if(evt.target.value == '-') this.props.dispatchSubtract(evt.target.value)
            if(evt.target.value == '*') this.props.dispatchMultiply(evt.target.value)
            if(evt.target.value == '/') this.props.disptachDivide(evt.target.value)
        }

    }
    handleClear = () => { this.props.dispatchClear() }
    handleFocusOnDisplay = () => { }
    handleDigits(evt) {

        let checks = (this.props.source.display == '' || this.props.source.display == 0)
        ? '' + evt.target.value
        : this.props.source.display + evt.target.value
    this.props.dispatchSource(checks)


        // console.log(evt.target.value, checks, this.props.source.display);

        // this.props.source.display = evt.target.value
        // this.props.source.display = this.props.source.display + evt.target.value
        // console.log(this.props.source.display, "??")
        // this.props.dispatchSource(this.props.source.display)
        // this.props.dispatchSource(evt.target.value)

        // if (this.props.source.display == '.') {
        //     if (!this.state.decimalFlag) {
        //         let checks = this.props.source.display == '0.' ? '' + evt.target.value : this.props.source.display + evt.target.value
        //         this.props.dispatchSource(checks)
        //         console.log('here::', checks)
        //     }

        // } else {
        //     let checks = (this.props.source.display == '' || this.props.source.display == 0)
        //         ? '' + evt.target.value
        //         : this.props.source.display + evt.target.value
        //     this.props.dispatchSource(checks)
        //     // console.log(this.props, "wat!!", checks)
        //     console.log('else!!', checks)
        // }
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
    // console.log(state, 'here!!')
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
        dispatchClear: () => dispatch(manageClear())
    }
}

// let mapDispatchToProps = (dispatch, ownProps) => {
//     let choosedDispatch = ownProps.ADD 
//     ? (value) => dispatch(additionReducer(value)) 
//     : ownProps.SUBTRACT 
//     ? (value) => dispatch(subtractionReducer(value)) 
//     : ownProps.MULTIPLY 
//     ? (value) => dispatch(multiplicationReducer(value)) 
//     : (value) => dispatch(divisionReducer(value))

//     return {
//         handleOperations: choosedDispatch
//     }
// }

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
