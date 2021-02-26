import React, { useState } from "react";


const Forms=()=>{
    const [name,setname]= useState(" ");
     const [FullName,setfullname]= useState(" ");
 

     const InputEvent=(events)=>{
        console.log(events.target.value);
        setname(events.target.value);
    };
    
    const submit=()=>{
        setfullname(name);

    };
    return(
        <>
        <form onSubmit={onsubmit}>
        <div>
        <h4>hello {FullName}</h4>
        <input type="text" placeholder="Enter your name" onChange={InputEvent} value={name}/>
        <button type="submit">Click Me🤙</button>
        </div>
        </form>
        </>
    );

}


export default Forms; 