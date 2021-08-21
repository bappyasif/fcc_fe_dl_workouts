import { createStore } from "redux";
import { soloReducer, /** additionReducer, divisionReducer, multiplicationReducer, rootReducer,  subtractionReducer */ } from "./reducers";

// export let additionStore = createStore(additionReducer)

// export let subtractionStore = createStore(subtractionReducer)

// export let multiplicationStore = createStore(multiplicationReducer)

// export let divisionStore = createStore(divisionReducer)

// export let combinedStore = createStore(rootReducer);
export let combinedStore = createStore(soloReducer);