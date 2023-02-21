import React from 'react';
import { NavLink } from 'react-router-dom';
import '../ErrorPage/ErrorPage.css';

function ErrorPage() {
    // Création d'une page d'erreur et utilisation de NavLink pour retourner sur la page d'accueil
    return (
        <div className="errorContainer">
            <div className="errorTitle">404</div>
            <p className="errorParagraph">Oups ! La page que vous demandez n’existe pas.</p>
            <NavLink className="errorLink" to="/accueil">Retourner sur la page d’accueil</NavLink>
        </div>
    )
}

export default ErrorPage;