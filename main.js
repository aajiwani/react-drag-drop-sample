import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App.jsx";
import { Provider } from "react-redux";
import store from "./src/Store/index.jsx";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
