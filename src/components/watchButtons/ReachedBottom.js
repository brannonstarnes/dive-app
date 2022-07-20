import React from "react";
import stringifyTime from "../../calculations/stringifyTime";
import { roundUpTime } from "../../calculations/stringifyTime";
import { Button } from "@mui/material";

function ReachedBottom(props) {
  let RB;
  let stringRB;
  let descent; //Time from "left surface" to "reached bottom, always rounded UP to nearest minute"

  return (
    <Button
      variant="contained"
      onClick={() => [
        (RB = new Date()),
        (descent = RB.getTime() - props.LS.getTime()),
        (stringRB = stringifyTime(RB)),
        props.makeDiveLogEntry(
          `RB ${stringRB}, Descent :${roundUpTime(descent)} `
        ),
      ]}
    >
      Reached Bottom
    </Button>
  );
}

export default ReachedBottom;
