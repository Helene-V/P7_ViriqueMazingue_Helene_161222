import React from 'react';
import '../Banner/Banner.css';

function Banner(banner) {
    const text = banner.text
    const src = banner.src
    

return (
        <section className='containerBanner'>
            <img className='bannerImg' src={src} alt=''/>
            <div className='bannerFilter'></div>
            <h1 className='bannerTxt'>{text}</h1>
        </section>
    );
}

export default Banner;

//<img className='bannerImg' src={ page === 'Home' ? <img src={home_banner} alt="Image 1" /> : <img src={about_banner} alt="Image 2" /> } />

//let { assets } = (isHome ? require(`../../assets/${home_banner}.jpg`)) : (isAbout ? require(`../../assets/${about_banner}.jpg`))
//let home = require('../../assets/home_banner.jpg')
//let about = require('../../assets/about_banner.jpg')
//<img className='bannerImg' src={ isHome ? home : about} alt='Paysage' />

// src='/banner.jpg'

// src={`/assets${index}.jpg`} chemin dynamique

//assets={require(`../assets/home_banner/${home_banner}.jpg`)}

//<h1>{text}</h1> que je récup depuis la page home

//https://openclassrooms.com/fr/courses/7008001-debutez-avec-react/7136837-partagez-votre-state-entre-differents-composants