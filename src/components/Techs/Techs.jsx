import './Techs.css';

function Techs() {
    return (
        <div className="techs">
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном
                проекте.</p>
            <ul className="techs__list">
                <li>
                    <div className="techs__item">
                        <p className="techs__item-text">HTML</p>
                    </div>
                </li>
                <li>
                    <div className="techs__item">
                        <p className="techs__item-text">CSS</p>
                    </div>
                </li>
                <li>
                    <div className="techs__item">
                        <p className="techs__item-text">JS</p>
                    </div>
                </li>
                <li>
                    <div className="techs__item">
                        <p className="techs__item-text">React</p>
                    </div>
                </li>
                <li>
                    <div className="techs__item">
                        <p className="techs__item-text">Git</p>
                    </div>
                </li>
                <li>
                    <div className="techs__item">
                        <p className="techs__item-text">Express.js</p>
                    </div>
                </li>
                <li>
                    <div className="techs__item">
                        <p className="techs__item-text">mongoDB</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Techs;
