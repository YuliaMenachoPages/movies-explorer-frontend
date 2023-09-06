import './FormWrapper.css';
import Logo from "../Logo/Logo";

function FormWrapper({title, children, button, text, link, id, handleSubmit, serverError}) {
    return (
        <div className="formWrapper">
            <header className="formWrapper__header"><Logo/></header>
            <main className="formWrapper__main">
                <section>
                    <h1 className="formWrapper__title">{title}</h1>
                    <form className="formWrapper__form" id={id} onSubmit={handleSubmit}>
                        <fieldset className="formWrapper__fieldset">
                            <div>
                                {children}
                            </div>
                            <span className="formWrapper__error">{serverError}</span>
                            <div className="formWrapper__button">{button}</div>
                        </fieldset>
                    </form>
                    <div className="formWrapper__linkWrapper">
                        <p className="formWrapper__text">{text}</p>
                        {link}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default FormWrapper;
