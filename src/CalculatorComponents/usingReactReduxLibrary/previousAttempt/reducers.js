import { combineReducers } from "redux";
import { ADD, CLEAR, DECIMAL, DIVIDE, EQUALS, /** initialAddition, initialDivision, initialMultiplication, initialSubtraction, */ MULTIPLY, OPERATORS, rootObject, SUBTRACT } from "./actions";

export const soloReducer = (state = rootObject, action) => {
    let whatHappens;
    switch (action.type) {
        case ADD:
            whatHappens = handlingDisplayFromReducer(action.payload, state);
            state = whatHappens
            return { ...state, display: 0, decimalFlag: false }
        case SUBTRACT:
            whatHappens = handlingDisplayFromReducer(action.payload, state);
            state = whatHappens
            return { ...state, display: 0, decimalFlag: false }
        case MULTIPLY:
            whatHappens = handlingDisplayFromReducer(action.payload, state);
            state = whatHappens
            return { ...state, display: 0, decimalFlag: false }
        case DIVIDE:
            whatHappens = handlingDisplayFromReducer(action.payload, state);
            state = whatHappens
            return { ...state, display: 0, decimalFlag: false }
        case EQUALS:
            let precedentOperator, calculation;
            if (state.operator.length > 1) {
                precedentOperator = state.operator[state.operator.length - 2]
                calculation = calculatingOperations(precedentOperator, state.v1, state.display, "-")
                return { ...state, display: calculation, operator: [], calculation: 0, v1: 0 }
            } else {
                console.log("is it?!", state.v1, state.display, state.operator[state.operator.length - 1])
                // return { ...state, display: state.calculation ? state.calculation : calculatingOperations(state.operator[state.operator.length - 1], state.v1, state.display), operator: [], calculation: 0, v1: 0 }
                return { ...state, display: calculatingOperations(state.operator[state.operator.length - 1], state.v1, state.display), operator: [], calculation: 0, v1: 0 }
            }
        case CLEAR:
            return { ...state, display: 0, v1: 0, operator: [], calculation: 0, decimalFlag: false }
        case DECIMAL:
            return { ...state, decimalFlag: true }
        case OPERATORS:
            if (state.operator.length > 1) {
                // console.log('operators!!')
            }
            return { ...state, }
        default:
            console.log("state", state, action.payload, action.decimalFlag, 'before')
            var count;
            if (action.payload) {
                count = (action.payload.match(/[.]/g) || []).length;
            }
            if (count > 1) {
                return {
                    ...state,
                    display: action.payload.substr(0, action.payload.length - 1),
                }
            } else {
                return {
                    ...state,
                    display: action.payload ? action.payload : '',
                }
            }
    }
}

let handlingDisplayFromReducer = (payload, state, precedentOperator) => {
    let { display, v1, calculation, operator } = { ...state }
    // console.log('its here payload!!', state, payload);

    if(operator.length >= 1 && v1) {
        let op = operator.shift();
        calculation = calculatingOperations(op, Number(v1), Number(display));
        display = 0
        v1 = calculation
        // calculation = 0;
        console.log('chained ops!!', display, v1, payload, operator, op, calculation)
    }

    if (v1 && calculation) {
        calculation = calculatingOperations(payload, Number(v1), Number(display));
        display = calculation
    }

    if (!v1) {
        v1 = display
    }

    operator.push(payload)

    return {
        ...state,
        display,
        v1,
        calculation,
        operator
    }
}

let calculatingOperations = (operator, v1, v2, precedentOperator) => {
    let calculation = 0;
    console.log("hewre??", operator, precedentOperator)
    if (precedentOperator) {
        let str = `${Number(v1)} ${operator} ${Number(-v2)}`
        console.log(str, eval(str))
        return eval(str)
    }
    switch (operator) {
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