import React from 'react';
import Navigation from './Navigation';
import logo_kasa from '../assets/logo_kasa.png'
import '../styles/Header.css'

function Header() {
    return (
        <header className='containerHeader'>
            <div className='logo-kasa'>
                <img src={logo_kasa} alt='Kasa' className='logoStyleH' />
            </div>
            <div className='navbar'>
                <Navigation />
            </div>
        </header>
    )
}

export default Header