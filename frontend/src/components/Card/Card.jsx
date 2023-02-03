import React from 'react';
import '../Card/Card.css';


function Card(Locations) {
    const title = Locations.title
    const cover = Locations.cover

    return (
        <article className='cardContainer' >
                <img className='cardImg' src={cover} alt='' />
                <div className='cardFilter'></div>
                <h2 className='cardTxt'>{title}</h2>
        </article>
    )
}

export default Card;
