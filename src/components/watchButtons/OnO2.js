import React from "react";
import { useEffect } from "react";
import stringifyTime from "../../calculations/stringifyTime";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

function OnO2(props) {
  const buttonStatus = () => {
    return props.onO2 ? "Off O2" : "On O2";
  };

  const switchO2State = () => {
    return props.onO2 ? props.setOnO2(false) : props.setOnO2(true);
  };

  useEffect(() => {
    o2ButtonLabel = buttonStatus();
  });

  let o2EventTime;
  let stringO2EventTime;
  let o2ButtonLabel = buttonStatus();

  return (
    <Button
      variant="contained"
      color="success"
      id="o2Button"
      onClick={() => [
        (o2EventTime = new Date()),
        switchO2State(),
        (stringO2EventTime = stringifyTime(o2EventTime)),
        props.makeDiveLogEntry(`${o2ButtonLabel} ${stringO2EventTime}`),
      ]}
    >
      {o2ButtonLabel}
    </Button>
  );
}

OnO2.propTypes = {
  makeDiveLogEntry: PropTypes.func,
  onO2: PropTypes.bool,
  setOnO2: PropTypes.func,
};
export default OnO2;
