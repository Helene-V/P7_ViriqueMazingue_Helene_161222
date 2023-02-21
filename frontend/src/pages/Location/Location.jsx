import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse';
import ErrorPage from '../ErrorPage/ErrorPage';
import { dataLocations } from '../../data/dataLocations';
import '../Location/Location.css';

function Location() {
    // Récupération de la data par id pour afficher le contenu par location sur la fiche logement
    let {id} = useParams()
    const location = dataLocations.getLocationsById(id)

    // Affichage page d'erreur
    if (!location) {
        return <ErrorPage />
    }

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
                        <Rating className='locationRating' ratingValue={location.rating} />
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

export default Location;