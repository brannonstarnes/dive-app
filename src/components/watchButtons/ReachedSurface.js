import React from "react";
import stringifyTime from "../../calculations/stringifyTime";
import { addLeadingZerosToTimes } from "../../calculations/stringifyTime";
import { Button } from "@mui/material";

function ReachedSurface(props) {
  let RS;
  let stringRS;
  let ascentMillisec; // Time from 'left bottom' to 'reached surface'. This is NOT rounded up.
  let ascent;

  return (
    <Button
      variant="contained"
      onClick={() => [
        (RS = new Date()),
        props.setRS(RS),
        (stringRS = stringifyTime(RS)),
        (ascentMillisec = RS.getTime() - props.LB.getTime()),
        (ascent = addLeadingZerosToTimes(Math.floor(ascentMillisec / 1000))),
        props.makeDiveLogEntry(`RS ${stringRS}, Ascent ::${ascent}`),
      ]}
    >
      Reached Surface
    </Button>
  );
}

export default ReachedSurface;
