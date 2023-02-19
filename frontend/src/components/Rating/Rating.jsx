import React from 'react';
import star_color from '../../assets/star_color.png';
import star_empty from '../../assets/star_empty.png';
import '../Rating/Rating.css';

function Rating(rating) {
    
    const ratingValue = rating.ratingValue;
    const stars = [1,2,3,4,5];

return (
        <div className='containerRating'>
            {stars.map((star) =>
            star <= ratingValue ? (
                <img
                    className='star'
                    key={star}
                    src={star_color}
                    alt=''
                />
            ) : (
                <img
                    className='star'
                    key={star}
                    src={star_empty}
                    alt=''
                />
            )
            )}
        </div>
    );
}

export default Rating;