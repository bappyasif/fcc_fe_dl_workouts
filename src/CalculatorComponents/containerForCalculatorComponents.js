import React, { Component } from 'react'
import CalculatorWithReactLibrary from './usingReact'
import PresentationalLogic from './usingReact/presentational';
import { CalculatorWithReactRedux } from './usingReactReduxLibrary';

export let numbersData = [
    {
        value: 1,
        id: 'one',
    },
    {
        value: 2,
        id: 'two',
    },
    {
        value: 3,
        id: 'three',
    },
    {
        value: 4,
        id: 'four',
    },
    {
        value: 5,
        id: 'five',
    },
    {
        value: 6,
        id: 'six',
    },
    {
        value: 7,
        id: 'seven',
    },
    {
        value: 8,
        id: 'eight',
    },
    {
        value: 9,
        id: 'nine',
    },
    
];

export let operatorsData = [
    {
        value: '+',
        id: 'add'
    },
    {
        value: '-',
        id: 'subtract'
    },
    {
        value: '*',
        id: 'multiply'
    },
    {
        value: '/',
        id: 'divide'
    },
];

export let additionalsData = [
    {
        value: '0',
        id: 'zero'
    },
    {
        value: '.',
        id: 'decimal'
    },
    {
        value: 'Clr',
        id: 'clear'
    },
    {
        value: '=',
        id: 'equals'
    },
]

class ContainerForCalculatorComponents extends Component {
    render() {
        return (
            <div>
                <CalculatorWithReactLibrary />
                <CalculatorWithReactRedux />
            </div>
        )
    }
}

export default ContainerForCalculatorComponents
