import React from 'react'
import { additionalsData, numbersData, operatorsData } from '../ContainerForCalculatorComponents'

function PresentationalLogic(props) {
    let allNumbers = numbersData.map(num => {
        return <input
            key={num.id}
            type='button'
            className='numbers'
            id={num.id}
            value={num.value}
            onClick={props.digits} />
    })
    let allOperators = operatorsData.map(operator => {
        return <button
            key={operator.id}
            className='operators'
            onClick={props.handleDisplayChange}
            value={operator.value}
            id={operator.id}>{operator.value}</button>
    })
    let allAdditionals = additionalsData.map(additional => {
        return <button
            value={additional.value}
            key={additional.value}
            className='extras'
            id={additional.id}
            onClick={
                additional.value == 'Clr'
                    ? props.clear
                    : (additional.id == 'zero' || additional.id == 'decimal')
                        ? props.digits
                        : additional.id == 'equals'
                        ? props.equals
                        : null
            }>{additional.value}</button>
    })
    // console.log(props)
    return (
        <div className='calculator-container'>
            <div id='display-div'>
                <input
                    id='display'
                    onChange={props.handleDisplayChange}
                    value={props.display}
                    autoFocus />
            </div>
            <div id='sections'>
                <div id='left-section'>
                    <div id='all-nums'>
                        {allNumbers}
                    </div>
                    <div id='all-extras'>
                        {allAdditionals}
                    </div>
                </div>
                <div id='right-section'>
                    <div id='all-ops'>
                        {allOperators}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PresentationalLogic
