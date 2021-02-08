import React from 'react';
import "./index.css";


const SlotM=(props)=>{
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;
    let {x,y,z} =props;
    if ( (x===y) && (y===z)){
    return(
        <>
        <div className = "card">
        <h1> {x}{y}{z}</h1>
        <h1> This is Maching</h1>
        <hr></hr>
</div>
        </>
    );
    }else{ return(
        <>
        <div className = "card">
        <h1> {x}{y}{z}</h1>
        <h1> This is  Not Maching</h1>
        <hr></hr>
</div>
        </>
    );

    }
    }
const Slot=() =>{
    
    return(<>
    <h1 className="heading">Welcome to <span style= { {fontWeight: 'bold'} }>Slot Machine Game</span> </h1>
    <div>
    <SlotM x='🤩' y='🤩' z='🤩' />
    <SlotM x='🤖' y='😀' z='😀' />
    <SlotM x='🤡' y='🤖' z='🤡' />
    <SlotM x='🤖' y='🤖' z='🤖' />

    </div>
    </>);

}


export default Slot;