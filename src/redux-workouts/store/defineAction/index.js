import React, { Component } from 'react'

/** In Redux, all state updates are triggered by dispatching actions. An action is simply a JavaScript object that contains information about an action event that has occurred. */
/** The Redux store receives these action objects, then updates its state accordingly. */
/** Sometimes a Redux action also carries some data. For example, the action carries a username after a user logs in. While the data is optional, actions must carry a type property that specifies the 'type' of action that occurred. */
/** Think of Redux actions as messengers that deliver information about events happening in our app to the Redux store. The store then conducts the business of updating state based on the action that occurred. */

let action = {
    type: 'LOGIN'
}

/** After creating an action, the next step is sending the action to the Redux store so it can update its state. In Redux, we define action creators to accomplish this. */
/** An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events. */

function actionCreator() {
    return action;
}
