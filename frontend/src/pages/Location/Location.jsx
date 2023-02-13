import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse';
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
                <Rating ratingValue={location.rating} />
            </div>
            <div>
                <Collapse title="Description" description={location.description} />
                <Collapse title="Équipements" description={
                    <ul>{location.equipments.map(equipments => (
                        <li key={equipments}>{equipments}</li>
                        ))}
                    </ul>}
                />
            </div>    
        </main>
    )
}

export default Location