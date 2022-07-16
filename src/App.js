import React from "react";
import { useState } from "react";
import Header from "./components/header";
import Forms from "./components/forms";
import Clock from "./components/clock";
import Log from "./components/diveLog";

function App(props) {

  
  const [bottomTime, setBottomTime] = useState([]) 
  const [depth, setDepth] = useState([])
  const [diveLog, setDiveLog] = useState([])
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
      <Clock makeDiveLogEntry={makeDiveLogEntry} diveLog={diveLog}/>
      <Log diveLog={diveLog} BT={bottomTime} D={depth} formTSRGD={formTSRGD} schedule={schedule}/> 
    </>
  ) ;
}

export default App;
