import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About/About";
import Movies from "../pages/Movies/Movies";
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import Main from "../layouts/Main/Main";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<About/>}/>
                    <Route path="movies" element={<Movies/>}/>
                    <Route path="saved-movies" element={<SavedMovies/>}/>
                </Route>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/signin" element={<Login/>}/>
                <Route path="/signup" element={<Register/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </div>
    )
}

export default App;
