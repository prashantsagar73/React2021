import React, { useState } from "react";


const Forms=()=>{
    // we can also call function or components,object in hooks useState
    const [fullname,setname]= useState({
        fname: "", lname: "",
    });

     const InputEvent= (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

            const value = event.target.value;
            const name = event.target.name;

        setname((preview) => {
            if (name === 'fname'){
                return{
                fname: value,
                lname: preview.lname,
            };
        }else if(name=== 'lname'){
            return{
                fname: preview.fname,
                lname: value,

            };
        }
        });
    };

    // aleart after submiting the form
    const onSubmit =(event)=>{
        event.preventDefault()
        // alert('Form submited');

    };
    return(
        <>
        <form onSubmit={onSubmit}>
        <div>
        <h4>hello {fullname.fname} {fullname.lname} </h4>
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