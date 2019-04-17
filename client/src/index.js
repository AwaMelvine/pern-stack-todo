import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import logger from "redux-logger";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
