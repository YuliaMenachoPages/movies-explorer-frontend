import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {useForm} from '../../hooks/useForm';
import './SearchForm.css';
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import Toggle from "../ui/Toggle/Toggle";

function SearchForm(props) {
    const [searchValue, setSearchValue] = useState("");
    const [errorVisible, setErrorVisible] = useState(false);
    const location = useLocation();
    const {formValue, handleChange,} = useForm();
    const [togglerStatus, setTogglerStatus] = useState(false);

    useEffect(() => {
        if (location.pathname === '/movies') {
            setSearchValue(localStorage.getItem('searchRequestMovies'));
        }
    }, []);

    function handleSearch(e) {
    handleChange(e);
        setSearchValue(e.target.value);
        setErrorVisible(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!formValue.search) {
            setErrorVisible(true);
        } else {
            props.handleSubmitSearch(formValue.search.toLowerCase().trim(), togglerStatus);
            if (location.pathname === '/movies') {
                localStorage.setItem('searchRequestMovies', formValue.search.toLowerCase().trim());
            }
        }
    }

    return (
        <section>
            <form className="searchForm" onSubmit={handleSubmit} id={"search"}>
                <fieldset className="searchForm__bar">
                    < Input
                        name={"search"}
                            errorText={errorVisible && "Нужно ввести ключевое слово"}
                            type={"text"}
                            kind={"search"}
                            inpId={"search"}
                            placeholder={"Фильм"}
                        onChange={handleSearch}
                        value={searchValue || ""}
                            />
                    < Button kind={"search"} type={"submit"} form={"search"} disabled={props.isSubmitting}/>
                </fieldset>
                <div className="searchForm__toggleWrapper">
                    < Toggle
                    togglerStatus={togglerStatus}
                    setTogglerStatus={setTogglerStatus}
                    searchedMovies={props.searchedMovies}
                    filteredMovies={props.filteredMovies}
                    setFilteredMovies={props.setFilteredMovies}
                    handleToggle={props.handleToggle}
                    />
                </div>
            </form>
        </section>
    )
}

export default SearchForm;
