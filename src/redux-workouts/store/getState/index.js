import React, { Component } from 'react'
import {createStore} from 'redux';

const reducer = (state = 5) => {
    return state;
}

let store = createStore(reducer);

/** The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current state held in the Redux store object with the getState() method. */
let curerntState = store.getState();

console.log(curerntState)

