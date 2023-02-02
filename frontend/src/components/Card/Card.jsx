import React from 'react';
import '../Card/Card.css';


function Card(Locations) {
    const title = Locations.title
    const cover = Locations.cover

    return (
        <article >
            <img className="imageCard" src={cover} alt='' />
            <h2>{title}</h2>
        </article>
    )
}

export default Card;
