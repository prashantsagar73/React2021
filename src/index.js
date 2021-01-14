import React from "react";
import ReactDOM from "react-dom";
import name,{work,Passion} from "./List"
// import "./index.css";

ReactDOM.render(
    <>
    <ol>
        <li>what is your name?</li>
        <li>{name}</li>
        <li>{work}</li>
        <li>{Passion()}</li>

    </ol>
    </>, document.getElementById("root"));


