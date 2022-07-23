import React from "react"; 
import stringifyTime from "../../calculations/stringifyTime";


/* dssfsd */
function Hold(props){
    let hold;
    let stringHold;
    // let holdTime; //resume - hold = descent

    return (
        <button onClick={()=> 
            [
            hold = new Date (),
            stringHold = stringifyTime(hold),
            props.makeDiveLogEntry(`HOLD! ${stringHold}`)
            ]
        }>HOLD!</button>
    )
}

export default Hold;