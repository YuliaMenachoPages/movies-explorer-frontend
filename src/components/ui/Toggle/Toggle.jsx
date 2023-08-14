import './Toggle.css';

function Toggle() {
    return (
        <div className='toggle'>
        <label className="toggle__switch">
            <input type="checkbox" className="toggle__input"/>
                <span className="toggle__slider"></span>
        </label>
            <p className="toggle__text">Короткометражки</p>
        </div>
    )
}

export default Toggle;
