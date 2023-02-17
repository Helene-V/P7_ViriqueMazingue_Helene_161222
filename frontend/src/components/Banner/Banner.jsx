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