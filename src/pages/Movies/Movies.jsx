import './Movies.css';
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Button from "../../components/ui/Button/Button";

function Movies() {
    const isSaved = false;
    return (
        <div className="movies">
            <SearchForm/>
            <MoviesCardList children={isSaved ? <Button kind={"saved"} type={"input"}/> :
                <Button kind={"save"} type={"input"} children={"Сохранить"}/>}/>
            <Button children={"Ещё"} kind={"more"}/>
        </div>
    )
}

export default Movies;
