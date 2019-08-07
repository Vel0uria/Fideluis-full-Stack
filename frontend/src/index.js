import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import * as serviceWorker from "./serviceWorker";
import Router from "./Router";
import ContextProvider from "./services/Context";

ReactDOM.render(
  <ContextProvider>
    <GlobalStyles />
    <Router />
  </ContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
