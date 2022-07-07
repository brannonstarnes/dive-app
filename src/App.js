import React from "react";
import { useState } from "react";
import Header from "./components/header";
import Forms from "./components/forms";
import Clock from "./components/clock";
import ClockButtons from "./components/clockButtons";
import Log from "./components/diveLog";

//TO DO: get depth and bt from the Form, pass it to Log to display
function App(props) {
  
  const [bottomTime, setBottomTime] = useState([]) 
  const [depth, setDepth] = useState([])
  const [onO2, setOnO2] = useState([])
  const [leftSurface, setLS] = useState([])

  const getBottomTime = (leftSurf, leftBott) => {
    let bottomTime = leftSurf - leftBott
    return setBottomTime(bottomTime)
  }


  return (
    <>
      <Header />
      <Forms getBT={getBottomTime} setDepth={setDepth} setBT={setBottomTime} depth={depth} BT={bottomTime}/> 
      <Clock />
      <ClockButtons getBT={getBottomTime} setDepth={setDepth} setOnO2={setOnO2} setLS={setLS} />
      <Log LS={leftSurface} BT={bottomTime} D={depth} onO2={onO2} /> 
    </>
  ) ;
}

export default App;
