import { combineReducers } from "redux";
import { ADD, CLEAR, DIVIDE, EQUALS, /** initialAddition, initialDivision, initialMultiplication, initialSubtraction, */ MULTIPLY, rootObject, SUBTRACT } from "./actions";

// export let additionReducer = (state = initialAddition, action) => {
//     switch (action.type) {
//         case ADD:
//             return { ...state, display: action.v1 + action.v2 }
//         default: return state
//     }
// }

// export let subtractionReducer = (state = initialSubtraction, action) => {
//     switch (action.type) {
//         case SUBTRACT:
//             return { ...state, display: action.v1 - action.v2 }
//         default: return state
//     }
// }

// export let multiplicationReducer = (state = initialMultiplication, action) => {
//     switch (action.type) {
//         case MULTIPLY:
//             return { ...state, display: action.v1 * action.v2 }
//         default: return state
//     }
// }

// export let divisionReducer = (state = initialDivision, action) => {
//     switch (action.type) {
//         case DIVIDE:
//             state = []
//             return { ...state, display: action.v1 / action.v2 }
//         default: return state
//     }
// }

// export let rootReducer = combineReducers({
//     ADD: additionReducer,
//     SUBTRACT: subtractionReducer,
//     MULTIPLY: multiplicationReducer,
//     DIVISION: divisionReducer
// })

export const soloReducer = (state = rootObject, action) => {
    // let whatHappens = handlingDisplayFromReducer(action.payload, state);
    let whatHappens;
    switch (action.type) {
        case ADD:
            whatHappens = handlingDisplayFromReducer(action.payload, state);
            // console.log('its here!!', state, whatHappens)
            state = whatHappens
            // return { ...state, display: state.calculation}
            return { ...state, display: 0, operator: action.payload}
        case SUBTRACT:
            whatHappens = handlingDisplayFromReducer(action.payload, state);
            // console.log('its here!!', state, whatHappens)
            state = whatHappens
            // return { ...state, display: state.v1 - state.v2 }
            return { ...state, display: 0, operator: action.payload}
        case MULTIPLY:
            whatHappens = handlingDisplayFromReducer(action.payload, state);
            state = whatHappens
            // return { ...state, display: state.v1 * state.v2 }
            return { ...state, display: 0, operator: action.payload}
        case DIVIDE:
            whatHappens = handlingDisplayFromReducer(action.payload, state);
            state = whatHappens
            // return { ...state, display: state.v1 + state.v2 }
            return { ...state, display: 0, operator: action.payload}
        case EQUALS:
            return { ...state, display: state.calculation ? state.calculation : calculatingOperations(state.operator, state.v1, state.display)}
        case CLEAR:
            return { ...state, display: 0, v1: 0, operator: [], calculation: 0}
        default:
            console.log("state", state, action.payload)
            return {
                ...state,
                display: state.display + action.payload ? action.payload : ''

            }
    }
}

let handlingDisplayFromReducer = (payload, state) => {
    let {display, v1, calculation, operator} = {...state}
    console.log('its here!!', state, payload);
    if(v1) {
        calculation = calculatingOperations(payload, Number(v1), Number(display));
        display = calculation
    }

    if(!v1) {
        v1 = display
    }
    return {
        ...state,
        display,
        v1,
        calculation,
        operator
    }
}

let calculatingOperations = (operator, v1, v2) => {
    let calculation = 0;
    console.log("hewre??", operator)
    switch(operator) {
        case "+":
            calculation = Number(v1) + Number(v2)
            return calculation
        case "-":
            // console.log("hewre??", operator)
            calculation = Number(v1) - Number(v2)
            return calculation
        case "*":
            calculation = Number(v1) * Number(v2)
            return calculation
        case "/":
            calculation = Number(v1) / Number(v2)
            return calculation
        default: alert('something"s wrong!!')
    }
}