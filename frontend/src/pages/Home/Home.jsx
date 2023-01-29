import React from 'react';
//import getData from '../../../public/data/data';
//import axios from 'axios';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

function Home() {
//const { data, setData } = useState([]);
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