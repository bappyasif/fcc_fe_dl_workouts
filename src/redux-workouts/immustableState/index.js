// Never Mutate Redux store State directly

// Immutable state means that we never modify state directly, instead, we return a new copy of state.

// This immutability, in fact, is what provides such features as time-travel debugging that you may have heard about.

// Redux does not actively enforce state immutability in its store or reducers, that responsibility falls on the programmer.

// Note that strings and numbers are primitive values and are immutable by nature.

// An array or object, however, is mutable

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
    'Go to the store',
    'Clean the house',
    'Cook dinner',
    'Learn to code',
];

const immutableReducer = (state = todos, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            // Don't mutate state here or the tests will fail
            return state.concat(action.todo)
        default:
            return state;
    }
};

const addToDo = (todo) => {
    return {
        type: ADD_TO_DO,
        todo
    }
}

const store = Redux.createStore(immutableReducer);


// Use the Spread Operator on Arrays

// One solution from ES6 to help enforce state immutability in Redux is the spread operator [...]

// let newArray =  [...myArray] newArray is now a clone of myArray. Both arrays still exist separately in memory. 

// To clone an array but add additional values in the new array, we could write [...myArray, 'new value']

// This would return a new array composed of the values in myArray and the string new value as the last value.

const immutableReducer2 = (state = ['Do not mutate state!'], action) => {
    switch (action.type) {
        case 'ADD_TO_DO':
            // Don't mutate state here or the tests will fail
            return [...state, action.todo]
        default:
            return state;
    }
};

const addToDo2 = (todo) => {
    return {
        type: 'ADD_TO_DO',
        todo
    }
}

const store = Redux.createStore(immutableReducer2);


// Remove an Item from an Array

const immutableReducer03 = (state = [0, 1, 2, 3, 4, 5], action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            // Don't mutate state here or the tests will fail
            // return [
            //     ...state.slice(0, action.index),
            //     ...state.slice(action.index + 1, state.length)
            // ]

            return state.slice(0, action.index).concat(state.slice(action.index + 1, state.length));
        default:
            return state;
    }
};

const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        index
    }
}

const store = Redux.createStore(immutableReducer03);

// Copy an Object with Object.assign

// here are ways to help enforce state immutability when state is an object

// A useful tool for handling objects is the Object.assign() utility

// Object.assign() takes a target object and source objects and maps properties from the source objects to the target object.

// Any matching properties are overwritten by properties in the source objects. 

// This behavior is commonly used to make shallow copies of objects by passing an empty object as the first argument followed by the object(s) you want to copy

// const newObject = Object.assign({}, obj1, obj2); This creates newObject as a new object, which contains the properties that currently exist in obj1 and obj2.

const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };
  
  const immutableReducer04 = (state = defaultState, action) => {
    switch(action.type) {
      case 'ONLINE':
        // Don't mutate state here or the tests will fail
        return Object.assign({}, state, {status: 'online'})
      default:
        return state;
    }
  };
  
  const wakeUp = () => {
    return {
      type: 'ONLINE'
    }
  };
  
  const store = Redux.createStore(immutableReducer);