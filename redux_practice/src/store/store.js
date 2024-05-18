import { combineReducers } from "redux";
import { countReducer } from "./reducer";
import { createStore } from "redux";
const rootReducer = combineReducers({ countReducer });

const store = createStore(rootReducer);

export default store;
