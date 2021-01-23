import React from "react";

function Card(props) {
    // console.log(props);
    return(
        <>
        <div className="cards">
        <div className= "card">
        <img src={props.imgsrc} alt="myPic" className="cardimg" />
        <div className="cardinfo">
          <span className="cardcate">{props.title}</span>
          <h3 className="cardtitle">{props.sname}</h3>
          <a href={props.link} target="blank">
            <button>Watch now</button>
          </a>
       </div>
        </div>
    </div>
        </>
    );
}
export default Card;