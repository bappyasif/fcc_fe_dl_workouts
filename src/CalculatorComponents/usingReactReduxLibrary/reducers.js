import { combineReducers } from "redux";
import { ADD, DIVIDE, initialAddition, initialDivision, initialMultiplication, initialSubtraction, MULTIPLY, SUBTRACT } from "./actions";

export let additionReducer = (state=initialAddition, action) => {
    switch(action.type) {
        case ADD:
            return {...state, value: action.value}
        default: return state
    }
}

export let subtractionReducer = (state=initialSubtraction, action) => {
    switch(action.type) {
        case SUBTRACT:
            return {...state, value: action.value}
            default: return state
    }
}

export let multiplicationReducer = (state=initialMultiplication, action) => {
    switch(action.type) {
        case MULTIPLY:
            return {...state, value: action.value}
            default: return state
    }
}

export let divisionReducer = (state=initialDivision, action) => {
    switch(action.type) {
        case DIVIDE:
            state = []
            return [...state, action.value]
            default: return state
    }
}

export let rootReducer = combineReducers({
    ADD: additionReducer,
    SUBTRACT: subtractionReducer,
    MULTIPLY: multiplicationReducer,
    DIVISION: divisionReducer
})