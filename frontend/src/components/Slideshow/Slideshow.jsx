import React from 'react';
//const Slideshow = ({location}) => {
 //   return <div>Image slider</div>
//}
function Slideshow(location) {
    const images = location.images 

    return (
        <div>
            <img src={images} alt='hello' />
            <div>Hello</div>
        </div>
    )
}

export default Slideshow;
//export default Slideshow

/*import React, { useState } from 'react';
import '../Slideshow/Slideshow.css';

function Slideshow(Locations) {
    const pictures = Locations.pictures
    
    const [index, setIndex] = useState(0);
    const length = 3;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };


    return (
        <div className="Slideshow">
            <div onClick={handlePrevious}>Previous</div>
            <div onClick={handleNext}>Next</div>
            <div>           
                {Slideshow.map((pictures,index) => (
                    <div key={index}>
                ))}
                    </div>
            </div>
        </div>
    )
}
export default Slideshow;*/