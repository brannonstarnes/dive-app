import React from "react";
import stringifyTime from "../../calculations/stringifyTime";
import { Button } from "@mui/material";
import { useEffect } from "react";
import PropTypes from "prop-types";

/* A hold is a stoppage or delay in descent or ascent. This may be due to a middle ear squeeze as pressure increases, etc. Once the problem that caused the hold has been dealt with, the dive can resume.This is especially important on ascent, as delays on ascent can cause unexpected procedural/deco status changes. */

function Hold(props) {
  const buttonStatus = () => {
    return props.onHold ? "Resume Dive" : "HOLD!";
  };

  const switchHoldState = () => {
    return props.onHold ? props.setOnHold(false) : props.setOnHold(true);
  };

  useEffect(() => {
    holdButtonLabel = buttonStatus();
  });

  let hold;
  let stringHold;
  // let holdTime; //resume - hold = descent
  let holdButtonLabel = buttonStatus();

  return (
    <Button
      variant="contained"
      color="warning"
      onClick={() => [
        (hold = new Date()),
        switchHoldState(),
        (stringHold = stringifyTime(hold)),
        props.makeDiveLogEntry(`${holdButtonLabel} ${stringHold}`),
      ]}
    >
      {holdButtonLabel}
    </Button>
  );
}

Hold.propTypes = {
  makeDiveLogEntry: PropTypes.func,
};

export default Hold;
