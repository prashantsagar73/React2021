import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./card";
import Sdata from "./Sdata";

// function ncard(val) {
// return(

   
// }

ReactDOM.render(
    <>
    <h1 className="heading">Top Netflix series</h1>
   
   {Sdata.map((val)=> {
      return(
      <Card
   imgsrc={val.imgsrc}
   title= {val.title}
   sname= {val.sname}
   link=  {val.link}
     />
     );
   })}
  
    </>, document.getElementById("root"));


// const fname=(a,b)=> a+b;
// this is fat Arrow (=>) Function 
// insted of function we fat arrow function 