import React from "react";
import stringifyTime from "../../calculations/stringifyTime";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

function LeftSurface(props) {
  let LS; //needs to be state to pass to other components
  let stringLS;
  return (
    <Button
      variant="contained"
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
