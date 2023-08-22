import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({children}) {
    return (
        <section className="moviesCardList">
            {/*<Preloader />*/}
            <ul className="moviesCardList__wrapper">
                < MoviesCard children={children}/>
                < MoviesCard children={children}/>
                < MoviesCard children={children}/>
                < MoviesCard children={children}/>
                < MoviesCard children={children}/>
                {/*< MoviesCard children={children}/>*/}
                {/*< MoviesCard children={children}/>*/}
                {/*< MoviesCard children={children}/>*/}
                {/*< MoviesCard children={children}/>*/}
                {/*< MoviesCard children={children}/>*/}
                {/*< MoviesCard children={children}/>*/}
                {/*< MoviesCard children={children}/>*/}
            </ul>
        </section>
    )
}

export default MoviesCardList;
