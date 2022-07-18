import React, { useEffect, useState } from "react";
import LeftBottom from "./watchButtons/leftBottom";
import LeftSurface from "./watchButtons/leftSurface";
import ReachedBottom from "./watchButtons/reachBottom";
import ReachSurface from "./watchButtons/reachSurface";
import Hold from "./watchButtons/hold";
import OnO2 from "./watchButtons/onO2";


function ClockButtons(props){
    //TO DO: bug - first LS log entry is blank, then the correct entry is made on second click

    // const getDescent = (reachBottom, leftSurface) => {
    //     return reachBottom - leftSurface
    //   }
    const [LS, setLS] = useState();
   
    return(
        <>
            <LeftSurface setLS={setLS} setIsRunning={props.setIsRunning} makeDiveLogEntry={props.makeDiveLogEntry}/>
            <ReachedBottom makeDiveLogEntry={props.makeDiveLogEntry} LS={LS}/>
            <LeftBottom makeDiveLogEntry={props.makeDiveLogEntry} />
            <ReachSurface makeDiveLogEntry={props.makeDiveLogEntry}/>
            <Hold makeDiveLogEntry={props.makeDiveLogEntry}/>
            <OnO2 setOnO2={props.setOnO2} onO2={props.onO2} makeDiveLogEntry={props.makeDiveLogEntry}/>
            <button onClick={()=>props.setIsRunning(false)}>STOP</button>
            <button onClick={()=>props.setTime(0)}>Reset</button>
        </>
    )
}

export default ClockButtons;