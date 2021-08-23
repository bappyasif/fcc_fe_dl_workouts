import React, { Component } from 'react'
import { PresentationalLogic } from './presentationalLogic';
// import PresentationalLogic from '../presentational';
import '../../styling/anotherIndex.css';

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
        }
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleFocusOnDisplay = this.handleFocusOnDisplay.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
    }

    handleDisplay(evt) {
        if(evt.target.value == 0) {
            this.setState({ display: '' })    
        } else if(evt.target.value == '0.') {
            this.setState({ display: '.' })
        } else {
            this.setState({ display: this.state.display ? this.state.display + evt.target.value : evt.target.value })
        }
    }

    handleClear(evt) { this.setState({display: 0, v1: 0, v2:0, calculation: 0, operator: []})}
    
    handleFocusOnDisplay(evt) {
        this.setState({ display: '' })
    }
    
    handleEquals(evt) {
        this.manageEquation();
        this.setState({display: this.state.calculation, v1: 0, v2:0, calculation: 0, operator: []}) 
    }

    manageEquation() {
        // console.log(this.state.display)
        let exprDigits = this.state.display.split(/[+|\-|*|\/]/)
        let exprOps = this.state.display.split(/\d/).filter(op=>op)
        let rankings = [];
        exprOps.forEach(op => {
            let idx = this.getPrecedenceOfOperators(op);
            rankings.push(idx);
        })
        let higherPrecendenceStackPosition = [];
        let lowerPrecedenceStackPositions = []
        rankings.forEach((op, idx)=> [2].includes(op) ? higherPrecendenceStackPosition.push(idx) : lowerPrecedenceStackPositions.push(idx))
        let calculations = [];
        // let temp = 0;
        higherPrecendenceStackPosition.forEach((idx, ix)=>{

            let test = this.doingCalculations(exprDigits, idx, exprOps[idx])

            if(ix == 0) {
                console.log(ix, "!!")
                exprDigits.splice(idx ? idx : 0, 2, test);
            } else {
                console.log(idx-1, "??")
                exprDigits.splice(idx-1 ? idx-1 : 0, idx+1 ? idx+1 : idx, test);
            }
            
            
            // let arr = exprDigits.slice(0, idx).concat(exprDigits.slice(idx+1))
            
            // temp++;
            // console.log(idx, idx-temp)
            // exprDigits = arr;
        })
        console.log(exprDigits, exprOps, rankings, higherPrecendenceStackPosition, lowerPrecedenceStackPositions, this.state.display)
    }

    doingCalculations(arr, idx, op) {
        let str = `${arr[idx]} ${op} ${arr[idx+1]}`
        let calculated = eval(str);
        // arr = arr.slice(0, idx).concat(arr.slice(idx+1))
        console.log(arr, "chnaged?!", idx, op, calculated, str)
        return calculated
    }

    getPrecedenceOfOperators(ops) {
        switch(ops) {
            case "+":
            case "-":
                return 1;
            case "*":
            case "/":
                return 2;
            default: alert('operator is not found!!')
        }
    }

    componentDidMount() {
        this.handleFocusOnDisplay();
    }
    
    render() {
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
