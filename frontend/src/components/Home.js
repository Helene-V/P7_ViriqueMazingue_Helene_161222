import React from 'react';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (        
        <div>
            <Banner />
            <main className='containerCard'>
                <Card />
            </main>
        </div>

    )
}

export default Home