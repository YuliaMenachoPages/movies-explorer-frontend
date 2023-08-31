import {useState, useContext, useEffect} from "react";
import './Profile.css';
import Header from "../../layouts/Header/Header";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import NavLinkComp from "../../components/ui/NavLinkComp/NavLinkComp";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {api}  from "../../utils/MainApi";
import {useForm} from '../../hooks/useForm';
import * as consts from '../../utils/Consts';


function Profile(props) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const { handleChange, errors, isValid, validityCodes} = useForm();
    const [initialName, setInitialName ] = useState("");
    const [initialEmail, setInitialEmail ] = useState("");
    const [serverError, setServerError] = useState('');
    const [success, setSuccess] = useState('');
    const [nameChange, setNameChange] = useState(false);
    const [emailChange, setEmailChange] = useState(false);


    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
        setInitialName(currentUser.name);
        setInitialEmail(currentUser.email);
    }, [currentUser]);


    function handleNameChange(e) {
        setName(e.target.value);
        handleChange(e);
        setNameChange(e.target.value !== initialName);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
        handleChange(e);
        setEmailChange(e.target.value !== initialEmail);
    }

    function handleUpdateUser(e) {
        e.preventDefault();
        console.log(name, email)
        api.changeUserData({name, email})
            .then(() => {
                setSuccess('Данные успешно обновлены');
                setNameChange(false);
                setEmailChange(false);
                setTimeout(() => {
                    setSuccess('');
                }, 5000);
            })
            .catch(() => {
                    setServerError('При изменении данных профиля произошла ошибка');
                    setTimeout(() => {
                        setServerError('');
                    }, 5000);
                }
            )
    }

    return (
        <div className="pageProfile">
            <Header loggedIn={props.loggedIn} children={<Navigation loggedIn={props.loggedIn} children={<Logo/>}/>}/>
            <main className="mainProfile">
                <section className="profile">
                    <div className="profile__wrapper">
                        <h1 className="profile__title">Привет, {currentUser.name || 'новый пользователь'}!</h1>
                        <form className="profile__info" id="profile" onSubmit={handleUpdateUser}>
                            <div className="profile__name">
                                <label className="profile__type">Имя</label>
                                <Input
                                    name="name"
                                    kind="profile"
                                    errorText={validityCodes.name ? "Имя может содержать только латиницу, кириллицу, пробел или дефис" : errors.name}
                                    inpId={"registerName"}
                                    type={"text"}
                                    placeholder={"Имя"}
                                    value={name || ""}
                                    onChange={handleNameChange}
                                    pattern={consts.namePattern}
                                    minLength={2}
                                    maxLength={30}
                                    required
                                />
                            </div>
                            <div className="profile__email">
                                <label className="profile__type">E&#8209;mail</label>
                                <Input
                                    name="email"
                                    kind={"profile"}
                                    errorText={validityCodes.email ? "Введите корректный эмеил вида test@example.com" : errors.email}
                                    inpId={"registerEmail"}
                                    type={"email"}
                                    placeholder={"Почта"}
                                    value={email || ""}
                                    onChange={handleEmailChange}
                                    pattern={consts.emailPattern}
                                    required
                                />
                            </div>
                        </form>
                    </div>
                    <div className="profile__buttons">
                        <span className="profile__success">{ success }</span>
                        <span className="profile__error">{ serverError }</span>
                                < Button type={"submit"} kind={"editProfile"} form={"profile"} children={"Редактировать"} disabled={!(isValid && (nameChange || emailChange))}/>
                                < NavLinkComp children={"Выйти из аккаунта"} direction={"/"} kind={"profile"} onClick={props.logOut}/>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Profile;
