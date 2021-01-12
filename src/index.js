import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// var React = require('react');
// var ReactDOM = require('react-dom');


const fname ="prashant"
const laname = "sagar"
const name ="Happy"
const currDate = new Date();
const currtime = new Date().getTime();
const image1 = "https://source.unsplash.com/daily";
const image2 = "https://source.unsplash.com/WLUHO9A_xik/600x900";
const link = "http://prashantsagar.tech/";




ReactDOM.render(<>
<h1 className="name">Hello, This is prashant sagar here!</h1>
<p className="name">Here is some topic that i want to explore this year</p>
<ul className="name">
    <li>Djago</li>
    <li>React</li>
    <li>AWS</li>
    <li>GITA</li>
    <li>Stock Market</li>

</ul>


{/* use js in React */}
<h3 className="name"> by using java-script {fname + " "+ laname} </h3>


{/* by using temlate literals */}
<h3 className="name">  {`By using temlate literals ${fname} ${laname}`} </h3>

<h1 className="name"> TASK  NO-2 </h1>
<div className="name">
{`My nick name is ${name} \n current date is = ${currDate}`},
{`current time is = ${currtime}`} 

</div>
{/* set on images */}
<div className="div_img">
<h3 className="name" contentEditable= "true">  {`By using temlate literals ${fname} ${laname}`} </h3>

<img src = {image1} alt="Random image"/>

{/* set Random link on any image */}
<a href={link} target="_prashant">
<img src = {image2} alt="Random image"/>
</a>
</div>
{/* css styleing in react */}
<h1 className="name">Hello, This is prashant sagar here!</h1>

</>,
    document.getElementById('root'));


