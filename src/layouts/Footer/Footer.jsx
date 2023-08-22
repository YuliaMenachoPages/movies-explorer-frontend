import './Footer.css';
import LinkComp from "../../components/ui/LinkCopm/LinkComp";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__titleWrapper">
                <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            </div>
            <div className="footer__infoWrapper">
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                <ul className="footer__partnersList">
                    <li className="footer__partnersItem"><LinkComp children={"Яндекс.Практикум"} kind={"footer"}
                                                                   direction={"https://practicum.yandex.ru/"}
                                                                   target={"_blank"}
                                                                   rel={"noopener noreferrer"}/></li>
                    <li className="footer__partnersItem"><LinkComp children={"Github"} kind={"footer"}
                                                                   direction={"https://github.com/"} target={"_blank"}
                                                                   rel={"noopener noreferrer"}/></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
