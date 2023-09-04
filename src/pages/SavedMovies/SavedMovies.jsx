import './SavedMovies.css';
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import {useEffect, useState} from "react";
import {api} from "../../utils/MainApi";

function SavedMovies() {
    const [savedMovies, setSavedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchError, setSearchError] = useState("");
    const [serverError, setServerError] = useState('');
    const [errorId, setErrorId] = useState('');
    const [saveError, setSaveError] = useState("");
    const [searchedMovies, setSearchedMovies] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        api.getInitialCards()
            .then(savedMovies => {
                setSavedMovies(savedMovies);
                setFilteredMovies(savedMovies);
                setIsLoading(false);
                setSearchedMovies(savedMovies);
            })
            .catch(() => {
                setServerError('При получении сохраненных фильмов произошла ошибка');
                setIsLoading(false);
            });
    }, []);

    function handleToggle(isChecked) {
        if (isChecked) {
            const toggleResult = searchedMovies.filter(movie => movie.duration <= 40);
            setFilteredMovies(toggleResult);
            if (toggleResult.length === 0) {
                setSearchError('Ничего не найдено');
            } else {
                setSearchError("");
            }
        } else {
            setFilteredMovies(searchedMovies);
            setSearchError("");
        }
    }

    function filterMovies(search, isChecked) {
        const searchResult = savedMovies.filter(movie =>
            movie.nameRU.toLowerCase().includes(search) || movie.nameEN.toLowerCase().includes(search));

        setSearchedMovies(searchResult);
        if (isChecked) {
            const toggleResult = searchResult.filter(movie => movie.duration <= 40);
            setFilteredMovies(toggleResult);
            if (toggleResult.length === 0) {
                setSearchError('Ничего не найдено');
            } else {
                setSearchError("");
            }
        } else {
            setFilteredMovies(searchResult);
            if (searchResult.length === 0) {
                setSearchError('Ничего не найдено');
            } else {
                setSearchError("");
            }
            setIsLoading(false);
        }
    }

    const handleSubmitMovies = (searchRequest, isChecked) => {
        filterMovies(searchRequest, isChecked)
    }

    const handleDeleteFromSaved = (movieId, id) => {
        setErrorId(movieId)
        api.deleteMovie(id)
            .then(() => {
                setSavedMovies(prevSavedMovies =>
                    prevSavedMovies.filter(movie => movie.movieId !== movieId)
                );
                setFilteredMovies(movies =>
                    movies.filter(movie => movie.movieId !== movieId)
                );
            })
            .catch(() => {
                setSaveError('При удалении сохраненного фильма произошла ошибка');
            });
    };

    return (
        <main className="savedMovies">
            <SearchForm handleSubmitSearch={handleSubmitMovies}
                        handleToggle={handleToggle}
            />
            <MoviesCardList
                serverError={serverError}
                searchError={searchError}
                isLoading={isLoading}
                filteredMovies={filteredMovies}
                keyPrefix={"sm"}
                saveError={saveError}
                errorId={errorId}
                handleDeleteFromSaved={handleDeleteFromSaved}
            />
        </main>
    )
}

export default SavedMovies;
