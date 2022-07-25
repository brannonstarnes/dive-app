import React, { useState } from "react";
import LeftBottom from "./watchButtons/LeftBottom";
import LeftSurface from "./watchButtons/LeftSurface";
import ReachedBottom from "./watchButtons/ReachedBottom";
import ReachSurface from "./watchButtons/ReachedSurface";
import Hold from "./watchButtons/Hold";
import OnO2 from "./watchButtons/OnO2";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function ClockButtons(props) {
  const [LS, setLS] = useState();
  const [LB, setLB] = useState();
  const [RS, setRS] = useState();

  return (
    <>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
        size="small"
        sx={{ width: "15%" }}
      >
        <LeftSurface
          setLS={setLS}
          setIsRunning={props.setIsRunning}
          makeDiveLogEntry={props.makeDiveLogEntry}
        />

        <ReachedBottom makeDiveLogEntry={props.makeDiveLogEntry} LS={LS} />

        <LeftBottom
          setLB={setLB}
          makeDiveLogEntry={props.makeDiveLogEntry}
          LS={LS}
        />

        <ReachSurface
          setRS={setRS}
          makeDiveLogEntry={props.makeDiveLogEntry}
          LB={LB}
        />
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
        size="small"
        sx={{ width: "15%" }}
      >
        <Hold makeDiveLogEntry={props.makeDiveLogEntry} />

        <OnO2
          setOnO2={props.setOnO2}
          onO2={props.onO2}
          makeDiveLogEntry={props.makeDiveLogEntry}
          RS={RS}
        />

        <Button
          variant="contained"
          color="error"
          onClick={() => props.setIsRunning(false)}
        >
          STOP
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.setClockTime(0)}
        >
          Reset
        </Button>
      </ButtonGroup>
    </>
  );
}

ClockButtons.propTypes = {
  LS: PropTypes.object,
  makeDiveLogEntry: PropTypes.func,
  setClockTime: PropTypes.func,
  setIsRunning: PropTypes.func,
  setOnO2: PropTypes.func,
  onO2: PropTypes.bool,
};

export default ClockButtons;
