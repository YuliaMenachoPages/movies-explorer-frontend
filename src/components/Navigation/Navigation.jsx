import './Navigation.css';
import NavLinkComp from "../ui/NavLinkComp/NavLinkComp";
import Burger from "../ui/Burger/Burger";
import React from "react";

function Navigation({children}) {
    const loggedIn = true;
    return (
        <div className="navigation">
            {children}
            {loggedIn ?
                <>
                    <nav className="navigation__wrapper hidden">
                                               <ul className="navigation__list">
                            <li className="navigation__item">
                                <NavLinkComp children={"Фильмы"} direction={"/movies"}/>
                            </li>
                            <li className="navigation__item">
                                <NavLinkComp children={"Сохранённые фильмы"} direction={"/saved-movies"}/>
                            </li>
                        </ul>
                    </nav>
                    <div className="hidden">
                    <NavLinkComp children={"Аккаунт"} kind={"account"} direction={"/profile"}/>
                    </div>
                    <Burger />
                </>
                :
                <nav className="navigation__wrapper">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <NavLinkComp children={"Регистрация"} direction={"/signup"}/>
                        </li>
                        <li className="navigation__item">
                            <NavLinkComp kind={"green"} children={"Войти"} direction={"/signin"}/>
                        </li>
                    </ul>
                </nav>
            }
        </div>
    )
}

export default Navigation;
