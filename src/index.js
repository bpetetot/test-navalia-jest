import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
const todos = ["todo1", "todo2"];

ReactDOM.render(<App todos={todos} />, document.getElementById("root"));
