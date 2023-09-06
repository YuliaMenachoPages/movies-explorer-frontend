import './Input.css';

function Input({inpId, labelText, kind, errorText, name, onChange, value, pattern, ...props}) {

    return (
        <div className={`input_kind_${kind} input`}>
            <label htmlFor={inpId} className="input__label">{labelText}</label>
            <input {...props} name={name} id={inpId} onChange={onChange} value={value} pattern={pattern}
                   className={`inputField_kind_${kind} inputField`}/>
            <div className={`input__errorWrapper input__errorWrapper_kind_${kind}  ${errorText && 'active'}`}>
                <span className={`${inpId}-error input__error_kind_${kind} input__error`}>{errorText}</span>
            </div>
        </div>
    )
}


export default Input;
