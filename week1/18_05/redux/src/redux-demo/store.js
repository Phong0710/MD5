import {applyMiddleware, createStore} from "redux";
import {studentReducer} from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(studentReducer,applyMiddleware(thunk))