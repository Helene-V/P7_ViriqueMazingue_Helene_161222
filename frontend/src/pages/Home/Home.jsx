import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import { dataLocations } from '../../data/dataLocations';
import home_banner from '../../assets/home_banner.jpg'
import '../Home/Home.css';

function Home() {

    const [Locations, setLocations] = useState([]);

useEffect(() => {
    
    setLocations(dataLocations.getLocations());
    
  }, [])

    return ( 
        <div className='cardHome'>       
            <Banner src={home_banner} text='Chez vous, partout et ailleurs' />
            <main>
                <div className='containerHome'>{Locations.map((location) => {
                    return (             
                        <Link key={location.id} to={`/location/${location.id}`}>
                            <Card key={location.id} cover={location.cover} title={location.title} />
                        </Link>
                    )
                })}
                </div>
            </main>
        </div>

    )
}

export default Home


//src={require(`../../assets/${home_banner}.jpg`)}