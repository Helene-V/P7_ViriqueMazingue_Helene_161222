import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navigation/Navigation.css';

function Navigation() {
    // Styled component avec opérateur logique
    const navStyle = ({ isActive }) => {
        return {
            borderBottom: isActive && "3px solid #FF6060"
        }
    }

    return (
        <nav>
                <NavLink style={navStyle} to="/accueil">Accueil</NavLink>
                <NavLink style={navStyle} to="/a-propos">A propos</NavLink>
        </nav>
    )
}

export default Navigation;