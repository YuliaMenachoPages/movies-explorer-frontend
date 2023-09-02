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

    useEffect(() => {
        setIsLoading(true);
        api.getInitialCards()
            .then(savedMovies => {
                setSavedMovies(savedMovies);
                setFilteredMovies(savedMovies);
                setIsLoading(false);
            })
            .catch(() => {
                setServerError('При получении сохраненных фильмов произошла ошибка');
                setIsLoading(false);
            });
    }, []);



             // if (savedSearchRequest) {
            //     searchRef.current = savedSearchRequest;
            // }
            //
            // if (savedShortFilmToggler) {
            //     setShortFilmToggler(savedShortFilmToggler);
            // }
            //
            // if (savedFilteredMovies) {
            //     setFilteredMovies(JSON.parse(savedFilteredMovies));
            // }

            // const savedMovies = JSON.parse(localStorage.getItem('filteredMovies'));
            // if (savedMovies) {
            //     setMovies(savedMovies);
            //     const filteredData = filterMovies(savedMovies, savedShortFilmToggler);
            //     setFilteredMovies(filteredData);
            // }

    // const handleRemoveFromSavedMovies = (movieId) => {
    //     api
    //         .deleteCard(movieId)
    //         .then(() => {
    //             setSavedMovies(prevSavedMovies =>
    //                 prevSavedMovies.filter(movie => movie._id !== movieId)
    //             );
    //             setFilteredMovies(prevFilteredMovies =>
    //                 prevFilteredMovies.filter(movie => movie._id !== movieId)
    //             );
    //             setSelectedMovieId(movieId);
    //         })
    //         .catch(() => {
    //             setError('Ошибка при удалении сохраненного фильма');
    //         });
    // };

    return (
        <main className="savedMovies">
            <SearchForm handleSubmitSearch={() => console.log("test")}/>
            <MoviesCardList
                serverError={serverError}
                isLoading={isLoading}
                filteredMovies={filteredMovies}
                keyPrefix={"sm"}
            />
        </main>
    )
}

export default SavedMovies;
