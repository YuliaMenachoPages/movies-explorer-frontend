import { useCallback, useState } from "react";

export function useForm() {
    const [formValue, setFormValue] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setValid] = useState(false);
    const [validityCodes, setValidityCodes] = useState('')

    const handleChange = (event) => {
        const {value, name} = event.target;
        setValidityCodes({...event.target, [name]: event.target.validity.patternMismatch});
        setFormValue({...formValue, [name]: value});
        setErrors({...errors, [name]: event.target.validationMessage});
        setValid(event.target.closest('form').checkValidity());
    };

    const resetForm = useCallback((newFormValue = {}, newErrors = {}, newIsValid = false) => {
        setFormValue(newFormValue);
        setErrors(newErrors);
        setValid(newIsValid);
    }, [setFormValue, setErrors, setValid])

    return {formValue,
        validityCodes,
        handleChange,
        setFormValue,
        errors,
        isValid,
        setValid,
        resetForm};
}
