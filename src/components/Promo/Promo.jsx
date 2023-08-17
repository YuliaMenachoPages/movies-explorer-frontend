import './Promo.css'
import NavTab from "../NavTab/NavTab";

function Promo() {
    return (
        <div className="promo">
            <div className="promo__titleWrapper">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            </div>
            <div className="promo__navWrapper">
                <NavTab/>
            </div>
        </div>
    )
}

export default Promo;
