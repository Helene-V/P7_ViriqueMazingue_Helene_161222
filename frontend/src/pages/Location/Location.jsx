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
        <div className='locationContainer'>
            <div className='containerSlides'>
                <Slideshow image={location.pictures} />
            </div>
            <div className='location'>
            <div className='locationInfo'>
                <div className='locationTitle'>{location.title}</div>
                    <p className='locationLocalisation'>{location.location}</p>
                    <div className='locationTags'>
                        {location.tags.map(tag => (
                            <Tag key={tag} tag={tag} />
                        ))}
                    </div>
                </div>    
            <div className='containerHost'>
                <div className='namePict'>
                <p className='hostName'>{location.host.name}</p>
                <img className='profil' src={location.host.picture} alt=''/>
                </div>
                <Rating ratingValue={location.rating} />
            </div>
            </div>
            <div className='locationCollapse'>
                <Collapse className='descriptionCollapse' title="Description" description={location.description} />
                <Collapse className='equipmentCollapse' title="Équipements" description={
                    <ul>{location.equipments.map(equipments => (
                        <li key={equipments}>{equipments}</li>
                        ))}
                    </ul>}
                />
            </div>    
        </div>
    )
}

export default Location