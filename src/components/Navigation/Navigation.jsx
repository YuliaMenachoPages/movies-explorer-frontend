import './Navigation.css';
import NavLinkComp from "../ui/NavLinkComp/NavLinkComp";
import React, {useState} from "react";
import Burger from "../ui/Burger/Burger";

function Navigation({children, ...props}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleLinkClick() {
        setIsMenuOpen(false);
    }

    function handleBurgerClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="navigation">
            {children}
            {props.loggedIn ?
                <>
                    <nav className="navigation__wrapper hidden">
                        <ul className="navigation__list_loggedIn">
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
                    <nav className={`burger__items ${isMenuOpen && "burger__items_active"}`}>
                        <ul className="burger__list">
                            <li>
                                <ul className="burger__navWrapper">
                                    <li><NavLinkComp
                                        children={"Главная"}
                                        kind={"burger"}
                                        direction={"/"}
                                        onClick={handleLinkClick}
                                    /></li>
                                    <li><NavLinkComp
                                        children={"Фильмы"}
                                        kind={"burger"}
                                        direction={"/movies"}
                                        onClick={handleLinkClick}
                                    /></li>
                                    <li><NavLinkComp
                                        children={"Сохранённые фильмы"}
                                        kind={"burger"}
                                        direction={"/saved-movies"}
                                        onClick={handleLinkClick}
                                    /></li>
                                </ul>
                            </li>
                            <li><NavLinkComp children={"Аккаунт"} kind={"account"} direction={"/profile"}/></li>
                        </ul>
                    </nav>
                    <Burger handleBurgerClick={handleBurgerClick} isMenuOpen={isMenuOpen}/>
                </>
                :
                <nav className="navigation__wrapper">
                    <ul className="navigation__list_loggedOut">
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
