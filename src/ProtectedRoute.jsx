import React from 'react';
import {Navigate} from 'react-router-dom';

function ProtectedRouteElement({element: Components, ...props}) {
    const loggedIn = localStorage.getItem('token') !== null;
    return (
        loggedIn ? Components.map((Component) => (<Component {...props} key={`${Component}`}/>)) :
            <Navigate to='/' replace/>
    )
}

export default ProtectedRouteElement;
