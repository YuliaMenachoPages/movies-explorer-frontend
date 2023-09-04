import {useEffect, useState} from "react";
import './Movies.css';
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Button from "../../components/ui/Button/Button";
import {moviesApi} from "../../utils/MoviesApi";
import {api} from "../../utils/MainApi";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import * as consts from "../../utils/Consts";

function Movies() {
    const isDesktop = useMediaQuery("(min-width: 1280px)");
    const isTablet = useMediaQuery("(min-width: 600px)");
    const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('filteredMovies')));
    const [isLoading, setIsLoading] = useState(false);
    const [searchError, setSearchError] = useState("");
    const [serverError, setServerError] = useState("");
    const [saveError, setSaveError] = useState("");
    const [savedMovies, setSavedMovies] = useState("");
    const [errorId, setErrorId] = useState('');
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [cards, setCards] = useState(getInitialCardCount());
    const [moreButton, setMoreButton] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);


    useEffect(() => {
        console.log("cards:"+cards);
        console.log("btn"+moreButton);
        console.log("isD:"+isDesktop);
        console.log("isT:"+isTablet);
        console.log("columns:"+getCardColumnCount());
        console.log("initial:"+getInitialCardCount());
    })

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
        const search = localStorage.getItem('searchRequestMovies')
        const movies = JSON.parse(localStorage.getItem('movies'))
        if (movies && search) {
            const searchResult = movies.filter(movie =>
                movie.nameRU.toLowerCase().includes(search) || movie.nameEN.toLowerCase().includes(search));
            setSearchedMovies(searchResult);
        }
    }, []);

    function handleToggle(isChecked) {
        if (isChecked) {
            const toggleResult = searchedMovies.filter(movie => movie.duration <= 40);
            setFilteredMovies(toggleResult);
            localStorage.setItem('filteredMovies', JSON.stringify(toggleResult));
            if (toggleResult) {
                setSearchError('Ничего не найдено');
            } else {
                setSearchError("");
            }
        } else {
            setFilteredMovies(searchedMovies);
            localStorage.setItem('filteredMovies', JSON.stringify(searchedMovies));
            setSearchError("");
        }
    }

    function filterMovies(movies, search, isChecked) {
        const searchResult = movies.filter(movie =>
            movie.nameRU.toLowerCase().includes(search) || movie.nameEN.toLowerCase().includes(search));
        setSearchedMovies(searchResult);
        if (isChecked) {
            const toggleResult = searchResult.filter(movie => movie.duration <= 40);
            setFilteredMovies(toggleResult);
            localStorage.setItem('filteredMovies', JSON.stringify(toggleResult));
            if (toggleResult.length === 0) {
                setSearchError('Ничего не найдено');
            } else {
                setSearchError("");
            }
        } else {
            setFilteredMovies(searchResult);
            localStorage.setItem('filteredMovies', JSON.stringify(searchResult));
        }
        if (searchResult.length === 0) {
            setSearchError('Ничего не найдено');
        } else {
            setSearchError("");
        }
        setIsSubmitting(false);
        setIsLoading(false);
    }

     const handleSubmitMovies = (searchRequest, isChecked) => {
        setIsLoading(true);
        setCards(getInitialCardCount());
        setIsSubmitting(true);
        const movies = JSON.parse(localStorage.getItem("movies"));
        if (movies !== null) {
            filterMovies(movies, searchRequest, isChecked);
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
                    })), searchRequest, isChecked);
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
                    setIsSubmitting(false);
                });
        }
    }

    const handleAddToSaved = (movie) => {
        setErrorId(movie.movieId);
        setIsSubmitting(true);
        api.saveMovie(movie)
            .then(savedMovie => {
                setSavedMovies([...savedMovies, savedMovie]);
            })
            .catch(() => {
                setSaveError('При сохранении фильма произошла ошибка');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const handleDeleteFromSaved = (movieId, id) => {
        setErrorId(movieId);
        setIsSubmitting(true);
        api.deleteMovie(id)
            .then(() => {
                setSavedMovies(prevSavedMovies =>
                    prevSavedMovies.filter(movie => movie.movieId !== movieId)
                );
            })
            .catch(() => {
                setSaveError('При удалении сохраненного фильма произошла ошибка');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

//Функционал кнопки "Ещё"
             function getCardColumnCount() {
           const cardColumnCount = isDesktop
               ? consts.LG_ROW_CARD_COUNT
               : isTablet
                   ? consts.MD_ROW_CARD_COUNT
                   : consts.SM_ROW_CARD_COUNT;
           return cardColumnCount
       }
    function getInitialCardCount() {
        const initialCardCount = isDesktop
            ? consts.LG_INITIAL_CARD_COUNT
            : isTablet
                ? consts.MD_INITIAL_CARD_COUNT
                : consts.SM_INITIAL_CARD_COUNT;
        return initialCardCount
       }

    const handleClickMore = () => {
        setCards(cards + getCardColumnCount());
        console.log("test")
    };

    const updateMoreButton = (cardsCount) => {
        if (filteredMovies?.length > cardsCount) {
            setMoreButton(true);
        } else {
            setMoreButton(false);
        }
    };

    useEffect(() => {
        updateMoreButton(cards);
    }, [filteredMovies, cards]);

    const handleResize = () => {
        const updateCardsCount = getInitialCardCount();
        setCards(updateCardsCount);
        updateMoreButton(updateCardsCount);
    };

    useEffect(() => {
        handleResize()
    }, [getInitialCardCount()])

       return (
        <main className="movies">
            <SearchForm
                handleSubmitSearch={handleSubmitMovies}
                handleToggle={handleToggle}
                isSubmitting={isSubmitting}

            />
            <MoviesCardList
                isLoading={isLoading}
                filteredMovies={filteredMovies?.slice(0, cards)}
                searchError={searchError}
                serverError={serverError}
                handleDeleteFromSaved={handleDeleteFromSaved}
                handleAddToSaved={handleAddToSaved}
                saveError={saveError}
                errorId={errorId}
                setErrorId={setErrorId}
                key={"m"}
                savedMovies={savedMovies}
                searchedMovies={searchedMovies}
                setFilteredMovies={setFilteredMovies}
                isSubmitting={isSubmitting}
            />
            {moreButton && <Button
                children={"Ещё"}
                type={"button"}
                kind={"more"}
            onClick={handleClickMore}
            /> }
        </main>
    )
}

export default Movies;
