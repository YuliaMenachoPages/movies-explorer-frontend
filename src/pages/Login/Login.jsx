import './Login.css';
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import FormWrapper from "../../components/FormWrapper/FormWrapper";
import NavLinkComp from "../../components/ui/NavLinkComp/NavLinkComp";

function Login() {
    return (
        <FormWrapper
            title={"Рады видеть!"}
            button={<Button type={"submit"} children={"Войти"}/>}
            text={"Еще не зарегистрированы?"}
            link={<NavLinkComp children={"Регистрация"} direction={"/signup"} kind={"blue"}/>}
        >
            <Input labelText={"E-mail"} inpId={"loginEmail"} type={"email"} placeholder={"Почта"} required/>
            <Input labelText={"Пароль"}
                   inpId={"loginPassword"} type={"password"} minLength="2" maxLength="30" placeholder={"Пароль"}
                   required/>
        </FormWrapper>
    )
}

export default Login;
