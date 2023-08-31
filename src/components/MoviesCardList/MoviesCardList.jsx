import {Children, cloneElement} from "react";
import './MoviesCardList.css';
import Preloader from "../ui/Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../ui/Button/Button";

function MoviesCardList({children, ...props}) {


    return (
        <section className="moviesCardList">
            {props.isLoading && <Preloader /> }
            <div className="moviesCardList__searchError">{props.searchError}</div>
            <div className="moviesCardList__serverError">{props.serverError}</div>
            <ul className="moviesCardList__wrapper">
                {props.movies?.map((movie) => (
                    <MoviesCard key={movie.id}
                                children={Children.map(children, (child) => {
                                        return cloneElement(child, {movie,
                                            ...props})
                                    })}
                                movie={movie}
                                saveError={props.saveError}
                                handleDeleteFromSaved={props.handleDeleteFromSaved}
                                handleAddToSaved={props.handleAddToSaved}
                    />
                ))
                }
            </ul>
        </section>
    )
}

export default MoviesCardList;
