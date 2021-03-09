import React, { useState } from "react";


const Forms=()=>{
    const [fullname,setname]= useState({
        fname: '', lname: ''
    });
    

     const InputEvent=(event)=>{
        console.log(event.target.value);
        setname(event.target.value);
    };


    
    // aleart after submiting the form
    const onSubmit =(event)=>{
        event.preventDefault()
        alert('Form submited');

    };
    return(
        <>
        <form onSubmit={onSubmit}>
        <div>
        <h4>hello {fullname.lname} {fullname.fname} </h4>
        <input type="text" placeholder="Enter your name" onChange={InputEvent} name='fname' value={fullname.fname}/>
        <br/>
        <input type="text" placeholder="Enter your Lastname" onChange={InputEvent} name='lname' value={fullname.lname}/>
        <button type="submit">Click Me🤙</button>
        </div>
        </form>
        </>
    );

}


export default Forms; 