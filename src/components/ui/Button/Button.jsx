import React from "react";
import './Button.css';

function Button({kind, disabled, onClick, type, children}) {

    return (
        <button
            className={`button_type_${kind} button`}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >{children}
        </button>
    );
}

export default Button
