import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const middleware = [thunk];
const enhancer = (process.env.NODE_ENV !== "production")
  ? composeWithDevTools(applyMiddleware(...middleware))
  : applyMiddleware(...middleware);

const store = createStore(rootReducer, enhancer);

export default store;