import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';
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
            <div className='locationInfo'>
                <h1 className='locationTitle'>{location.title}</h1>
                <p>{location.location}</p>
                <div className='locationTags'>
                    {location.tags.map(tag => (
                        <Tag key={tag} tag={tag} />
                    ))}
                </div>
            </div>    
            <div className='containerHost'>
                <p className='hostName'>{location.host.name}</p>
                <img src={location.host.picture} alt=''/>
            </div>        
        </main>
    )
}

export default Location