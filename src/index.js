import React from "react";
import ReactDOM from "react-dom";
import { add,sub,Multiplication,Division } from "./Calc"
// import name,{work,Passion} from "./List"
// import "./index.css";

ReactDOM.render(
    <>
    <ol>calc
       <li>Sum of two number is: {add (3, 2)} </li>
       <li>subtract of two number is: {sub (3, 2)} </li>
       <li>Multiplication of two number is: {Multiplication (3, 2)} </li>
       <li>Division of two number is: {Division (10, 2)} </li>

    </ol>
    </>, document.getElementById("root"));


