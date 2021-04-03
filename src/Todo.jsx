import React from "react";

const Todo=()=>{
    return(
    <>
    <div className="Main_div">
    <div className="Center_div">
    <br/>
    <h1>ToDo List</h1>
    <br/>
    <input type="text" placeholder="Add a item" />
    <button> + </button>
    <ol>
        <li>Buy a apple </li>
    </ol>
    </div>
    </div>
    </>);

};
export default Todo;