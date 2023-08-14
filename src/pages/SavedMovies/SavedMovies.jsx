import './SavedMovies.css';
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Button from "../../components/ui/Button/Button";

function SavedMovies() {
    return (
        <div className="savedMovies">
            <SearchForm />
            <MoviesCardList children={<Button kind={"delete"} type={"input"} />} />
        </div>
    )
}

export default SavedMovies;