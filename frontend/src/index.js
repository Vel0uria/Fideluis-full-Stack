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

serviceWorker.unregister();
