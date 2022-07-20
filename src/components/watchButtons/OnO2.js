import React from "react";
import { useEffect } from "react";
import stringifyTime from "../../calculations/stringifyTime";
import { Button } from "@mui/material";

/*The OnO2 button will toggle between the labels "On O2" and "Off O2". If onO2 is true, 'Off O2' is displayed/ if onO2 is false, 'On O2' is displayed. (Think, if I'm not on O2, I want to push the button that puts me ON O2). 

O2 times are extremely important in diving and recompression treatments. Times on o2 must be logged as well as delays (known as deadtime) and off O2 times (called an air break).*/

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
      color="success" //make this change from dull green to bright green when on O2
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

export default OnO2;
