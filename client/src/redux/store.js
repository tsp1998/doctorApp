import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducers";

const initialState = {};
const middlewares = [thunk];

const composeEnhancer = Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middlewares))
);
