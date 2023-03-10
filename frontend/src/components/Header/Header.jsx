import React from 'react';
import Navigation from '../Navigation/Navigation';
import logo_kasa from '../../assets/logo_kasa.png';
import '../Header/Header.css';

function Header() {
    // Imbrication du component Navigation dans le component Header
    return (
        <header className='containerHeader'>
                <div className='logo-kasa'>
                    <img src={logo_kasa} alt='Kasa' className='logoStyle' />
                </div>
                <div className='navbar'>
                    <Navigation />
                </div>
        </header>
    )
}

export default Header;