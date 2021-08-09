import { createStore } from "redux";

// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

let defaultState = {
    messages: []
}

// action creator
let addMessage = (msg) => {
    return {
        type: ADD,
        message: msg
    }
}

// redux reducer
let messageReducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return state.concat(action.message)
            // return {message: state.concat(action.message)}
        default: 
            return state
    }
}

let store = createStore(messageReducer)