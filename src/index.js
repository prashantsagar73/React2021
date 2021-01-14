import React from "react";
import ReactDOM from "react-dom";
import name from "./List"
// import "./index.css";

ReactDOM.render(
    <>
    <ol>
        <li>what is your name?</li>
        <li>{name}</li>
    </ol>
    </>, document.getElementById("root"));


