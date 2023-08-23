import './SearchForm.css';
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import Toggle from "../ui/Toggle/Toggle";

function SearchForm() {
    return (
        <section>
            <form className="searchForm">
                <fieldset className="searchForm__bar">
                    < Input type={"text"} kind={"search"} placeholder={"Фильм"} required/>
                    < Button kind={"search"} type={"submit"}/>
                </fieldset>
                <div className="searchForm__toggleWrapper">
                    < Toggle/>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;
