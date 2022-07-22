import React, { useState, useEffect } from "react";
import ClockButtons from "./ClockButtons";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//Credit: https://w3collective.com/react-stopwatch/
function Clock(props) {
  const [time, setClockTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        //setInterval(func, milliseconds)
        setClockTime((previousTime) => previousTime + 10); //setTimeout(func, milliseconds)
      }, 10);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <Container
        className="stopwatchContainer"
        maxWidth="lg"
        sx={{ margin: "8px", border: "1px solid blue" }}
      >
        <Box
          sx={{
            bgcolor: "black",
            color: "white",
            height: "7vh",
            textAlign: "center",
            padding: "5px",
            marginBottom: "8px",
          }}
        >
          <Typography variant="h3">
            <Box className="timeDisplay">
              <span className="clockTime" id="hours">
                {("0" + Math.floor((time / (1000 * 60 * 60)) % 60)).slice(-2)}
              </span>
              :
              <span className="clockTime" id="minutes">
                {("0" + Math.floor((time / (1000 * 60)) % 60)).slice(-2)}
              </span>
              :
              <span className="clockTime" id="seconds">
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
              </span>
              {/* <span className="clockTime" id="milliseconds">{("0" + Math.floor((time /10) % 100)).slice(-2)}</span> */}
            </Box>
          </Typography>
        </Box>

        <ClockButtons
          makeDiveLogEntry={props.makeDiveLogEntry}
          setIsRunning={setIsRunning}
          setClockTime={setClockTime}
          diveLog={props.diveLog}
          setOnO2={props.setOnO2}
          onO2={props.onO2}
        />
      </Container>
    </>
  );
}

Clock.propTypes = {
  time: PropTypes.number,
  makeDiveLogEntry: PropTypes.func,
  diveLog: PropTypes.array,
  setFormTSRGD: PropTypes.func,
  setOnO2: PropTypes.func,
  onO2: PropTypes.bool,
};

export default Clock;
