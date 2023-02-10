import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow';
//import Tag from '../../components/Tag/Tag';
import { dataLocations } from '../../data/dataLocations';
import '../Location/Location.css';

function Location() {

    let {id} = useParams()
    const location = dataLocations.getLocationsById(id)
    console.log(location)


    return (       
            <main>
                <div className='containerSlides'>
                    <Slideshow image={location.pictures} />
                </div>
                <div className='infoLocation'>
                <h1 className='locationTitle'>{location.title}</h1>
                <p>{location.location}</p>
                <div>
                   {location.tags}
                </div>
                </div>            
            </main>
    )
}

export default Location