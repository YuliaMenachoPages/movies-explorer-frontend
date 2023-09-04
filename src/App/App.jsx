import React, {useState, useEffect} from "react";
import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import ProtectedRouteElement from "../ProtectedRoute";
import About from "../pages/About/About";
import Movies from "../pages/Movies/Movies";
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import Main from "../layouts/Main/Main";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import * as auth from '../utils/MainApiAuth';
import {api} from "../utils/MainApi";


function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [serverError, setServerError] = useState('');
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        handleTokenCheck();
    }, [])
    const handleTokenCheck = () => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            auth.checkToken(token).then((res) => {
                if (res) {
                    setLoggedIn(true);
                    setEmail(res.email);
                    setName(res.name);
                }
            })
                .catch((err) => console.log(err))
        }
    }

    useEffect(() => {
        if (loggedIn === true) {
            Promise.all([
                    api.getUserData(),
                ]
            )
                .then(res => {
                    setCurrentUser(res[0]);
                })
                .catch((err) => console.log(err));

        }}, [loggedIn]);

    function handleLogin() {
        setLoggedIn(true);
    }

    function logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('searchRequestMovies');
        localStorage.removeItem('togglerStatus');
        localStorage.removeItem('filteredMovies');
        localStorage.removeItem('movies');
        setLoggedIn(false);
    }

    const handleSubmitLogin = (email, password) => {
            setIsSubmitting(true);
        auth.login(email, password)
            .then((data) => {
                    if (data) {
                        handleLogin();
                        navigate('/movies', {replace: true});
                    }
                }
            )
            .catch((error) => {
                if (error.status === 401) {
                    setServerError('Вы ввели неправильный логин или пароль.');
                    return;
                } else {
                    setServerError('При авторизации произошла ошибка.');
                }
                setTimeout(() => {
                    setServerError('');
                }, 5000);
            }
            )
            .finally(() => {
                setIsSubmitting(false);
            })
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
        <div className="app">
            <Routes>
                <Route path="/" element={<Main loggedIn={loggedIn} logOut={logOut}/>}>
                    <Route index element={<About/>}/>
                    <Route path="movies" element={<ProtectedRouteElement element={[Movies]}/>}/>
                    <Route path="saved-movies" element={<ProtectedRouteElement element={[SavedMovies]}/>}/>
                </Route>
                <Route path="/profile" element={<ProtectedRouteElement element={[Profile]}
                    email={email}
                    name={name}
                    logOut={logOut}
                    loggedIn={loggedIn}
                    serverError={serverError}
                    setCurrentUser={setCurrentUser}
                />}/>
                <Route path="/signin" element={<Login
                    handleSubmitLogin={handleSubmitLogin}
                    serverError={serverError}
                    loggedIn={loggedIn}
                    isSubmitting={isSubmitting}
                />}/>
                <Route path="/signup" element={<Register
                    handleSubmitLogin={handleSubmitLogin}
                    loggedIn={loggedIn}
                />}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </div>
        </CurrentUserContext.Provider>
    )
}

export default App;
