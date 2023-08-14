import './Portfolio.css';
import LinkComp from "../ui/LinkCopm/LinkComp";
import go from '../../images/go.svg';

function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    < LinkComp children={<div className="portfolio__wrapper">
                        <p className="portfolio__link">Статичный сайт</p>
                        <img src={go} alt="Перейти" className="portfolio__icon"/>
                    </div>} direction={"https://github.com/YuliaMenachoPages/how-to-learn"} target={"_blank"} rel={"noopener noreferrer"}/>
                   </li>
                <li className="portfolio__item">
                    < LinkComp children={<div className="portfolio__wrapper">
                        <p className="portfolio__link">Адаптивный сайт</p>
                        <img src={go} alt="Перейти" className="portfolio__icon"/>
                    </div>} direction={"https://github.com/YuliaMenachoPages/russian-travel"} target={"_blank"} rel={"noopener noreferrer"}/>
                    </li>
                <li className="portfolio__item">
                    < LinkComp children={<div className="portfolio__wrapper">
                        <p className="portfolio__link">Одностраничное приложение</p>
                        <img src={go} alt="Перейти" className="portfolio__icon"/>
                    </div>} direction={"https://github.com/YuliaMenachoPages/react-mesto-api-full-gha"} target={"_blank"} rel={"noopener noreferrer"}/>
                    </li>
            </ul>
        </div>
    )
}

export default Portfolio;
