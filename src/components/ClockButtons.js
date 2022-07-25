import React, { useState } from "react";
import LeftBottom from "./watchButtons/LeftBottom";
import LeftSurface from "./watchButtons/LeftSurface";
import ReachedBottom from "./watchButtons/ReachedBottom";
import ReachSurface from "./watchButtons/ReachedSurface";
import Hold from "./watchButtons/Hold";
import OnO2 from "./watchButtons/OnO2";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import PropTypes from "prop-types";

function ClockButtons(props) {
  const [LS, setLS] = useState();
  const [LB, setLB] = useState();
  const [RS, setRS] = useState();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <Typography variant="h8">
          <ButtonGroup orientation="vertical" size="large">
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
            <Hold
              makeDiveLogEntry={props.makeDiveLogEntry}
              setOnHold={props.setOnHold}
              onHold={props.onHold}
            />
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
        </Typography>
      </Box>
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
