import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {useForm} from '../../hooks/useForm';
import './SearchForm.css';
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import Toggle from "../ui/Toggle/Toggle";

function SearchForm(props) {
    const [searchValue, setSearchValue] = useState("")
    const location = useLocation();
    const {formValue, handleChange, errors, isValid} = useForm();


    useEffect(() => {
        if (location.pathname === '/movies') {
            setSearchValue(localStorage.getItem('searchRequestMovies'));
        }

    },[] );

    function handleSearch(e) {
    handleChange(e);
        setSearchValue(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
                props.handleSubmitSearch(formValue.search);
        if (location.pathname === '/movies') {
            localStorage.setItem('searchRequestMovies', formValue.search);
        }
        if (location.pathname === '/saved-movies') {
            localStorage.setItem('searchRequestSavedMovies', formValue.search);
        }
    }


    return (
        <section>
            <form className="searchForm" onSubmit={handleSubmit} id={"search"}>
                <fieldset className="searchForm__bar">
                    < Input
                        name={"search"}
                            errorText={errors.search}
                            type={"text"}
                            kind={"search"}
                            inpId={"search"}
                            placeholder={"Фильм"}
                        onChange={handleSearch}
                        value={searchValue || ""}
                            required/>
                    < Button kind={"search"} type={"submit"} form={"search"} disabled={!isValid}/>
                </fieldset>
                <div className="searchForm__toggleWrapper">
                    < Toggle/>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;
