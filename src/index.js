import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
import Routes from "./Routes";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { registration } from "./store/reducers/registerReducer";

const store = createStore(registration, applyMiddleware(thunk));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
