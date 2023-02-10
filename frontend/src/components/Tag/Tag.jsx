import React from 'react';
import '../Tag/Tag.css';

function Tag(tags) {
    const text = tags.text
    

return (
        <section className='containerTag'>
            <p className='tagText'>{text}</p>
        </section>
    );
}

export default Tag;