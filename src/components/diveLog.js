import React from "react";
import { useState } from "react";

function Log(props){
    
    const [diveLog, setDiveLog] = useState([])
    
    const makeDiveLogEntry= (entry) => {
    let entries = [...diveLog, entry];
    setDiveLog(entries);
  }
    
    // const log = makeDiveLogEntry()
    // const mapEntries = (log.map(entry => {
    //     return <li>{entry}</li>
    // }))


    return(
        <div id='dive-log-container'>
            <title> Diving Log </title>
            <div>
                <h3> Dive Log Stuff Goes Here </h3>
                <h1>{props.D || "0"} fsw</h1>
                <h1>{props.BT || "0"} BT</h1>
                {/* <ul>
                    {mapEntries}
                </ul> */}
            </div>
        </div>
    )
}

export default Log;