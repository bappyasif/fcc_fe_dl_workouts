const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const MULTIPLY = 'MULTIPLY';
const DIVIDE = 'DIVIDE';
const EQUALS = 'EQUALS';
const CLEAR = 'CLEAR';
const DIGITS = 'DIGITS';
const OPERATORS = 'OPERATORS';

export let rootObject = {display: 0, v1: 0, calculation: 0, operator: []}


// export let initialAddition = {info: 'Addition'}
// export let initialSubtraction = {info: 'Subtraction'}
// export let initialMultiplication = {info: 'Multiplication'}
// export let initialDivision = {info: 'Division'}
// export let initialDivision = {info: 'Division', display: 0, v1: 0, v2: 0}

export let manageActions = (value) => {
    // console.log('here!!', display, v1, rootObject)
    return {
        // ...rootObject,
        type: 'source',
        payload: value
    }
}

export let manageEquals = () => {
    return {
        type: EQUALS
    }
}

export let manageClear = () => {
    return {
        type: CLEAR
    }
}

let manageAdditions = (value) => {
    return {
        type: ADD,
        payload: value
    }
}

let manageSubtraction = (value) => {
    return {
        type: SUBTRACT,
        payload: value
    }
}

let manageMultiplications = (value) => {
    return {
        type: MULTIPLY,
        payload: value
    }
}

let manageDivision = (value) => {
    return {
        type: DIVIDE,
        payload: value
        // value: v1 / v2
    }
}

export {ADD, SUBTRACT, MULTIPLY, DIVIDE, EQUALS, CLEAR, manageAdditions, manageSubtraction, manageMultiplications, manageDivision }