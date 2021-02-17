import React, { useState } from "react";

const Hooks1=()=>
{
    let time = new Date().toLocaleTimeString();
    const [ctime, settime]=useState(time);

    const Utime=()=>{
        time = new Date().toLocaleTimeString();
        settime(time)
    }
    return(
    <>
    <div className='heading'>
    <h1>Click here to get time!
    <p>{ctime}</p>
    </h1>
    
    <button onClick={Utime}>Click here</button>

    </div>
    </>
    );
};

export default Hooks1;