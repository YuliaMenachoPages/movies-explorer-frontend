import {NavLink} from "react-router-dom";
import './NavLinkComp.css';

function NavLinkComp({kind, direction, children, onClick}) {
    return (
        <div className={`navLinkWrapper_kind_${kind} navLinkWrapper`}>
            <NavLink className={`navLink_kind_${kind} navLink`} to={direction} onClick={onClick}>{children}</NavLink>
        </div>
    )
}

export default NavLinkComp;
