import './Profile.css';
import Header from "../../layouts/Header/Header";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import React from "react";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import NavLinkComp from "../../components/ui/NavLinkComp/NavLinkComp";

function Profile() {
    const isDisabled = false;
    const isEdited = true;
    return (
        <div className="pageProfile">
            <Header children={<Navigation children={<Logo/>}/>}/>
            <main className="mainProfile">
                <section className="profile">
                    <div className="profile__wrapper">
                        <h1 className="profile__title">Привет, Виталий!</h1>
                        <div className="profile__info">
                            <div className="profile__name">
                                <p className="profile__type">Имя</p>
                                < Input type={"text"} kind={"profile"} placeholder={"Виталий"} disabled={isDisabled}
                                        minLength="2" maxLength="30" required/>
                            </div>
                            <div className="profile__email">
                                <p className="profile__type">E&#8209;mail</p>
                                < Input type={"email"} kind={"profile"} placeholder={"test@test.ru"}
                                        disabled={isDisabled}
                                        required/>
                            </div>
                        </div>
                    </div>
                    <div className="profile__buttons">
                        {isEdited ?
                            <>
                                < Button type={"button"} kind={"editProfile"} children={"Редактировать"}/>
                                < NavLinkComp children={"Выйти из аккаунта"} direction={"/signin"} kind={"profile"}/>
                            </> :
                            <>
                                <span className="profile__error">Test</span>
                                < Button type={"button"} kind={"saveProfile"} children={"Сохранить"}
                                         disabled={isDisabled}/>
                            </>
                        }

                    </div>
                </section>
            </main>
        </div>
    )
}

export default Profile;
