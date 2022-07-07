import React, { useState } from 'react';

function Buttons(props) {
    return(
        <div className={props.divStyle}>
            {props.keypad.map(item => 
                <Button key={item.id}
                    calc={props.calc}
                    addLabel={item.label} 
                    btnStyle={props.btnStyle}
                    buttonItem={item.value}
                />
            )}
        </div>
    );
}

function Button(props) {
    return(
        <button className={props.btnStyle} onClick={() => props.calc(props.buttonItem)}>{props.addLabel}</button>
    );
}

export default Buttons;