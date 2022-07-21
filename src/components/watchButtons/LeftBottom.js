import React from "react";
import stringifyTime from "../../calculations/stringifyTime";
import { roundUpTime } from "../../calculations/stringifyTime";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

function LeftBottom(props) {
  let LB;
  let stringLB;
  let BT;

  return (
    <Button
      variant="contained"
      color="primary"
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

LeftBottom.propTypes = {
  LS: PropTypes.object,
  setLB: PropTypes.func,
  makeDiveLogEntry: PropTypes.func,
};

export default LeftBottom;
