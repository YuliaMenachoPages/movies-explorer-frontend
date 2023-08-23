import './Toggle.css';

function Toggle() {
    return (
        <fieldset className='toggle'>
            <label className="toggle__switch">
                <input type="checkbox" className="toggle__input"/>
                <span className="toggle__slider"></span>
            </label>
            <p className="toggle__text">Короткометражки</p>
        </fieldset>
    )
}

export default Toggle;
