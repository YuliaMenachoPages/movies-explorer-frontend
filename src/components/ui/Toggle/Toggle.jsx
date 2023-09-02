import './Toggle.css';
import {useForm} from "../../../hooks/useForm";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function Toggle() {
    const location = useLocation();
    const [toggleValue, setToggleValue] = useState("")
    const {formValue, handleChange, errors, } = useForm();

    useEffect(() => {
        if (location.pathname === '/movies') {
            setToggleValue(localStorage.getItem('togglerStatus'));
        }
    },[] );
    function handleToggle(e) {
        handleChange(e);
        console.log(e.target.checked)
        if (location.pathname === '/movies') {
            localStorage.setItem('togglerStatus', e.target.checked);
        }
    };

    return (
        <fieldset className='toggle'>
            <label className="toggle__switch">
                <input checked type="checkbox" className="toggle__input" name="toggle" onChange={handleToggle}/>
                <span className="toggle__slider"></span>
            </label>
            <p className="toggle__text">Короткометражки</p>
        </fieldset>
    )
}

export default Toggle;
