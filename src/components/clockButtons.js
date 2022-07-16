import React, { useEffect } from "react";
import LeftBottom from "./watchButtons/leftBottom";
import LeftSurface from "./watchButtons/leftSurface";
import ReachedBottom from "./watchButtons/reachBottom";
import ReachSurface from "./watchButtons/reachSurface";

function ClockButtons(props){
    //TO DO: bug - first LS log entry is blank, then the correct entry is made on second click

    // const getDescent = (reachBottom, leftSurface) => {
    //     return reachBottom - leftSurface
    //   }

   
    return(
        <>
            <LeftSurface setIsRunning={props.setIsRunning} makeDiveLogEntry={props.makeDiveLogEntry}/>
            <ReachedBottom makeDiveLogEntry={props.makeDiveLogEntry}/>
            <LeftBottom makeDiveLogEntry={props.makeDiveLogEntry} />
            <ReachSurface makeDiveLogEntry={props.makeDiveLogEntry}/>
            <button>HOLD!</button>
            <button>On O2</button>
            <button onClick={()=>props.setIsRunning(false)}>STOP</button>
            <button onClick={()=>props.setTime(0)}>Reset</button>
        </>
    )
}

export default ClockButtons;