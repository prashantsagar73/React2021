import React, { useState } from "react";

const Todo=()=>{
    const [inputlist,setinputlist]= useState(""); 
    const [items,setitems]= useState([]);

    const ItemEvent=(event)=>{
        setinputlist(event.target.value);
    };
    const listofitems=()=>{
        setitems((olditems)=>{
            return[...olditems,inputlist];
        });
        setinputlist('');

    };
    return(
    <>
    <div className="Main_div">
    <div className="Center_div">
    <br/>
    <h1>ToDo List</h1>
    <br/>
    <input type="text" placeholder="Add a item" value={inputlist} onChange={ItemEvent} />
    <button onClick={listofitems}> + </button>
    <ol>
        {items.map((itemval)=>{
            return( <>
            <div className="todo_style">
            <i clas= "fa fa-times" aria-hidden="true"/>
                <li>{itemval}</li>
                </div>
                </>
            );
        })
        }
    </ol>
    </div>
    </div>
    </>);

};
export default Todo;