import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// var React = require('react');
// var ReactDOM = require('react-dom');

let currDate = new Date();
currDate = currDate.getHours();
let greetings = '';
const image1 = "https://source.unsplash.com/daily";
const image2 = "https://source.unsplash.com/WLUHO9A_xik/600x900";
const link = "http://prashantsagar.tech/";
const rans = {
    backgroundColor: "rgb(127, 255, 212)",

}
const ss ={ };

if (currDate >= 1 && currDate < 12){
    greetings="Good Morining"
    ss.color = 'green';
}else if( currDate >=12 && currDate <19) {
    greetings ="Good afternoon"
    ss.color = 'orange';

}else if(currDate >= 19 && currDate <24 ){
    greetings="Good night"
    ss.color = 'black';


}else{
    greetings="Please set your time first"
}

ReactDOM.render(<>
<div className="name">
    <h1>Hello sir,<span style={ss}>{greetings}</span></h1>
</div>

</>,
    document.getElementById('root'));


