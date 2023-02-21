import React from 'react';
import '../Tag/Tag.css';

function Tag(tags) {
    // Récupération des tags des logements (props)
    const tag = tags.tag

return (
        <div className='tag'>{tag}</div>
    );
}

export default Tag;