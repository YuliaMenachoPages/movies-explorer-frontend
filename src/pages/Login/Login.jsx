import './Login.css';
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import FormWrapper from "../../components/FormWrapper/FormWrapper";
import NavLinkComp from "../../components/ui/NavLinkComp/NavLinkComp";

function Login() {
    return (
        <FormWrapper
            title={"Рады видеть!"}
            button={<Button children={"Войти"}/>}
            text={"Еще не зарегистрированы?"}
            link={<NavLinkComp children={"Регистрация"} direction={"/signup"} kind={"blue"}/>}
        >
            <Input labelText={"E-mail"} inpId={"loginEmail"} type={"email"} required/>
            <Input labelText={"Пароль"}
                   errorText={"error error error error error error error error error error error error error error error error error error error error error error error errorerror error error error errorerror error"}
                   inpId={"loginPassword"} type={"password"} required/>
        </FormWrapper>
    )
}

export default Login;
