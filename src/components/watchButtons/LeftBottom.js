import React from "react";
import stringifyTime from "../../calculations/stringifyTime";
import { roundUpTime } from "../../calculations/stringifyTime";
import { Button } from "@mui/material";

function LeftBottom(props) {
  let LB;
  let stringLB;
  let BT;

  return (
    <Button
      variant="contained"
      onClick={() => [
        (LB = new Date()),
        props.setLB(LB),
        (BT = LB.getTime() - props.LS.getTime()),
        (stringLB = stringifyTime(LB)),
        props.makeDiveLogEntry(`LB ${stringLB}, BT :${roundUpTime(BT)}`),
      ]}
    >
      Left Bottom
    </Button>
  );
}

export default LeftBottom;
