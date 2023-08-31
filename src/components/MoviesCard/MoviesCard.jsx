import './MoviesCard.css';
import {Children, cloneElement} from "react";
import {logDOM} from "@testing-library/react";
import Button from "../ui/Button/Button";
function MoviesCard({children, ...props}) {

    function countDuration (duration) {
        if (duration < 60) return `${duration}м`
        return `${Math.floor(duration/60)}ч 
    ${(duration-(Math.floor(duration/60)*60)) !== 0 ? duration-(Math.floor(duration/60)*60)+"м" : ""}`
    }

    function onDelete() {
        // props.handleDeleteFromSaved(props.movie)
        console.log("testondelete")
        console.log(props.movie)
    }
    const movie = "fuck"
    return (
        <li className="moviesCard">
            {children}
            <div className="moviesCard__imgWrapper">
                <a className="moviesCard__link" href={props.movie.trailerLink} target="_blank" rel="noopener noreferrer">
                <img src={props.movie.image} alt={`Постер к фильму ${props.movie.nameRU}`} className="moviesCard__img"/>
                </a>
            </div>
            <div className="moviesCard__info">
                <h2 className="moviesCard__title">{props.movie.nameRU}</h2>
                <div className="moviesCard__durationWrapper">
                    <p className="moviesCard__duration">{countDuration(props.movie.duration)}</p>
                </div>
            </div>
        </li>
    )
}

export default MoviesCard;
