import React from "react";
import ReactDOM from "react-dom";
import name,{work} from "./List"
// import "./index.css";

ReactDOM.render(
    <>
    <ol>
        <li>what is your name?</li>
        <li>{name}</li>
        <li>{work}</li>

    </ol>
    </>, document.getElementById("root"));


