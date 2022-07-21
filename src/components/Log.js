import React from "react";
import Typography from "@mui/material/Typography";
function Log(props) {
  const mapEntries = props.diveLog.map((entry) => {
    return <li key={entry}>{entry}</li>;
  });

  return (
    <Typography variant="h6">
      <div id="dive-log-container">
        <h1> Diving Log </h1>
        <div>
          <h3>{props.D || "0"} fsw</h3>
          <h3>{props.BT || "0"} BT</h3>
          <div className="tableSchedRGD">
            <h2>
              T/S: {props.D}/{props.schedule}
              {props.formTSRGD}
            </h2>
          </div>
          <ul>{mapEntries || ""}</ul>
        </div>
      </div>
    </Typography>
  );
}

export default Log;