import React, { useState } from "react";



const Hooks=() => {
    const state = useState();
    const [count,setCount]= useState(0);
// var cont = 1;

const IncNum=()=>{
    setCount(count+100);
//  console.log('clicked'+ count++);

};
    return(
        <>
        <div className='heading'>
        <h1>{count}</h1>
        <button onClick={IncNum}> click me </button>
        </div>
        </>
    );

};

export default Hooks;