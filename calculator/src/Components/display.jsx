import React, { useState } from 'react';

function Display(props) {
    return(
        <div className={props.divStyle}>
            <p id='result' className={props.finalStyle}>{props.sumValue}</p>
            <input type="text" className={props.inputStyle} 
                onChange={props.giveValue} 
                placeholder={props.displayValue} 
                readOnly
            />
        </div>
    ); 
}

export default Display;