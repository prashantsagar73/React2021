import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./card";
import Sdata from "./Sdata";

function ncard(val) {
return(
<Card
   imgsrc={val.imgsrc}
   title= {val.title}
   sname= {val.sname}
   link=  {val.link}
/>);
   
}

ReactDOM.render(
    <>
    <h1 className="heading">Top Netflix series</h1>
   
   {Sdata.map(ncard)}
  
    </>, document.getElementById("root"));


