import React, { useState } from "react";

const Dclocl=()=>{

let Dig = new Date().toLocaleTimeString();
const [ctime,updatetime]= useState(Dig);


const Finaltime=()=>{
    Dig = new Date().toLocaleTimeString();
    updatetime(Dig);
};
setInterval(Finaltime,0);
    return(
        <>

        <h1 className='heading'> Digital clock</h1>
        <div>
            <h2>{Dig}</h2>
        </div>
        </>

    );

}

export default Dclocl;