import './MoviesCardList.css';
import Preloader from "../ui/Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({children, ...props}) {


    return (
        <section className="moviesCardList">
            {props.isLoading && <Preloader /> }
            <div className="moviesCardList__searchError">{props.searchError}</div>
            <div className="moviesCardList__serverError">{props.serverError}</div>
            <ul className="moviesCardList__wrapper">
                {props.filteredMovies?.map((movie) => (
                    <MoviesCard key={`${props.keyPrefix}+${movie.movieId}`}
                                movie={movie}
                                saveError={props.saveError}
                                handleDeleteFromSaved={props.handleDeleteFromSaved}
                                handleAddToSaved={props.handleAddToSaved}
                                savedMovieId={props.savedMovieId}
                                deletedMovieId={props.deletedMovieId}
                                saveErrorMovieId={props.saveErrorMovieId}
                                searchError={props.searchError}
                                errorId={props.errorId}

                    />
                ))
                }
            </ul>
        </section>
    )
}

export default MoviesCardList;
