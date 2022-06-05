import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import { GlobalStyles } from "./global-styles";
import { BrowserRouter } from "react-router-dom";
import { firebase } from "./lib/firebase.prod";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
