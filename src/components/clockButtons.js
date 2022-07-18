import React, { useState } from "react";
import LeftBottom from "./watchButtons/leftBottom";
import LeftSurface from "./watchButtons/leftSurface";
import ReachedBottom from "./watchButtons/reachBottom";
import ReachSurface from "./watchButtons/reachSurface";
import Hold from "./watchButtons/hold";
import OnO2 from "./watchButtons/onO2";


function ClockButtons(props){
 
    const [LS, setLS] = useState();
    const [LB, setLB] = useState();
    const [RS, setRS] = useState();

    return(
        <>
            <LeftSurface setLS={setLS} setIsRunning={props.setIsRunning} makeDiveLogEntry={props.makeDiveLogEntry}/>
            
            <ReachedBottom makeDiveLogEntry={props.makeDiveLogEntry} LS={LS}/>
            
            <LeftBottom setLB={setLB} makeDiveLogEntry={props.makeDiveLogEntry} LS={LS} />
            
            <ReachSurface setRS={setRS} makeDiveLogEntry={props.makeDiveLogEntry} LB={LB}/>
            
            <Hold makeDiveLogEntry={props.makeDiveLogEntry}/>
            
            <OnO2 setOnO2={props.setOnO2} onO2={props.onO2} makeDiveLogEntry={props.makeDiveLogEntry} RS={RS}/>
            
            <button onClick={()=>props.setIsRunning(false)}>STOP</button>
            
            <button onClick={()=>props.setClockTime(0)}>Reset</button>
        </>
    )
}

export default ClockButtons;