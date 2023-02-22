import React, { useState } from 'react';
import '../Slideshow/Slideshow.css';

function Slideshow(location) {
    // Définition de image, récupération de l'image via les (props)
    const image = location.image
    // Déclaration de la variable d'état { State } imageIndex ayant pour valeur initiale 0
    const [imageIndex, setImageIndex] = useState(0);

// Cette fonction permet de décrémenter l'image de 1 pour passer à la suivante, si l'index = 0, on retourne à la dernière image
function handleNext() {
    setImageIndex((prevIndex) => {
        return prevIndex > 0 ? prevIndex - 1 : image.length -1;
    })
}

// Selon l'index de l'image par rapport au tableau, la fonction retourne + 1 pour l'image suivante ou retourne à l'index 0
function handlePrevious() {
    setImageIndex((prevIndex) => {
        return prevIndex + 1 < image.length ? prevIndex + 1 : 0;
    })
}
    // Affichage des flèches directionnelles s'il y a plus d'une image dans le carrousel
    return (
        <div className='slideshowContainer'>
            <img className='slideshowImage' src={image[imageIndex]} alt='slide' />
            {image.length > 1 ? (
                <>
                <div className='slideshowArrow'>
                    <div className='slideshowArrowNext'>
                        <img className='arrowNext' src={require('../../assets/location_arrow_left.png')} onClick={handleNext} alt='next' />
                    </div>
                    <div className='slideshowArrowPrev'>
                        <img className='arrowPrev' src={require('../../assets/location_arrow_right.png')}onClick={handlePrevious} alt='previous'/>
                    </div>
                </div>
                    <p className='indexPictures'>{imageIndex + 1}/{image.length}</p>
                </>
            ) : null}
        </div>
    )
}

export default Slideshow;