import React, { Component } from 'react'
import { createStore } from 'redux'

/** dispatch method is what we use to dispatch actions to the Redux store. Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store. */
/** action creators return an object with a type property that specifies the action that has occurred. Then the method dispatches an action object to the Redux store. */
const store = createStore(
    (state = { login: false }) => state
);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};

store.dispatch(loginAction());