import React from "react";
import PropTypes from 'prop-types';

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

Log.propTypes = {
    diveLog: PropTypes.array,
    D: PropTypes.number,
    schedule: PropTypes.number,
    formTSRGD: PropTypes.string,
    BT: PropTypes.number
}

export default Log;