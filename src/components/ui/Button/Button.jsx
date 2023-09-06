import React from "react";
import './Button.css';

function Button({kind, disabled, onClick, type, form, children, ...props}) {

    return (
        <button
            className={`button_type_${kind} button`}
            disabled={disabled}
            onClick={onClick}
            type={type}
            form={form}
        >{children}
        </button>
    );
}

export default Button
