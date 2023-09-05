import './Burger.css';

function Burger(props) {


    return (
        <div className={`burger ${props.isMenuOpen && "burger_active"}`}>
            <form className="burger__container">
                <input
                    className="burger__checkbox"
                    type="checkbox"
                    onChange={props.handleBurgerClick}
                    checked={props.isMenuOpen}
                />
                <div className="burger__wrapper">
                    <span className="burger_line burger_line_1"></span>
                    <span className="burger_line burger_line_2"></span>
                    <span className="burger_line burger_line_3"></span>
                </div>
             </form>
        </div>
    )
}

export default Burger;
