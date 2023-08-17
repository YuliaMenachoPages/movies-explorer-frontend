import './FormWrapper.css';
import Logo from "../Logo/Logo";

function FormWrapper({title, children, button, text, link}) {
    return (
        <div className="formWrapper">
            <header className="formWrapper__header"><Logo/></header>
            <main className="formWrapper__main">
                <h1 className="formWrapper__title">{title}</h1>
                <form className="formWrapper__form">
                    <fieldset className="formWrapper__fieldset">
                        <div>
                            {children}
                        </div>
                        <div className="formWrapper__button">{button}</div>
                    </fieldset>
                </form>
                <div className="formWrapper__linkWrapper">
                    <p className="formWrapper__text">{text}</p>
                    {link}
                </div>
            </main>
            <footer></footer>
        </div>
    )
}

export default FormWrapper;
