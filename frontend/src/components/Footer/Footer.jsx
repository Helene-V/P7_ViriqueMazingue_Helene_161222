import React from "react";
import logo_kasa_w from '../../assets/logo_kasa_w.png'
import '../Footer/Footer.css'

function Footer() {
    return (
        <footer className='containerFooter'>
            <div className='footerBalance'>
                <div className='logo-kasaF'>
                    <img src={logo_kasa_w} alt='Kasa' />
                </div>
                <div>
                    <p className="allRights">© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer