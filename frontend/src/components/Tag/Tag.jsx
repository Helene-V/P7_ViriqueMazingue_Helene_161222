import React from 'react';
import '../Tag/Tag.css';

function Tag(tags) {
    const tag = tags.tag

return (
        <div className='tag'>{tag}</div>
    );
}

export default Tag;