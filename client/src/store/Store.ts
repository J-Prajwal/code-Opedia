import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { reducer as AuthReducer } from "./Auth/auth.reducer";
import { reducer as ContestReducer } from "./Contests/contests.reducer";
import thunk from "redux-thunk";
import { Store } from "../constants/constants";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers: any =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: AuthReducer,
  contest: ContestReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
