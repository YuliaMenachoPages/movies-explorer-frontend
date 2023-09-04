import {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import FormWrapper from "../../components/FormWrapper/FormWrapper";
import NavLinkComp from "../../components/ui/NavLinkComp/NavLinkComp";
import {useForm} from '../../hooks/useForm';
import * as consts from '../../utils/Consts';

function Login(props) {
    const {formValue, handleChange, errors, isValid, validityCodes} = useForm();
    const navigate = useNavigate();

    function submitLogin(e) {
        e.preventDefault();
        props.handleSubmitLogin(formValue.email, formValue.password);
    }

    useEffect(() => {
        if (props.loggedIn) {
            navigate('/movies');
        }
    }, [props.loggedIn, navigate]);

    return (
        <FormWrapper
            title={"Рады видеть!"}
            button={<Button type={"submit"} children={"Войти"} form={"login"} disabled={!isValid && !props.isSubmitting}/>}
            text={"Еще не зарегистрированы?"}
            link={<NavLinkComp children={"Регистрация"} direction={"/signup"} kind={"blue"}/>}
            id={"login"}
            handleSubmit={submitLogin}
        serverError={props.serverError}
        >
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

export default Login;
