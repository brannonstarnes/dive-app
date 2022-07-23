import React, { useState } from "react";
import LeftBottom from "./watchButtons/LeftBottom";
import LeftSurface from "./watchButtons/LeftSurface";
import ReachedBottom from "./watchButtons/ReachedBottom";
import ReachSurface from "./watchButtons/ReachedSurface";
import Hold from "./watchButtons/Hold";
import OnO2 from "./watchButtons/OnO2";


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