import React from "react"; 
import stringifyTime from "../../calculations/stringifyTime";
import  PropTypes from 'prop-types';

function LeftSurface(props){
    
    let LS; //needs to be state to pass to other components
    let stringLS;
    return (
        <button onClick={()=> 
            [
            props.setIsRunning(true),
            LS = new Date (),
            props.setLS(LS),
            stringLS = stringifyTime(LS),
            props.makeDiveLogEntry(`LS ${stringLS}`)
            ]
        }>Left Surface</button>
    )
}

LeftSurface.propTypes = {
    setIsRunning: PropTypes.func,
    setLS: PropTypes.func,
    makeDiveLogEntry: PropTypes.func
}

export default LeftSurface;