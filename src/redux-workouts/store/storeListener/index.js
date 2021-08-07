// Register a Store Listener

// Another method we have access to on the Redux store object is store.subscribe()

// This allows us to subscribe listener functions to the store, which are called whenever an action is dispatched against the store.

// One simple use for this method is to subscribe a function to our store that simply logs a message every time an action is received and the store is updated.

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Write a callback function that increments the global variable count every time the store receives an action, and pass this function in to the store.subscribe() method. 
// Change code below this line
store.subscribe(() => count++);
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);