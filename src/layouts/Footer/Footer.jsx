import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__titleWrapper">
                <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            </div>
            <div className="footer__infoWrapper">
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                <ul className="footer__partnersList">
                    <li className="footer__partnersItem">Яндекс.Практикум</li>
                    <li className="footer__partnersItem">Github</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
