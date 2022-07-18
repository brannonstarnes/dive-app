import React from "react"; 
import stringifyTime from "../../calculations/stringifyTime";
import { addLeadingZerosToTimes } from "../../calculations/stringifyTime";

function ReachedBottom(props){
    
    let RB;
    let stringRB;
    let descent; //RB - LS = descent

    function roundUpDescent(descentTime) {
        let conversion = (descentTime/60000) 
        let newTime = Math.ceil(conversion)
        return addLeadingZerosToTimes(newTime)
    }

    return (
        <button onClick={()=> 
            [
            RB = new Date (),
            descent = (RB.getTime())-(props.LS.getTime()),
            stringRB = stringifyTime(RB),
            props.makeDiveLogEntry(`RB ${stringRB}, Descent :${roundUpDescent(descent)} `)
            ]
        }>Reached Bottom</button>
    )
}

export default ReachedBottom;