import React from "react";
import { useState } from "react";
import Header from "./components/header";
import Forms from "./components/forms";
import Clock from "./components/clock";
import Log from "./components/diveLog";
import PropTypes from "prop-types";

function App() {
  const [bottomTime, setBottomTime] = useState([]);
  const [depth, setDepth] = useState([]);
  const [onO2, setOnO2] = useState(false);
  const [diveLog, setDiveLog] = useState([]);
  const [formTSRGD, setFormTSRGD] = useState();
  const [schedule, setSchedule] = useState();
  // const [reachBottom, setRB] = useState(0);


  const getBottomTime = (leftSurf, leftBott) => {
    let bottomTime = leftSurf - leftBott
    return setBottomTime(bottomTime)
  }

  const makeDiveLogEntry= (entry) => {
    let entries = [...diveLog, entry];
      setDiveLog(entries || "");
  }

  return (
    <>
      <Header />
      <Forms getBT={getBottomTime} setDepth={setDepth} setBT={setBottomTime} depth={depth} BT={bottomTime} setFormTSRGD={setFormTSRGD} setSchedule={setSchedule}/> 
      <Clock makeDiveLogEntry={makeDiveLogEntry} diveLog={diveLog} setOnO2={setOnO2} onO2={onO2}/>
      <Log diveLog={diveLog} BT={bottomTime} D={depth} formTSRGD={formTSRGD} schedule={schedule}/> 
    </>
  ) ;
}
App.PropTypes ={
  getBT: PropTypes.func.isRequired,
  setBT: PropTypes.func.isRequired,
  setDepth: PropTypes.func.isRequired,
  depth: PropTypes.number.isRequired,
  BT: PropTypes.object.isRequired,
  setFormTSRGD: PropTypes.func.isRequired,
  setSchedule: PropTypes.func.isRequired,
  diveLog: PropTypes.array.isRequired, 
  setOnO2: PropTypes.func.isRequired,
  onO2: PropTypes.object.isRequired
}
export default App;
