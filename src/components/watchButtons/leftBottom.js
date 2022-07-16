import React from "react";
import stringifyTime from '../../calculations/stringifyTime'

function LeftBottom(props){
    
    let LB;
    let stringLB;
    // let bottomTime // LB-LS = BT

    // useEffect(()=>{
    //     props.makeDiveLogEntry((`LB ${diveLogDict[LB]}` ))
    // })

    return (
        <button onClick={()=> 
            [
            LB = new Date (),
            stringLB = stringifyTime(LB),
            // bottomTime = (LB-LS),
            props.makeDiveLogEntry(`LB ${stringLB}`)
            ]
        }>Left Bottom</button>
    )
}

export default LeftBottom;