const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const MULTIPLY = 'MULTIPLY';
const DIVIDE = 'DIVIDE';

export let initialAddition = {info: 'Addition', value: 0}
export let initialSubtraction = {info: 'Subtraction', value: 0}
export let initialMultiplication = {info: 'Multiplication', value: 0}
export let initialDivision = {info: 'Division', value: 0}

let manageAdditions = (v1, v2) => {
    return {
        type: ADD,
        value: v1 + v2
    }
}

let manageSubtraction = (v1, v2) => {
    return {
        type: SUBTRACT,
        value: v1 - v2
    }
}

let manageMultiplications = (v1, v2) => {
    return {
        type: MULTIPLY,
        value: v1 * v2
    }
}

let manageDivision = (v1, v2) => {
    return {
        type: DIVIDE,
        value: v1 / v2
    }
}

export {ADD, SUBTRACT, MULTIPLY, DIVIDE, manageAdditions, manageSubtraction, manageMultiplications, manageDivision}