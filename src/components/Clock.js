import React, {useState, useEffect} from "react";
import ClockButtons from "./ClockButtons";
import PropTypes from 'prop-types';

//Credit: https://w3collective.com/react-stopwatch/
function Clock(props){
    const [time, setClockTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() =>{
        let interval;
        if (isRunning) {
            interval = setInterval(()=>{ //setInterval(func, milliseconds)
                setClockTime((previousTime) => previousTime + 10); //setTimeout(func, milliseconds)
            }, 10);
        } else if (!isRunning) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);
    
    
    return(
        <div className="stopwatchContainer">
            <span className="timeDisplay">
                <span className="clockTime" id="hours">{("0" + Math.floor((time /600000) % 60)).slice(-2)}</span>:
                <span className="clockTime" id="minutes">{("0" + Math.floor((time /60000) % 60)).slice(-2)}</span>:
                <span className="clockTime" id="seconds">{("0" + Math.floor((time /1000) % 60)).slice(-2)}</span>
                {/* <span className="clockTime" id="milliseconds">{("0" + Math.floor((time /10) % 100)).slice(-2)}</span> */}
            </span>
            <ClockButtons makeDiveLogEntry={props.makeDiveLogEntry} setIsRunning={setIsRunning} setClockTime={setClockTime} diveLog={props.diveLog} setOnO2={props.setOnO2} onO2={props.onO2}/>
        </div>
        )     
    }
    
    Clock.propTypes = {
        time: PropTypes.number,
        makeDiveLogEntry: PropTypes.func,
        diveLog: PropTypes.array,
        setFormTSRGD: PropTypes.func,
        setOnO2: PropTypes.func,
        onO2: PropTypes.bool
    } 
    
    
    export default Clock;