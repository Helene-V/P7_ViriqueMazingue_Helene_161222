import React from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

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