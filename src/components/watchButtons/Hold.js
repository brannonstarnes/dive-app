import React from "react"; 
import stringifyTime from "../../calculations/stringifyTime";
import PropTypes from 'prop-types';

function Hold(props){
    let hold;
    let stringHold;
    // let holdTime; //resume - hold = descent

    return (
        <button onClick={()=> 
            [
            hold = new Date (),
            stringHold = stringifyTime(hold),
            props.makeDiveLogEntry(`HOLD! ${stringHold}`)
            ]
        }>HOLD!</button>
    )
}

Hold.propTypes = {
    makeDiveLogEntry: PropTypes.func
}

export default Hold;