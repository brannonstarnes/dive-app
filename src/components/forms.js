import React from "react";

function Forms(){

    return (
        
        <div class='forms-container'>
                <form>
                    <label for='depth'>Depth (fsw): </label>
                    <input class='dive-profile-form' id='depth' type="integer" name='depth'/><br/>
                    <label for='bt'>Bottom Time (min): </label>
                    <input class='dive-profile-form' id='bt' type="integer" name='bt'/><br/>
                    <input type='submit' value='Get T/S'/>
                </form>
            </div>             
    );
    
}
export default Forms;