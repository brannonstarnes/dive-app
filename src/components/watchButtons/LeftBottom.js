import React from "react";
import stringifyTime from '../../calculations/stringifyTime'
import { roundUpTime } from "../../calculations/stringifyTime";
import PropTypes from 'prop-types';

function LeftBottom(props){
    let LB;
    let stringLB;
    let BT;

    return (
        <button onClick={()=> 
            [
            LB = new Date (),
            props.setLB(LB),
            BT = (LB.getTime())-(props.LS.getTime()),
            stringLB = stringifyTime(LB),
            props.makeDiveLogEntry(`LB ${stringLB}, BT :${roundUpTime(BT)}`)
            ]
        }>Left Bottom</button>
    )
}

LeftBottom.propTypes = {
    LS: PropTypes.node,
    setLB: PropTypes.func,
    makeDiveLogEntry: PropTypes.func
}

export default LeftBottom;