import React from 'react';
import { NavLink } from 'react-router-dom';
import '../ErrorPage/ErrorPage.css';

function ErrorPage() {
    return (
        <div className="errorContainer">
            <div className="errorTitle">404</div>
            <p className="errorParagraph">Oups ! La page que vous demandez n’existe pas.</p>
            <NavLink className="errorLink" to="/accueil">Retourner sur la page d’accueil</NavLink>
        </div>
    )
}

export default ErrorPage