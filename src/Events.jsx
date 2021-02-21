import React, { useState } from "react";

const Events=()=>{
    const purple = "#8e44ad";
    const[bg, change]=useState(purple);
    const[name, changename]=useState("Click Me");

  
    const bgchange=()=>{
        let chng ="#34495e"
        change(chng);
        changename('🤟huree!!!')
    };
    const back=()=>{
        change(purple)
        changename("🧤 we are back");
    };
    return(

        <>
        <div style={{backgroundColor: bg}}>
            <button onClick={bgchange} onDoubleClick={back}>{name}</button>
        </div>
        </>
    );

}

export default Events;