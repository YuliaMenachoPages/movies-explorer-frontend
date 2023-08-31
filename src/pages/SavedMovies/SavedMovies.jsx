import './SavedMovies.css';
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Button from "../../components/ui/Button/Button";
import {useEffect, useState} from "react";
import {api} from "../../utils/MainApi";

function SavedMovies(props) {
    const [savedMovies, setSavedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [serverError, setServerError] = useState('');
    const [shortFilmToggler, setShortFilmToggler] = useState(false);


    useEffect(() => {
            api.getInitialCards()
                .then((data) => {
                    setSavedMovies(data);
                    console.log(data)
                })
                .catch(() => {
                    setServerError('Ошибка при получении сохраненных фильмов');
                });
            const savedSearchRequest = localStorage.getItem('searchRequestSavedMovies');
            // const savedShortFilmToggler = localStorage.getItem('shortFilmToggler') === 'true';
            // const savedFilteredMovies = localStorage.getItem('filteredMovies');
            //
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
    }, [props.loggedIn]);

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
            <SearchForm handleSubmitSearch={() => console.log("SMsearchtest")}/>
            <MoviesCardList serverError={serverError} isLoading={isLoading} movies={savedMovies} children={<Button kind={"delete"} type={"button"}/>}/>
        </main>
    )
}

export default SavedMovies;
