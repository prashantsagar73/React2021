import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const Counter=()=>{
    const [num, setnum] = useState(0);


    const incNum =()=>{
        setnum(num+1)
    }

    const decNum=()=>{
        if (num > 0){
            setnum(num-1);
        }else{
            alert("you have reached to the lowest value")
            setnum(0);
        }
    }



    return(
        <>
        <div className="Main_div">
        <div className="Center_div">
        <h1>{num}</h1>
        <div className="btn_div">
            <button onClick={incNum}><AddIcon/></button>
            <button onClick={decNum}><DeleteIcon/></button>
            </div>
        </div>
        </div>
        
        </>
    );

}
export default Counter;