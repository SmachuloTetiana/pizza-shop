import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import apiMiddleware from "store/middleware/api";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { reducer } from "store/reducers/rootReducer";

const enhancer = composeWithDevTools(applyMiddleware(apiMiddleware));

const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
