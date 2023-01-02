import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { reducer } from "./Auth/auth.reducer";
import thunk from "redux-thunk";

export const store = legacy_createStore(
  combineReducers({
    auth: reducer,
  }),
  applyMiddleware(thunk)
);
