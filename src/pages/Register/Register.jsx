import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import FormWrapper from "../../components/FormWrapper/FormWrapper";
import NavLinkComp from "../../components/ui/NavLinkComp/NavLinkComp";
import * as auth from '../../utils/MainApiAuth';
import {useForm} from '../../hooks/useForm';
import * as consts from '../../utils/Consts';

function Register(props) {

    const [serverError, setServerError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);


    const {formValue, handleChange, errors, isValid, validityCodes} = useForm();
const navigate = useNavigate();
    function handleSubmitRegister(e) {
        e.preventDefault();
        setIsSubmitting(true);
        auth.register(formValue.name, formValue.email, formValue.password)
            .then(() => {
                props.handleSubmitLogin(formValue.email, formValue.password)
            })
            .catch((error) => {
                if (error.status === 409) {
                    setServerError('Пользователь с такой почтой уже существует.');
                    return;
                } else {
                    setServerError('При регистрации произошла ошибка.');
                }
                setTimeout(() => {
                    setServerError('');
                }, 5000);
            }
            )
            .finally(() => {
                setIsSubmitting(false);
            })
             }

    useEffect(() => {
        if (props.loggedIn) {
            navigate('/movies');
        }
    }, [props.loggedIn, navigate]);

    return (
        <FormWrapper
            title={"Добро пожаловать!"}
            button={<Button children={"Зарегистрироваться"} type={"submit"} form={"register"} disabled={!isValid && !isSubmitting}/>}
            text={"Уже зарегистрированы?"}
            link={<NavLinkComp children={"Войти"} direction={"/signin"} kind={"blue"}/>}
            id={"register"}
            handleSubmit={handleSubmitRegister}
            serverError={serverError}
        >
            <Input
                name="name"
                kind="form"
                labelText="Имя"
                errorText={validityCodes.name ? "Имя может содержать только латиницу, кириллицу, пробел или дефис" : errors.name}
                inpId={"registerName"}
                type={"text"}
                placeholder={"Имя"}
                value={formValue.name || ""}
                onChange={handleChange}
                pattern={consts.NAME_PATTERN}
                minLength={2}
                maxLength={30}
                required
                />
            <Input
                name="email"

                kind={"form"}
                labelText={"E-mail"}
                errorText={validityCodes.email ? "Введите корректный эмеил вида test@example.com" : errors.email}
                inpId={"registerEmail"}
                type={"email"}
                placeholder={"Почта"}
                value={formValue.email || ""}
                onChange={handleChange}
                pattern={consts.EMAIL_PATTERN}
                required
            />
            <Input
                name="password"
                kind={"form"}
                labelText={"Пароль"}
                errorText={errors.password}
                inpId={"registerPassword"}
                type={"password"}
                placeholder={"Пароль"}
                value={formValue.password || ""}
                onChange={handleChange}
                minLength={6}
                maxLength={30}
                required
                />
        </FormWrapper>
    )
}

export default Register;
