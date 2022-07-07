import React, { useState } from 'react';

function Display(props) {
    return(
        <div className={props.divStyle}>
            <h3 className={props.finalStyle}>{props.sumValue}</h3>
            <input type="text" className={props.inputStyle} 
                onChange={props.giveValue} 
                placeholder={props.displayValue} 
                readOnly
            />
        </div>
    ); 
}

export default Display;