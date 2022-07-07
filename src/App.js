import React from "react";
import { useState } from "react";
import Header from "./components/header";
import Forms from "./components/forms";
import Clock from "./components/clock";
import ClockButtons from "./components/clockButtons";
import Log from "./components/diveLog";


function App(props) {
  const [diveLog, setDiveLog] = useState([])
  const makeDiveLogEntry= (entry) => {
    let entries = [...diveLog, entry];
    setDiveLog(entries);
  }


  const getBottomTime = (leftSurf, leftBott) => {
    let bottomTime = leftSurf - leftBott
    return bottomTime
  }


  return (
    <>
      <Header />
      <Forms /> 
      <Clock />
      <ClockButtons getBT={getBottomTime}/>
      <Log makeDiveLogEntry={makeDiveLogEntry}/> 
    </>
  ) ;
}

export default App;
