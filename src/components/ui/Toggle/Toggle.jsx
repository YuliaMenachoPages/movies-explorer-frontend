import './Toggle.css';
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

function Toggle(props) {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/movies') {
            props.setTogglerStatus(localStorage.getItem('togglerStatus') === "true");
        }
    },[] );
    function onToggle(e) {
        props.setTogglerStatus(e.target.checked)
        props.handleToggle(e.target.checked)

        if (location.pathname === '/movies') {
            localStorage.setItem('togglerStatus', e.target.checked);
            }
    }

    return (
        <fieldset className='toggle'>
            <label className="toggle__switch">
                <input checked={props.togglerStatus} type="checkbox" className="toggle__input" name="toggle" onChange={onToggle}/>
                <span className="toggle__slider"></span>
            </label>
            <p className="toggle__text">Короткометражки</p>
        </fieldset>
    )
}

export default Toggle;
