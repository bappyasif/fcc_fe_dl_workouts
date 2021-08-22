import { combineReducers } from "redux";
import { ADD, CLEAR, DECIMAL, DIVIDE, EQUALS, /** initialAddition, initialDivision, initialMultiplication, initialSubtraction, */ MULTIPLY, OPERATORS, rootObject, SUBTRACT } from "./actions";

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
            // return { ...state, display: 0, operator: action.payload}
            return { ...state, display: 0, decimalFlag: false }
        case SUBTRACT:
            // let precedentOperator;
            // if(state.operator.length > 1) {
            //     // console.log('operators!!')
            //     precedentOperator = state.operator[state.operator.length-2]
            //     whatHappens = handlingDisplayFromReducer(precedentOperator, state, action.payload)
            //     console.log(precedentOperator,'precednt!!',whatHappens)
            // } else {
            //     whatHappens = handlingDisplayFromReducer(action.payload, state);
            // }

            whatHappens = handlingDisplayFromReducer(action.payload, state);
            // console.log('its here!!', state, whatHappens)
            state = whatHappens
            // return { ...state, display: state.v1 - state.v2 }
            // return { ...state, display: 0, operator: action.payload}
            return { ...state, display: 0, decimalFlag: false }
        case MULTIPLY:
            whatHappens = handlingDisplayFromReducer(action.payload, state);
            state = whatHappens
            // return { ...state, display: state.v1 * state.v2 }
            // return { ...state, display: 0, operator: action.payload}
            return { ...state, display: 0, decimalFlag: false }
        case DIVIDE:
            whatHappens = handlingDisplayFromReducer(action.payload, state);
            state = whatHappens
            // return { ...state, display: state.v1 + state.v2 }
            // return { ...state, display: 0, operator: action.payload}
            return { ...state, display: 0, decimalFlag: false }
        case EQUALS:
            let precedentOperator, calculation;
            if (state.operator.length > 1) {
                // console.log('operators!!')
                precedentOperator = state.operator[state.operator.length - 2]
                calculation = calculatingOperations(precedentOperator, state.v1, state.display, "-")
                // console.log(calculation, "consecutive ops", precedentOperator)
                return { ...state, display: calculation, operator: [], calculation: 0, v1: 0 }
            } else {
                console.log("is it?!", state.v1, state.display)
                return { ...state, display: state.calculation ? state.calculation : calculatingOperations(state.operator[state.operator.length - 1], state.v1, state.display), operator: [], calculation: 0, v1: 0 }
                // if(state.display != Infinity) {
                //     return { ...state, display: state.calculation ? state.calculation : calculatingOperations(state.operator[state.operator.length - 1], state.v1, state.display), operator: [], calculation: 0, v1: 0 }
                // }
            }

        // return { ...state, display: state.calculation ? state.calculation : calculatingOperations(state.operator, state.v1, state.display)}
        // return { ...state, display: state.calculation ? state.calculation : calculatingOperations(state.operator[state.operator.length-1], state.v1, state.display), operator: [], calculation: 0, v1: 0}
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
            // if(action.payload ? action.payload.includes('.') : false) {
            //     console.log('here here!!');
            //     state.decimalFlag = true;
            // }
            // console.log("state", state, action.payload, action.decimalFlag, 'after')
            var count;
            if (action.payload) {
                count = (action.payload.match(/[.]/g) || []).length;
            }
            // console.log('count', count)
            if (count > 1) {
                // console.log(action.payload, "consec decimals!!", action.payload.substr(0, action.payload.length-1))
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
        // return {
        //     ...state,
        //     display: action.payload ? action.payload : '',
        //     // display: state.display + action.payload ? action.payload : count > 0 ? state.display : '',
        //     // display:  count == 1 && action.payload.length == 1 ? action.payload : action.payload ? action.payload : '',
        // }
    }
}

let handlingDisplayFromReducer = (payload, state, precedentOperator) => {
    let { display, v1, calculation, operator } = { ...state }
    console.log('its here payload!!', state, payload);

    if (state.operator.length > 0 && v1) {
        let op = state.operator.shift();
        // display=0
        if (op == '/' && display) {
            calculation = calculatingOperations(op, Number(v1), Number(display));
        } else {
            calculation = calculatingOperations(op, Number(v1), Number(display));
            // display = calculation
            // v1 = calculation
            // // calculation = 0
            // display = 0
        }
        v1 = calculation
        // calculation = 0
        display = 0

        console.log(calculation, "chained ops", state.operator)
    }

    // if(operator.length >= 1) {
    //     console.log(operator[0], test,"vefore: ",)
    //     calculation = calculatingOperations(operator[0], Number(v1), Number(display));
    //     v1 = calculation
    //     calculation = 0
    //     let test = operator.shift()
    //     console.log(operator[0], test,"calculation: ", calculation)
    // }

    if (v1) {
        calculation = calculatingOperations(payload, Number(v1), Number(display));
        display = calculation
        // console.log("calculation: ", calculation)

        // if(state.operator.length > 0) {
        //     console.log("cosec ops", state.operator[0], 'before', v1, display)
        //     calculation = calculatingOperations(state.operator[0], Number(v1), Number(display));
        //     console.log("cosec ops", state.operator[state.operator.length-1], 'after', calculation, v1, display)
        // }

        // state.operator = [].concat(payload)
        // if(precedentOperator) {
        //     calculation = calculatingOperations(payload, Number(v1), Number(display), precedentOperator)
        // } else {
        //     calculation = calculatingOperations(payload, Number(v1), Number(display));
        // display = calculation
        // }

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