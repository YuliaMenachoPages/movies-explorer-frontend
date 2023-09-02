import {useEffect, useState} from "react";
import './Movies.css';
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Button from "../../components/ui/Button/Button";
import {moviesApi} from "../../utils/MoviesApi";
import {api} from "../../utils/MainApi";

function Movies() {
    const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('filteredMovies')));
    const [isLoading, setIsLoading] = useState(false);
    const [searchError, setSearchError] = useState("");
    const [serverError, setServerError] = useState("");
    const [saveError, setSaveError] = useState("");
    const [savedMovies, setSavedMovies] = useState("");
    // const [filteredMoviesData, setFilteredMoviesData] = useState([]);
    const [errorId, setErrorId] = useState('');

    useEffect(() => {
        setIsLoading(true);
        api.getInitialCards()
            .then(savedMovies => {
                setSavedMovies(savedMovies);
                setIsLoading(false);
            })
            .catch(() => {
                setServerError('При получении сохраненных фильмов произошла ошибка');
                setIsLoading(false);
            });
    }, []);

    function filterMovies(movies, search) {
        const searchResult = movies.filter(movie =>
            movie.nameRU.toLowerCase().includes(search) || movie.nameEN.toLowerCase().includes(search));
setFilteredMovies(searchResult);
localStorage.setItem('filteredMovies', JSON.stringify(searchResult));
        if (searchResult.length === 0) {
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
                    localStorage.setItem('movies', JSON.stringify(
                        data.map(movie => ({
                            country: movie.country,
                            director: movie.director,
                            duration: movie.duration,
                            year: movie.year,
                            description: movie.description,
                            image: `https://api.nomoreparties.co/${movie.image.url}`,
                            trailerLink: movie.trailerLink,
                            thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
                            owner: movie.owner,
                            movieId: movie.id,
                            nameRU: movie.nameRU,
                            nameEN: movie.nameEN
                        }))
                    ));
                    filterMovies(data.map(movie => ({
                        country: movie.country,
                        director: movie.director,
                        duration: movie.duration,
                        year: movie.year,
                        description: movie.description,
                        image: `https://api.nomoreparties.co/${movie.image.url}`,
                        trailerLink: movie.trailerLink,
                        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
                        owner: movie.owner,
                        movieId: movie.id,
                        nameRU: movie.nameRU,
                        nameEN: movie.nameEN
                    })), searchRequest);
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

    const handleAddToSaved = (movie) => {
        setErrorId(movie.movieId)
        api.saveMovie(movie)
            .then(savedMovie => {
                setSavedMovies([...savedMovies, savedMovie]);
            })
            .catch(() => {
                setSaveError('При сохранении фильма произошла ошибка');
            });
    };

    const handleDeleteFromSaved = (movieId, id) => {
        setErrorId(movieId)
        api.deleteMovie(id)
            .then(() => {
                setSavedMovies(prevSavedMovies =>
                    prevSavedMovies.filter(movie => movie.movieId !== movieId)
                );
            })
            .catch(() => {
                setSaveError('При удалении сохраненного фильма произошла ошибка');
            });
    };

    return (
        <main className="movies">
            <SearchForm
                handleSubmitSearch={handleSubmitMovies}
            />
            <MoviesCardList
                isLoading={isLoading}
                filteredMovies={filteredMovies}
                searchError={searchError}
                serverError={serverError}
                handleDeleteFromSaved={handleDeleteFromSaved}
                handleAddToSaved={handleAddToSaved}
                saveError={saveError}
                errorId={errorId}
                setErrorId={setErrorId}
                key={"m"}
                savedMovies={savedMovies}
            />
            <Button
                children={"Ещё"}
                type={"button"}
                kind={"more"}/>
        </main>
    )
}

export default Movies;
