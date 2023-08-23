import './MoviesCard.css';
import movie from '../../images/movie.jpg';

function MoviesCard({children}) {
    //На этапе создания функционала данные фильмы будут смаплены из поступающего с бэкенда массива, так что альтернативное название у каждой картины окажется разнеым.
    //Сейчас создала сильно урезанную заглушку
    const movieData = {
        nameRu: "Тест",
    }

    return (
        <li className="moviesCard">
            {children}
            <div className="moviesCard__imgWrapper">
                <img src={movie} alt={`Постер к фильму ${movieData.nameRu}`} className="moviesCard__img"/>
            </div>
            <div className="moviesCard__info">
                <h2 className="moviesCard__title">{movieData.nameRu}</h2>
                <div className="moviesCard__durationWrapper">
                    <p className="moviesCard__duration">test</p>
                </div>
            </div>
        </li>
    )
}

export default MoviesCard;
