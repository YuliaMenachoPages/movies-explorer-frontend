import React, {Children, cloneElement } from "react";
import "./Header.css";

function Header({children, ...props}) {
    return (
        <header className="header">
            {Children.map(children, (child) => {
               return cloneElement(child, {
                    ...props})
            })}
        </header>
    )
}

export default Header;
