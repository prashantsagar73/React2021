import React from "react";

function Mini(){

let currDate = new Date();
currDate = currDate.getHours();
let greetings=" ";
const ss ={ };

if (currDate >= 1 && currDate < 12){
    greetings="Good Morining"
    ss.color = 'green';
}else if( currDate >=12 && currDate <19) {
    greetings ="Good afternoon"
    ss.color = 'orange';
}else if(currDate >= 19 && currDate <24) {
    greetings="Good night"
    ss.color = 'black';
}else{
    greetings="Please set your time first"
} 

return(
<>
<div>
<h1>Hello sir,<span style={ss}>{greetings}</span></h1>
</div>
</>
);
}
export default Mini;