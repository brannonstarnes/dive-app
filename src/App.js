import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Forms from "./components/Forms";
import Clock from "./components/Clock";
import Log from "./components/Log";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function App() {
  const [bottomTime, setBottomTime] = useState();
  const [depth, setDepth] = useState();
  const [onO2, setOnO2] = useState(false);
  const [diveLog, setDiveLog] = useState([]);
  const [formTSRGD, setFormTSRGD] = useState();
  const [schedule, setSchedule] = useState();
  // const [reachBottom, setRB] = useState(0);

  const getBottomTime = (leftSurf, leftBott) => {
    let bottomTime = leftSurf - leftBott;
    return setBottomTime(bottomTime);
  };

  const makeDiveLogEntry = (entry) => {
    let entries = [...diveLog, entry];
    setDiveLog(entries || "");
  };

  return (
    <>
      <Header />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid red",
        }}
      >
        <Box>
          <Forms
            getBT={getBottomTime}
            setDepth={setDepth}
            setBT={setBottomTime}
            depth={depth}
            BT={bottomTime}
            setFormTSRGD={setFormTSRGD}
            setSchedule={setSchedule}
          />
          <Clock
            makeDiveLogEntry={makeDiveLogEntry}
            diveLog={diveLog}
            setOnO2={setOnO2}
            onO2={onO2}
          />
        </Box>
        <Box textAlign={"right"}>
          <Log
            diveLog={diveLog}
            BT={bottomTime}
            D={depth}
            formTSRGD={formTSRGD}
            schedule={schedule}
          />
        </Box>
      </Container>
    </>
  );
}
App.propTypes = {
  getBT: PropTypes.func,
  setBT: PropTypes.func,
  setDepth: PropTypes.func,
  depth: PropTypes.number,
  BT: PropTypes.number,
  setFormTSRGD: PropTypes.func,
  setSchedule: PropTypes.func,
  diveLog: PropTypes.array,
  setOnO2: PropTypes.func,
  onO2: PropTypes.bool,
};
export default App;
