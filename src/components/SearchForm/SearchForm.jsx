import './SearchForm.css';
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import Toggle from "../ui/Toggle/Toggle";

function SearchForm() {
    return (
       <div className="searchForm">
           <div className="searchForm__bar">
           < Input type={"text"} kind={"search"} placeholder={"Фильм"}/>
           < Button kind={"search"}/>
           </div>
           <div className="searchForm__toggleWrapper">
               < Toggle />
           </div>
       </div>
    )
}

export default SearchForm;
