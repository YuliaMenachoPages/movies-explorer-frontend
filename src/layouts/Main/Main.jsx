import React from "react";
import './Main.css';
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Logo from "../../components/Logo/Logo";


function Main() {
    return (
        <main className="main">
            <Header>
                <Navigation children={<Logo/>}/>
            </Header>
            <Outlet/>
            <Footer/>
        </main>
    )
}

export default Main;
