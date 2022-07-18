import React from "react"; 
import stringifyTime from "../../calculations/stringifyTime";

function Hold(props){
    
    let hold;
    let stringHold;
    // let holdTime; //resume - hold = descent

    return (
        <button onClick={()=> 
            [
            hold = new Date (),
            // descent = (RB-LS),
            stringHold = stringifyTime(hold),
            props.makeDiveLogEntry(`RB ${stringHold}`)
            ]
        }>HOLD!</button>
    )
}

export default Hold;