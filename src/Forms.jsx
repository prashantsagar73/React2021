import React, { useState } from "react";


const Forms=()=>{
    // we can also call function or components,object in hooks useState
    const [fullname,setname]= useState({
        fname: "", lname: "", email:"", phone:"",
    });

     const InputEvent= (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

            // const value = event.target.value;
            // const name = event.target.name;
            // after object destructure above two line in one
            const {value,name} = event.target;



        setname((preview) => {
            if (name === 'fname'){
                return{
                fname: value,
                lname: preview.lname,
                email : preview.email,
                phone : preview.phone,
            };
        }else if(name=== 'lname'){
            return{
                fname: preview.fname,
                lname: value,
                email : preview.email,
                phone : preview.phone,

            };
        }else if(name=== 'email'){
            return{
                fname: preview.fname,
                lname: preview.lname,
                email : value,
                phone : preview.phone,

            };
        }else if(name=== 'phone'){
            return{
                fname: preview.fname,
                lname: preview.lname,
                email : preview.email,
                phone : value,

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
        <h4>hello {fullname.fname} {fullname.lname} <br/> {fullname.email} <br/> {fullname.phone}</h4>
        <input type="text" placeholder="Enter your name" onChange={InputEvent} name='fname' value={fullname.fname}/>
        <br/>
        <input type="text" placeholder="Enter your Lastname" onChange={InputEvent} name='lname' value={fullname.lname}/>
        <input type="email" placeholder="Enter your Email" onChange={InputEvent} name='email' value={fullname.email}/>
        <input type="number" placeholder="Enter your Phone number" onChange={InputEvent} name='phone' value={fullname.phone}/>
        <button type="submit">Click Me🤙</button>
        </div>
        </form>
        </>
    );

}


export default Forms; 