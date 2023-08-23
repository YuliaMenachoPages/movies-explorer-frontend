import React from 'react';
import './NavTab.css';
import HashLinkComp from "../ui/HashLinkComp/HashLinkComp";

function NavTab() {
    return (
        <nav className="navTab">
            <ul className="navTab__list">
                <li><HashLinkComp children={"О проекте"} direction={"#aboutProject"}/></li>
                <li><HashLinkComp children={"Технологии"} direction={"#techs"}/></li>
                <li><HashLinkComp children={"Студент"} direction={"#aboutMe"}/></li>
            </ul>
        </nav>
    )
}

export default NavTab
