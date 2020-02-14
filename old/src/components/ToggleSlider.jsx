import React from 'react';
import '../styles/charts.css'
export default function ToggleSlider(props, handleToggle) {
    return (
        
        <div className="toggleContainer">
            <div className="toggleMe">
       <label className="label">
       <div className="label-text">{props.textLinks}</div>
            <div className="toggle">
             <input className="toggle-state" type="checkbox" name="check" value="check" onChange={handleToggle}/>
         <div className="toggle-inner">
         <div className="indicator"></div>
        </div>
        <div className="active-bg"></div>
    </div>
    <div className="label-text">{props.textRechts}</div>
        </label>
    </div>
    </div>
    );

}