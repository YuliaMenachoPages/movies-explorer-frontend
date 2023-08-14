import './Error.css';
import NavLinkComp from "../../components/ui/NavLinkComp/NavLinkComp";
import {useNavigate} from "react-router-dom";

function Error() {
    const navigate= useNavigate()
    return (
     <div className="error">
         <div className="error__contentWrapper">
         <h1 className="error__status">404</h1>
         <p className="error__message">Страница не найдена</p>
         </div>
         <div className="error__linkWrapper">
         <NavLinkComp children={"Назад"} onClick={() => navigate(-1)} kind={"blue"}/>
             </div>
     </div>
    )
}

export default Error;
