import React from "react";

function Log(props){
    
    const mapEntries =(props.diveLog.map(entry => {
        return <li>{entry}</li>
    }))

    return(
        <div id='dive-log-container'>
            <h1> Diving Log </h1>
            <div>
                <h2> Dive Log Stuff Goes Here </h2>
                <h3>{props.D || "0"} fsw</h3>
                <h3>{props.BT || "0"} BT</h3>
                <ul>
                    {mapEntries || ""}
                </ul>
            </div>
        </div>
    )
}

export default Log;