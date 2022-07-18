import React from "react";
import { useEffect } from "react"; 
import stringifyTime from "../../calculations/stringifyTime";

function OnO2(props){

    const buttonStatus = () =>{
        return (props.onO2 ? 'Off O2' : 'On O2') 
    } 

    const switchO2State = () => {
        return (props.onO2 ? props.setOnO2(false) : props.setOnO2(true))
    }

    useEffect(() =>{
        o2ButtonLabel = buttonStatus()
    })

    let o2EventTime;
    let stringO2EventTime;
    let o2ButtonLabel = buttonStatus();

    return (
        <button id='o2Button' onClick={()=> 
            [
            o2EventTime = new Date (),
            switchO2State(),
            stringO2EventTime = stringifyTime(o2EventTime),
            props.makeDiveLogEntry(`${o2ButtonLabel} ${stringO2EventTime}`)
            ]
        }>{o2ButtonLabel}</button>
    )
}

export default OnO2;