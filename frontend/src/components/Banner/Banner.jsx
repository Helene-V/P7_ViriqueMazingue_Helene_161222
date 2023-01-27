import React from 'react';
import home_banner from '../../assets/home_banner.jpg'
import '../Banner/Banner.css'

function Banner() {
    return (
        <section className='containerBanner'>
            <img src={home_banner} alt='ImageNature' className='bannerImg'  />
            <div className='bannerFilter'></div>
            <h1 className='bannerTxt'>Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default Banner