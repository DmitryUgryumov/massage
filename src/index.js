import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";

const app = (
  <HashRouter basename="/">
    <App />
  </HashRouter>
);

ReactDOM.render(app, document.getElementById("root"));
