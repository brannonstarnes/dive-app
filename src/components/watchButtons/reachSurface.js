import React from "react";
import stringifyTime from '../../calculations/stringifyTime'

function ReachSurface(props){
    
    let RS;
    let stringRS;
    // let ascent // RS-LB = ascent

    return (
        <button onClick={()=> 
            [
            RS = new Date (),
            stringRS = stringifyTime(RS),
            // ascent = (RS-LS),
            props.makeDiveLogEntry(`RS ${stringRS}`) // will include ascent time in entry
            ]
        }>Reached Surface</button>
    )
}

export default ReachSurface;