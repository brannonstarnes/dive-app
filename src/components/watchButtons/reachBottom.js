import React from "react"; 
import stringifyTime from "../../calculations/stringifyTime";

function ReachedBottom(props){
    
    let RB;
    let stringRB;
    // let descent; //RB - LS = descent

    return (
        <button onClick={()=> 
            [
            RB = new Date (),
            // descent = (RB-LS),
            stringRB = stringifyTime(RB),
            props.makeDiveLogEntry(`RB ${stringRB}`)
            ]
        }>Reached Bottom</button>
    )
}

export default ReachedBottom;