import React, { useState } from 'react';
import '../Slideshow/Slideshow.css';


function Slideshow(location) {
    const image = location.image
    const [imageIndex, setImageIndex] = useState(0);

function handleNext() {
    setImageIndex((prevIndex) => {
        return prevIndex + 1 < image.length ? prevIndex + 1 : 0;
    })
}

function handlePrevious() {
    setImageIndex((prevIndex) => {
        return prevIndex > 0 ? prevIndex - 1 : image.length -1;
    })
}

    return (
        <div className='slideshowContainer'>
            <img className='slideshowImage' src={image[imageIndex]} alt='slide' />
            {image.length > 1 ? (
                <>
                <div className='slideshowArrow'>
                    <div className='slideshowArrowNext'>
                    <img src={require('../../assets/location_arrow_left.png')} onClick={handleNext} alt='next' />
                    </div>
                    <div className='slideshowArrowPrev'>
                    <img src={require('../../assets/location_arrow_right.png')}onClick={handlePrevious} alt='previous'/>
                    </div>
                </div>
                    <p className='indexPictures'>{imageIndex + 1}/{image.length}</p>
                </>
            ) : null}
        </div>
    )
}

export default Slideshow;