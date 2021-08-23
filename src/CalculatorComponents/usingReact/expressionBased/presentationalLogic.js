import React from 'react'
import { additionalsData, numbersData, operatorsData } from '../../ContainerForCalculatorComponents'

export function PresentationalLogic(props) {
    // console.log(props)
    return (
        <div className='another-calculator-container'>
            <div id='display-div'>
                <input
                    id='display'
                    onChange={props.changeDisplay}
                    value={props.display}
                    autoFocus />
            </div>
            <div id='all-sections'>
                <div className='left-section'>
                    <div className='all-nums'>
                        <DigitButtons numbers={props.changeDisplay} />
                    </div>
                    <div className='all-extras'>
                        <AdditionalButtons additionals={props.changeDisplay} clear={props.clear} equals={props.equals} />
                    </div>
                </div>
                <div className='right-section'>
                    <div className='all-ops'>
                        <OperatorButtons operators={props.changeDisplay} />
                    </div>
                </div>
            </div>
        </div>
    )
}


let DigitButtons = (props) => {
    let numberButtons = numbersData.map(num => <button key={num.id} className='digits' id={num.id} value={num.value} onClick={props.numbers}>{num.value}</button>)
    return numberButtons
}

let OperatorButtons = (props) => {
    let allOperators = operatorsData.map(op => <button key={op.id} className='ops' id={op.id} value={op.value} onClick={props.operators}>{op.value}</button>)
    return allOperators
}

let AdditionalButtons = (props) => {
    let otherButtons = additionalsData.map(other => <button key={other.id} className='extras' id={other.id} value={other.value} onClick={other.id == 'clear' ? props.clear : other.id == 'equals' ? props.equals : props.additionals}>{other.value}</button>)
    return otherButtons
}