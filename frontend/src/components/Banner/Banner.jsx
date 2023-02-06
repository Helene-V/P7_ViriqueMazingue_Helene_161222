import React from 'react';
//import home_banner from '../../assets/home_banner.jpg'
import '../Banner/Banner.css'

function Banner({assets}) {


    return (
        <section className='containerBanner'>
            <img className='bannerImg' src={assets} alt='Paysage' />
            <div className='bannerFilter'></div>
        </section>
    );
}

export default Banner;


// src='/banner.jpg'
// src={`/assets${index}.jpg`} chemin dynamique
//assets={require(`../assets/home_banner/${home_banner}.jpg`)}

//https://openclassrooms.com/fr/courses/7008001-debutez-avec-react/7136837-partagez-votre-state-entre-differents-composants