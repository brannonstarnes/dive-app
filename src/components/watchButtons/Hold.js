import React from "react";
import stringifyTime from "../../calculations/stringifyTime";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

function Hold(props) {
  let hold;
  let stringHold;
  // let holdTime; //resume - hold = descent

  return (
    <Button
      variant="contained"
      color="warning"
      onClick={() => [
        (hold = new Date()),
        (stringHold = stringifyTime(hold)),
        props.makeDiveLogEntry(`HOLD! ${stringHold}`),
      ]}
    >
      HOLD!
    </Button>
  );
}

Hold.propTypes = {
  makeDiveLogEntry: PropTypes.func,
};

export default Hold;
