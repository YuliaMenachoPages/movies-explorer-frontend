import {HashLink} from "react-router-hash-link";
import './HashLinkComp.css';

function HashLinkComp({kind, direction, children}) {
    return (
        <div className={`hashLinkWrapper_kind_${kind} hashLinkWrapper`}>
            <HashLink smooth className={`hashLink_kind_${kind} hashLink`} to={direction}>{children}</HashLink>
        </div>
    )
}

export default HashLinkComp;
