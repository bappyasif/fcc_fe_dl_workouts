// Use Middleware to Handle Asynchronous Actions

// Redux provides middleware designed specifically for this purpose, called Redux Thunk middleware

// To include Redux Thunk middleware, we pass it as an argument to Redux.applyMiddleware()

// This statement is then provided as a second optional parameter to the createStore() function

// Then, to create an asynchronous action, we return a function in the action creator that takes dispatch as an argument.

// Within this function, we can dispatch actions and perform asynchronous requests.

// Then, once you receive the data, you dispatch another action which carries the data as a payload along with information that the action is completed.

// we're passing dispatch as a parameter to this special action creator.

// This is what we'll use to dispatch our actions, we simply pass the action directly to dispatch and the middleware takes care of the rest.

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    store.dispatch(requestingData())
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      store.dispatch(receivedData(data))
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);