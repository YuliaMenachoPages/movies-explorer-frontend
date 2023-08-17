import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({children}) {
    return (
        <div className="moviesCardList">
            {/*<Preloader />*/}
            <div className="moviesCardList__wrapper">
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
            </div>
        </div>
    )
}

export default MoviesCardList;
