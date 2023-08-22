import './Input.css';

function Input({inpId, labelText, kind, errorText, ...props}) {
    return (
        <div className="input">
            <label htmlFor={inpId} className="input__label">{labelText}</label>
            <input {...props} id={inpId} className={`inputField_kind_${kind} inputField`}/>
            <div className={`input__errorWrapper ${errorText && 'active'}`}>
                <span className={`${inpId}-error input__error_kind_${kind} input__error`}>{errorText}</span>
            </div>
        </div>
    )
}

export default Input;
