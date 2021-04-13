import React from "react";
import ReactDOM from "react-dom";

import "./styles/index.css";
import "./styles/colors.css";
import "./styles/icons.css";
import "./styles/table.css";

import "bulma/css/bulma.min.css";
import "animate.css/animate.css";

import reportWebVitals from "./reportWebVitals";
import HomePage from "./layouts/HomePage";

ReactDOM.render(<HomePage />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
