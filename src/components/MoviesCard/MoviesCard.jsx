import './MoviesCard.css';
import movie from '../../images/movie.jpg';

function MoviesCard({children}) {
    return (
        <li className="moviesCard">
            {children}
            <div className="moviesCard__imgWrapper">
                <img src={movie} alt="Постер" className="moviesCard__img" />
            </div>
            <div className="moviesCard__info">
                <h2 className="moviesCard__title">Test</h2>
                <div className="moviesCard__durationWrapper">
                    <p className="moviesCard__duration">test</p>
                </div>
            </div>
        </li>
    )
}
export default MoviesCard;
