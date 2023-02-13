import React from 'react';
import star_color from '../../assets/star_color.png';
import star_empty from '../../assets/star_color.png';
import '../Rating/Rating.css';

function Rating(rating) {
    const stars = [1,2,3,4,5]

return (
        <div className='containerRating'>
            {stars.map((star) =>
            rating >= star ? (
                <img
                    key={star.toString()}
                    src={star_color}
                    alt=''
                />
            ) : (
                <img
                    key={star.toString()}
                    src={star_empty}
                    alt=''
                />
            )
            )}
        </div>
    );
}

export default Rating;