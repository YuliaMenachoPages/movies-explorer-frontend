import './Register.css';
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import FormWrapper from "../../components/FormWrapper/FormWrapper";
import NavLinkComp from "../../components/ui/NavLinkComp/NavLinkComp";

function Register() {
    return (
        <FormWrapper
            title={"Добро пожаловать!"}
            button={<Button children={"Зарегистрироваться"} type={"button"}/>}
            text={"Уже зарегистрированы?"}
            link={<NavLinkComp children={"Войти"} direction={"/signin"} kind={"blue"}/>}
        >
            <Input labelText={"Имя"} errorText={""} inpId={"registerName"} type={"text"} minLength="2" maxLength="30"
                   placeholder={"Имя"} required/>
            <Input labelText={"E-mail"} inpId={"registerEmail"} type={"email"} placeholder={"Почта"} required/>
            <Input labelText={"Пароль"} errorText={"error"} inpId={"registerPassword"} type={"password"} minLength="2"
                   maxLength="30" placeholder={"Пароль"} required/>
        </FormWrapper>
    )
}

export default Register;
