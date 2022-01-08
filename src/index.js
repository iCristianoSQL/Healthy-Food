import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./styles/global";
import Routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
