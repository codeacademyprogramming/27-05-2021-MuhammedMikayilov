import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./assets/scss/style.scss";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import reducer from "./redux/reducers/index";
const store = configureStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
