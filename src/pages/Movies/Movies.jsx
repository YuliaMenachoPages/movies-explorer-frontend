import {useState} from "react";
import './Movies.css';
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Button from "../../components/ui/Button/Button";
import {moviesApi} from "../../utils/MoviesApi";
import {api} from "../../utils/MainApi";

function Movies() {
    const [isLoading, setIsLoading] = useState(false);
    const [searchError, setSearchError] = useState("");
    const [serverError, setServerError] = useState("");
    const [savedMovies, setSavedMovies] = useState("")
    const [filteredMoviesData, setFilteredMoviesData] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState(null);


    const filteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));

    function filterMovies(movies) {
        const search = localStorage.getItem("searchRequestMovies")?.toLowerCase().trim();
        console.log(search)
        const filteredMovies = movies.filter(movie =>
            movie.nameRU.toLowerCase().includes(search) || movie.nameEN.toLowerCase().includes(search));
        localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
        if (filteredMovies.length === 0) {
            setSearchError('Ничего не найдено');
        } else {
            setSearchError("");
        }
        setIsLoading(false);
    }

    const handleSubmitMovies = (searchRequest) => {
        setIsLoading(true);
        // setDisplayedCards(maxAllowedCardsDisplay());
        const movies = JSON.parse(localStorage.getItem("movies"));
        if (movies !== null) {
            filterMovies(movies, searchRequest);
        } else {
            moviesApi.getInitialMovies()
                .then((data) => {
                    localStorage.setItem('movies', JSON.stringify(data));
                    filterMovies(data, searchRequest);
                })
                .catch(() => {
                    setServerError(`Во время запроса произошла ошибка. Возможно,
        проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз.`);
                    setTimeout(() => {
                        setServerError('');
                    }, 5000);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }

    const isSaved = false;
    const handleAddToSaved = (movie) => {
        console.log(movie);
        api.saveMovie(movie)
            .then(savedMovie => {
                console.log("saveTest")
                setSavedMovies([...savedMovies, savedMovie]);
                setSelectedMovieId(savedMovie.movieId);
            })
            .catch(() => {
                setServerError('При сохранении фильма произошла ошибка');
    setTimeout(() => {
        setServerError('');
    }, 5000);
            });
    };

    const handleDeleteFromSaved = (movieId) => {
        api.deleteMovie(movieId)
            .then(() => {
                console.log("deleteTest")
                setSavedMovies(prevSavedMovies =>
                    prevSavedMovies.filter(movie => movie._id !== movieId)
                );
                setFilteredMoviesData(prevFilteredMovies =>
                    prevFilteredMovies.filter(movie => movie._id !== movieId)
                );
                setSelectedMovieId(movieId);
            })
            .catch(() => {
                setServerError('При удалении сохраненного фильма произошла ошибка');
                setTimeout(() => {
                    setServerError('');
                }, 5000);
            });
    };

    return (
        <main className="movies">
            <SearchForm
                handleSubmitSearch={handleSubmitMovies}/>
            <MoviesCardList
                isLoading={isLoading}
                movies={filteredMovies}
                searchError={searchError}
                serverError={serverError}
                handleDeleteFromSaved={handleDeleteFromSaved}
                handleAddToSaved={handleAddToSaved}
                children={isSaved ?
                    <Button
                        kind={"saved"}
                        type={"button"}
                        onClick={(props) => {handleDeleteFromSaved(props.movie)}}
                    /> :
                    <Button
                        kind={"save"}
                        type={"button"}
                        children={"Сохранить"}
                        // onClick={onDelete}
                    />}
                />
            <Button
                children={"Ещё"}
                type={"button"}
                kind={"more"}/>
        </main>
    )
}

export default Movies;
