import {useState, useEffect} from 'react';
import './MoviesCard.css';
import Button from "../ui/Button/Button";
import {useLocation} from "react-router-dom";
function MoviesCard({children, ...props}) {
    const location = useLocation();
    const [isSaved, setIsSaved] = useState(false);
    const [deleteId, setDeleteId] = useState(props.movie._id);
    const [showError, setShowError] = useState(false);
    const [buttonBlock, setButtonBlock] = useState(false);


    useEffect(() => {
        if (location.pathname === '/movies') {
            if (props.savedMovies) {
                const isMovieSaved = props.savedMovies.some(savedMovie => savedMovie.movieId === props.movie.movieId)
                setIsSaved(isMovieSaved);

            if (isMovieSaved) {
                const savedMovie = props.savedMovies.find(savedMovie => savedMovie.movieId === props.movie.movieId);
                setDeleteId(savedMovie._id);
            }
            }
        }
    }, [props.savedMovies, props.movieId, location.pathname]);

    useEffect(() => {
        if(props.movie._id) {
            setIsSaved(true);
        }
    })

    useEffect(() => {
            if (props.movie.movieId === props.errorId) {
                setButtonBlock(true);
                setShowError(true);
                setTimeout(() => {
                    setShowError(false);
                }, 1500);
            }
    }, [props.errorId ])

    function countDuration (duration) {
        if (duration < 60) return `${duration}м`
        return `${Math.floor(duration/60)}ч 
    ${(duration-(Math.floor(duration/60)*60)) !== 0 ? duration-(Math.floor(duration/60)*60)+"м" : ""}`
    }

    function onDelete() {
        props.handleDeleteFromSaved(props.movie.movieId, deleteId);
    }
    function onSave() {
        props.handleAddToSaved(props.movie);
     }

    return (
        <li className="moviesCard">
            {showError && props.saveError && <span className="moviesCard__saveError">{props.saveError}</span>}
            {location.pathname === '/movies' ? <>
                {isSaved ?
            <Button
                kind={"saved"}
                type={"button"}
                onClick={onDelete}
                disabled={props.isSubmitting && buttonBlock}
            /> :
            <Button
                kind={"save"}
                type={"button"}
                children={"Сохранить"}
                onClick={onSave}
                disabled={props.isSubmitting && buttonBlock}
            />} </> :
                <Button
                kind={"delete"}
                type={"button"}
                onClick={onDelete}
                disabled={props.isSubmitting && buttonBlock}
                />
}
            <div className="moviesCard__imgWrapper">
                <a className="moviesCard__link" href={props.movie.trailerLink} target="_blank" rel="noopener noreferrer">
                <img src={props.movie.image} alt={`Постер к фильму ${props.movie.nameRU}`} className="moviesCard__img"/>
                </a>
            </div>
            <div className="moviesCard__info">
                <div className="moviesCard__headerWrapper">
                <h2 className="moviesCard__title">{props.movie.nameRU}</h2>
                </div>
                <div className="moviesCard__durationWrapper">
                    <p className="moviesCard__duration">{countDuration(props.movie.duration)}</p>
                </div>
            </div>
        </li>
    )
}

export default MoviesCard;
