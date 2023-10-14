// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store2 from './store/store2'
import App from "./App";

ReactDOM.render(
  <Provider store={store2}>
    <App />
  </Provider>,
  document.getElementById("root")
);
