import './AboutMe.css';
import LinkComp from "../ui/LinkCopm/LinkComp";
import Portfolio from "../Portfolio/Portfolio";
import student from '../../images/student.jpg'

function AboutMe() {
    return (
        <>
            <div className="aboutMe">
                <div className="aboutMe__info">
                    <div className="aboutMe__description">
                        <h3 className="aboutMe__name">Виталий</h3>
                        <p className="aboutMe__profession">Фронтенд-разработчик, 30 лет</p>
                        <p className="aboutMe__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                            меня
                            есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
                            работал
                            в компании «СКБ Контур».
                            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
                            постоянной работы.</p>
                    </div>
                    <LinkComp kind={"github"} children={"Github"} direction={"https://github.com/YuliaMenachoPages"} target={"_blank"} rel={"noopener noreferrer"}/>
                </div>
                <img src={student} alt="Фото студента." className="aboutMe__picture"/>
            </div>
            <Portfolio/>
        </>
    )
}

export default AboutMe
