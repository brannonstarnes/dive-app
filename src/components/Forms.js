import React from "react";
import { useState } from "react";
import {getUsableDepth} from '../tableSchedRGD.js'
import {getChart} from '../tableSchedRGD.js'
import {getSchedule} from '../tableSchedRGD.js'
import {getRGD} from '../tableSchedRGD'
import {chartMap} from "../charts.js";
import PropTypes from "prop-types";

function Forms(props){
    const [formDepth, setFormDepth] = useState();
    const [formBT, setFormBT] = useState();
        
    const handleSubmit= (e) => {
        e.preventDefault();
        var newDepth = getUsableDepth(formDepth) //get corrected depth
        // eslint-disable-next-line react/prop-types
        props.setDepth(newDepth)
        var table = getChart(newDepth, chartMap) //gets chart by using corrected depth
        var calculatedSchedule = getSchedule(formBT, table) //determines which schedule to use in chart 
        // eslint-disable-next-line react/prop-types
        props.setBT(calculatedSchedule)
        const TSRGD = getRGD(table, calculatedSchedule)
        // eslint-disable-next-line react/prop-types
        props.setFormTSRGD(TSRGD)
    }

    return ( 
        <div className='forms-container'>
                <form onSubmit={e => {handleSubmit(e)}}>
                    <label>Depth (fsw): 
                    <input className='dive-profile-form' id='depth' type="integer" name='depth' 
                    onChange={e => setFormDepth(e.target.value)}
                    value={formDepth || ''}
                    />
                    </label><br/>
                    
                    <label>Bottom Time (min): 
                    <input className='dive-profile-form' id='bt' type="integer" name='bt'
                    onChange={e => setFormBT(e.target.value)}
                    value={formBT || ''}
                    />
                    </label><br/>

                    <input className="submitButton" type='submit' value='Get T/S'/>
                </form>
            </div>             
    );
    
}

Forms.propTypes = {
    BT: PropTypes.number,
    setDepth: PropTypes.func,
    setBT: PropTypes.func,
    setFormTSRGD: PropTypes.func,
    formBT: PropTypes.number
}

export default Forms;