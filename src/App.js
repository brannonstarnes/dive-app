import React from "react";
import Header from "./components/header";
import Forms from "./components/forms";
import Clock from "./components/clock";
import ClockButtons from "./components/clockButtons";
import Log from "./components/diveLog";

function App() {
  return (
    <>
      <Header />
      <Forms /> 
      <Clock />
      <ClockButtons />
      <Log /> 
    </>
  ) ;
}

export default App;
