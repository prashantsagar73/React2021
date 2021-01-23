import React from "react";
import Card from "./card";
import Sdata from "./Sdata";

const Netflix =()=> (
<>
<h1 className="heading">Top Netflix series</h1>
{Sdata.map((val)=> {
    return(
   <Card
    key ={val.id}
 imgsrc={val.imgsrc}
 title= {val.title}
 sname= {val.sname}
 link=  {val.link}
   />
   );
 })}
 </>
    );
 
export default Netflix;