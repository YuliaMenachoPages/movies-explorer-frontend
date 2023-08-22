import './Movies.css';
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Button from "../../components/ui/Button/Button";

function Movies() {
    const isSaved = false;
    return (
        <main className="movies">
            <SearchForm/>
            <MoviesCardList children={isSaved ? <Button kind={"saved"} type={"button"}/> :
                <Button kind={"save"} type={"button"} children={"Сохранить"}/>}/>
            <Button children={"Ещё"} type={"button"} kind={"more"}/>
        </main>
    )
}

export default Movies;
