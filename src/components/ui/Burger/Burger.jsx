import './Burger.css';
import NavLinkComp from "../NavLinkComp/NavLinkComp";

function Burger() {
    return (
        <div className="burger">
            <form className="burger__container">
                <input className="burger__checkbox" type="checkbox"/>
                <div className="burger__wrapper">
                    <span className="burger_line burger_line_1"></span>
                    <span className="burger_line burger_line_2"></span>
                    <span className="burger_line burger_line_3"></span>
                </div>
                <nav className="burger__items">
                    <ul className="burger__list">
                        <li>
                            <ul className="burger__navWrapper">
                                <li><NavLinkComp children={"Главная"} kind={"burger"} direction={"/"}/></li>
                                <li><NavLinkComp children={"Фильмы"} kind={"burger"} direction={"/movies"}/></li>
                                <li><NavLinkComp children={"Сохранённые фильмы"} kind={"burger"}
                                                 direction={"/saved-movies"}/></li>
                            </ul>
                        </li>
                        <li><NavLinkComp children={"Аккаунт"} kind={"account"} direction={"/profile"}/></li>
                    </ul>
                </nav>
            </form>
        </div>
    )
}

export default Burger;
