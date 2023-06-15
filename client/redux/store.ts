"use client"
import {createStore,combineReducers,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todosReducer from "./reducers/todosreducer"
const reducer =combineReducers({
 todos: todosReducer
});

const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;