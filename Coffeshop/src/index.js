import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./assets/scss/style.scss";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import reducer from "./redux/reducers/index";
const store = configureStore(reducer);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
