import React from "react";


function Log(props){

     
    const mapEntries =(props.diveLog.map(entry => {
        return <li key={entry}>{entry}</li>
    }))

    return(
        <div id='dive-log-container'>
            <h1> Diving Log </h1>
            <div>
                <h3>{props.D || "0"} fsw</h3>
                <h3>{props.BT || "0"} BT</h3>
                <ul>
                    {mapEntries || ""}
                </ul>
            </div>
            <div className="tableSchedRGD">
                <h2>T/S: {props.D}/{props.schedule}{props.formTSRGD}</h2>
            </div>
        </div>
    )
}

export default Log;