import React from "react";
import { useState } from "react";

function Forms(props){

    const [formDepth, setFormDepth] = useState();
    const [formBT, setFormBT] = useState();
    
    const handleSubmit= (e) => {
        e.preventDefault();
        props.setBT(formBT);
        props.setDepth(formDepth);
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
export default Forms;