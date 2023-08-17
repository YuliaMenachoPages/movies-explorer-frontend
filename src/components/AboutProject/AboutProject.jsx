import './AboutProject.css'

function AboutProject() {
    return (
        <div className="aboutProject">
            <div className="aboutProject__about">
                <div>
                    <h3 className="aboutProject__stage">Дипломный проект включал 5 этапов</h3>
                    <p className="aboutProject__description">Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.</p>
                </div>
                <div>
                    <h3 className="aboutProject__stage">На выполнение диплома ушло 5 недель</h3>
                    <p className="aboutProject__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
                        было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="aboutProject__progressBar">
                <div className="aboutProject__backend">
                    <p className="aboutProject__progressBackend">1 неделя</p>
                </div>
                <div className="aboutProject__frontend">
                    <p className="aboutProject__progressFrontend">4 недели</p>
                </div>
                <p className="aboutProject__title">Back-end</p>
                <p className="aboutProject__title">Front-end</p>
            </div>
        </div>
    )
}

export default AboutProject;
