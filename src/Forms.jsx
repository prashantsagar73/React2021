import React, { useState } from "react";


const Forms=()=>{
    const [name,setname]= useState(" ");
     const [FullName,setfullname]= useState(" ");
     const [Lastname,setlastname]= useState(" ");
     const [Getlastname, Getlastnamefinal]= useState();

     const InputEvent=(event)=>{
        console.log(event.target.value);
        setname(event.target.value);
    };
    const InputEvent2=(event)=>{
        setlastname(event.target.value);

    }
    
    const onSubmit =(event)=>{
        event.preventDefault()
        setfullname(name);
        Getlastnamefinal(Lastname);

    };
    return(
        <>
        <form onSubmit={onSubmit}>
        <div>
        <h4>hello {FullName} {Getlastname}</h4>
        <input type="text" placeholder="Enter your name" onChange={InputEvent} value={name}/>
        <br/>
        <input type="text" placeholder="Enter your Lastname" onChange={InputEvent2} value={Lastname}/>
        <button type="submit">Click Me🤙</button>
        </div>
        </form>
        </>
    );

}


export default Forms; 