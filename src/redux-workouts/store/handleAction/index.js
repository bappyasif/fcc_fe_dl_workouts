import { createStore } from 'redux'

/** After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a reducer function. */
/** Reducers in Redux are responsible for the state modifications that take place in response to actions. A reducer takes state and action as arguments, and it always returns a new state. */
/**  It is important to see that this is the only role of the reducer. It has no side effects — it never calls an API endpoint and it never has any hidden surprises. */
/** The reducer is simply a pure function that takes state and action, then returns new state. */
/** Another key principle in Redux is that state is read-only. In other words, the reducer function must always return a new copy of state and never modify state directly. */
/** Redux does not enforce state immutability, however, we are responsible for enforcing it in the code of our reducer functions.  */

const defaultState = {
    login: false
};

const reducer = (state = defaultState, action) => {
    // Change code below this line
    if (action.type === 'LOGIN') {
        return {
            //   state: true
            login: true
        }

    } else {
        return state;
    }
    // Change code above this line
};

const store = createStore(reducer);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};




// using switches for multiple store actions

// It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.

// Use const for Action Types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState2 = {
    authenticated: false
};

const authReducer2 = (state = defaultState2, action) => {
    // Change code below this line
    switch (action.type) {
        case LOGIN:
            // even though it's not recommended to mutate state directly but as it's a simple demonstration so we're doing it
            return { authenticated: true }
        case LOGOUT:
            // even though it's not recommended to mutate state directly but as it's a simple demonstration so we're doing it
            return { authenticated: false }
        default: return state;
    }
    // Change code above this line
};

const store2 = Redux.createStore(authReducer2);

const loginUser = () => {
    return {
        // type: 'LOGIN'
        type: LOGIN
    }
};

const logoutUser = () => {
    return {
        // type: 'LOGOUT'
        type: LOGOUT
    }
};

export default HandleActionInStore
