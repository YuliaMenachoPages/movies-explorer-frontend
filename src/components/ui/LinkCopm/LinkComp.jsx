import './LinkComp.css';
import {NavLink} from "react-router-dom";

function LinkComp({kind, direction, children, target, rel}) {
    return(
        <div className={`linkWrapper_kind_${kind} linkWrapper`}>
        <NavLink className={`link_kind_${kind} link`} to={direction} target={target} rel={rel}>{children}</NavLink>
        </div>
    )
}

export default LinkComp;
