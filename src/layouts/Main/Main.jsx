import React from "react";
import './Main.css';
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Logo from "../../components/Logo/Logo";


function Main(props) {
    return (
        <div className="main">
            <Header loggedIn={props.loggedIn} logOut={props.logOut}>
                <Navigation loggedIn={props.loggedIn} logOut={props.logOut} children={<Logo/>}/>
            </Header>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Main;
