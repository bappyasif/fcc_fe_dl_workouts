import React, { Component } from 'react'
// import Redux from 'redux';
import {createStore} from 'redux';

/** In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux store. This is the first important principle to understand when learning Redux: the Redux store is the single source of truth when it comes to application state. */
/** This also means that any time any piece of your app wants to update state, it must do so through the Redux store. The unidirectional data flow makes it easier to track state management in your app. */

const reducer = (state = 5) => {
    return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here: and takes a reducer as a parameter
// let store = Redux.createStore(reducer);
let store = createStore(reducer);
