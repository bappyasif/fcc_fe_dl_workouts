import { combineReducers, createStore } from "redux";

// Combine Multiple Reducers

// Redux provides reducer composition as a solution for a complex state model.

// we define multiple reducers to handle different pieces of our application's state, then compose these reducers together into one root reducer.

// The root reducer is then passed into the Redux createStore() method.

// In order to let us combine multiple reducers together, Redux provides the combineReducers() method

// This method accepts an object as an argument in which we define properties which associate keys to specific reducer functions

// The name you give to the keys will be used by Redux as the name for the associated piece of state.

// Typically, it is a good practice to create a reducer for each piece of application state when they are distinct or unique in some way.

// For example, in a note-taking app with user authentication, one reducer could handle authentication while another handles the text and notes that the user is submitting
/**
 const rootReducer = Redux.combineReducers({
       auth: authenticationReducer,
       notes: notesReducer
   });
*/

// Now, the key notes will contain all of the state associated with our notes and handled by our notesReducer

// Here the state held in the Redux store would then be a single object containing auth and notes properties

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = { authenticated: false }, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true
            }
        case LOGOUT:
            return {
                authenticated: false
            }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    count: counterReducer,
    auth: authReducer
})

const store = createStore(rootReducer);