import './Logo.css';
import NavLinkComp from "../ui/NavLinkComp/NavLinkComp";
import logo from '../../images/logo.svg'

function Logo() {
    return (
        <div className="logo">
            < NavLinkComp direction={"/"} children={<img src={logo} alt="Лого" className="header__logo"/>}/>
        </div>
    )
}

export default Logo;

