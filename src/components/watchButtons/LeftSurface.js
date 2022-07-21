import React from "react";
import stringifyTime from "../../calculations/stringifyTime";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

function LeftSurface(props) {
  let LS; //needs to be state to pass to other components
  let stringLS;
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => [
        props.setIsRunning(true),
        (LS = new Date()),
        props.setLS(LS),
        (stringLS = stringifyTime(LS)),
        props.makeDiveLogEntry(`LS ${stringLS}`),
      ]}
    >
      Left Surface
    </Button>
  );
}

LeftSurface.propTypes = {
  setIsRunning: PropTypes.func,
  setLS: PropTypes.func,
  makeDiveLogEntry: PropTypes.func,
};

export default LeftSurface;
