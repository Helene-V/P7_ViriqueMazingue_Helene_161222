import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Navigation.css'

function Navigation() {
    return (
        <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
        </nav>
    )
}

export default Navigation